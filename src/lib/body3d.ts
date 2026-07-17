/**
 * Corpo umano stilizzato low-poly costruito proceduralmente (nessun asset esterno).
 * Le zone del dolore sono mesh cliccabili via raycasting; la selezione emette
 * l'evento custom `zona-selezionata` gestito dal componente Astro ospite.
 */
import {
  AmbientLight,
  CapsuleGeometry,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector2,
  WebGLRenderer,
} from 'three';

const COLORS = {
  body: 0x1c5a5e,
  zone: 0x7fbfbf,
  zoneHover: 0xf46f4d,
  zoneActive: 0xd95535,
};

interface ZoneDef {
  id: string;
  /** posizione [x, y, z] e raggio della sfera-zona */
  pos: [number, number, number];
  r: number;
  mirror?: boolean; // duplica specchiata su x (arti)
}

const ZONE_DEFS: ZoneDef[] = [
  { id: 'testa', pos: [0, 3.05, 0.12], r: 0.3 },
  { id: 'cervicale', pos: [0, 2.62, 0], r: 0.22 },
  { id: 'spalla', pos: [0.62, 2.35, 0], r: 0.24, mirror: true },
  { id: 'gomito', pos: [0.82, 1.68, 0], r: 0.18, mirror: true },
  { id: 'polso', pos: [0.92, 1.05, 0.05], r: 0.16, mirror: true },
  { id: 'schiena', pos: [0, 1.85, -0.22], r: 0.34 },
  { id: 'bacino', pos: [0, 1.12, 0], r: 0.3 },
  { id: 'anca', pos: [0.34, 1.0, 0], r: 0.2, mirror: true },
  { id: 'ginocchio', pos: [0.3, 0.28, 0.02], r: 0.2, mirror: true },
  { id: 'caviglia', pos: [0.3, -0.52, 0.06], r: 0.17, mirror: true },
];

function buildBody(): Group {
  const g = new Group();
  const mat = new MeshStandardMaterial({
    color: COLORS.body,
    roughness: 0.55,
    metalness: 0.05,
    flatShading: true,
  });

  const add = (geo: CapsuleGeometry | SphereGeometry, x: number, y: number, z: number, rz = 0) => {
    const m = new Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.z = rz;
    g.add(m);
    return m;
  };

  // testa, busto, bacino
  add(new SphereGeometry(0.34, 10, 8), 0, 3.05, 0);
  add(new CapsuleGeometry(0.42, 0.9, 3, 10), 0, 1.85, 0);
  add(new CapsuleGeometry(0.34, 0.25, 3, 10), 0, 1.05, 0);
  // collo
  add(new CapsuleGeometry(0.14, 0.25, 3, 8), 0, 2.62, 0);
  // braccia e gambe (specchiate)
  for (const s of [1, -1]) {
    add(new CapsuleGeometry(0.13, 0.55, 3, 8), 0.72 * s, 2.0, 0, s * 0.28); // braccio
    add(new CapsuleGeometry(0.11, 0.55, 3, 8), 0.88 * s, 1.32, 0.03, s * 0.12); // avambraccio
    add(new CapsuleGeometry(0.17, 0.62, 3, 8), 0.32 * s, 0.62, 0); // coscia
    add(new CapsuleGeometry(0.14, 0.6, 3, 8), 0.3 * s, -0.15, 0.03); // gamba
    add(new SphereGeometry(0.16, 8, 6), 0.3 * s, -0.58, 0.14); // piede
  }
  return g;
}

export interface Body3DHandle {
  select(zonaId: string | null): void;
  destroy(): void;
}

export function mountBody3D(container: HTMLElement): Body3DHandle {
  const scene = new Scene();
  scene.background = null;

  const camera = new PerspectiveCamera(38, 1, 0.1, 50);
  camera.position.set(0, 1.4, 6.4);
  camera.lookAt(0, 1.3, 0);

  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const body = buildBody();
  scene.add(body);

  scene.add(new AmbientLight(0xffffff, 0.9));
  const key = new DirectionalLight(0xfff4ea, 1.6);
  key.position.set(3, 5, 4);
  scene.add(key);
  const rim = new DirectionalLight(0x7fbfbf, 0.8);
  rim.position.set(-4, 2, -3);
  scene.add(rim);

  // zone cliccabili
  const zoneMat = () =>
    new MeshStandardMaterial({
      color: COLORS.zone,
      roughness: 0.4,
      transparent: true,
      opacity: 0.85,
      flatShading: true,
    });
  const zoneMeshes: Mesh[] = [];
  for (const z of ZONE_DEFS) {
    const make = (x: number) => {
      const m = new Mesh(new SphereGeometry(z.r, 12, 10), zoneMat());
      m.position.set(x, z.pos[1], z.pos[2]);
      m.userData.zonaId = z.id;
      body.add(m);
      zoneMeshes.push(m);
    };
    make(z.pos[0]);
    if (z.mirror) make(-z.pos[0]);
  }

  const raycaster = new Raycaster();
  const pointer = new Vector2();
  let hovered: Mesh | null = null;
  let activeId: string | null = null;

  const paint = () => {
    for (const m of zoneMeshes) {
      const mat = m.material as MeshStandardMaterial;
      if (m.userData.zonaId === activeId) mat.color = new Color(COLORS.zoneActive);
      else if (m === hovered) mat.color = new Color(COLORS.zoneHover);
      else mat.color = new Color(COLORS.zone);
    }
  };

  const pick = (e: PointerEvent): Mesh | null => {
    const r = renderer.domElement.getBoundingClientRect();
    pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    return (raycaster.intersectObjects(zoneMeshes)[0]?.object as Mesh) ?? null;
  };

  renderer.domElement.addEventListener('pointermove', (e) => {
    hovered = pick(e);
    renderer.domElement.style.cursor = hovered ? 'pointer' : 'grab';
    paint();
  });

  renderer.domElement.addEventListener('pointerdown', (e) => {
    const hit = pick(e);
    if (hit) {
      activeId = hit.userData.zonaId;
      paint();
      container.dispatchEvent(
        new CustomEvent('zona-selezionata', { detail: { zonaId: activeId }, bubbles: true }),
      );
    }
  });

  // rotazione: drag orizzontale + idle sway
  let dragging = false;
  let lastX = 0;
  let targetRotY = 0;
  renderer.domElement.addEventListener('pointerdown', (e) => {
    dragging = true;
    lastX = e.clientX;
  });
  addEventListener('pointerup', () => (dragging = false));
  addEventListener('pointermove', (e) => {
    if (dragging) {
      targetRotY += (e.clientX - lastX) * 0.008;
      lastX = e.clientX;
    }
  });

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf = 0;
  let t = 0;
  const loop = () => {
    raf = requestAnimationFrame(loop);
    t += 0.01;
    if (!dragging && !reduced) targetRotY += 0.0016; // lenta rotazione idle
    body.rotation.y += (targetRotY - body.rotation.y) * 0.08;
    if (!reduced) body.position.y = Math.sin(t) * 0.03;
    renderer.render(scene, camera);
  };
  loop();

  return {
    select(zonaId) {
      activeId = zonaId;
      paint();
    },
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      container.innerHTML = '';
    },
  };
}
