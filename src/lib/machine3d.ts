/**
 * Macchinario isocinetico stilizzato low-poly, costruito proceduralmente.
 * Orbita con drag; rotazione idle lenta. Nessun asset esterno.
 */
import {
  AmbientLight,
  BoxGeometry,
  CylinderGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from 'three';

export function mountMachine3D(container: HTMLElement) {
  const scene = new Scene();
  const camera = new PerspectiveCamera(40, 1, 0.1, 50);
  camera.position.set(0, 1.6, 6);
  camera.lookAt(0, 1, 0);

  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const teal = new MeshStandardMaterial({ color: 0x1c5a5e, roughness: 0.5, flatShading: true });
  const dark = new MeshStandardMaterial({ color: 0x123c40, roughness: 0.6, flatShading: true });
  const coral = new MeshStandardMaterial({ color: 0xf46f4d, roughness: 0.4, flatShading: true });
  const amber = new MeshStandardMaterial({ color: 0xf2b95c, roughness: 0.4, flatShading: true });

  const g = new Group();
  const add = (geo: BoxGeometry | CylinderGeometry | TorusGeometry, mat: MeshStandardMaterial, pos: [number, number, number], rot: [number, number, number] = [0, 0, 0]) => {
    const m = new Mesh(geo, mat);
    m.position.set(...pos);
    m.rotation.set(...rot);
    g.add(m);
    return m;
  };

  // base + colonna + sedile + dinamometro + braccio di leva
  add(new BoxGeometry(2.6, 0.2, 1.6), dark, [0, 0, 0]);
  add(new CylinderGeometry(0.16, 0.2, 1.8, 8), teal, [-0.9, 1.0, 0]);
  add(new BoxGeometry(1.1, 0.14, 0.9), teal, [0.4, 0.9, 0]); // seduta
  add(new BoxGeometry(0.14, 1.0, 0.9), teal, [0.98, 1.42, 0], [0, 0, -0.18]); // schienale
  const head = add(new CylinderGeometry(0.42, 0.42, 0.5, 10), dark, [-0.9, 2.0, 0], [Math.PI / 2, 0, 0]);
  add(new TorusGeometry(0.42, 0.07, 8, 16), amber, [-0.9, 2.0, 0.28]);
  const lever = new Group();
  const leverMesh = new Mesh(new BoxGeometry(0.12, 1.3, 0.12), coral);
  leverMesh.position.y = -0.65;
  lever.add(leverMesh);
  const pad = new Mesh(new CylinderGeometry(0.14, 0.14, 0.4, 8), amber);
  pad.rotation.z = Math.PI / 2;
  pad.position.set(0, -1.25, 0);
  lever.add(pad);
  lever.position.set(-0.9, 2.0, 0.34);
  g.add(lever);

  scene.add(g);
  scene.add(new AmbientLight(0xffffff, 0.85));
  const key = new DirectionalLight(0xfff4ea, 1.5);
  key.position.set(4, 6, 4);
  scene.add(key);
  const rim = new DirectionalLight(0x7fbfbf, 0.9);
  rim.position.set(-4, 3, -4);
  scene.add(rim);

  let dragging = false;
  let lastX = 0;
  let targetRotY = 0.5;
  renderer.domElement.style.cursor = 'grab';
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
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = 0;
  let raf = 0;
  const loop = () => {
    raf = requestAnimationFrame(loop);
    t += 0.012;
    if (!dragging && !reduced) targetRotY += 0.002;
    g.rotation.y += (targetRotY - g.rotation.y) * 0.08;
    // il braccio del dinamometro oscilla come durante un test
    if (!reduced) lever.rotation.x = Math.sin(t) * 0.55;
    void head;
    renderer.render(scene, camera);
  };
  loop();

  return {
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      container.innerHTML = '';
    },
  };
}
