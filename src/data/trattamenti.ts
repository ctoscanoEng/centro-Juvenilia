export interface Trattamento {
  slug: string;
  nome: string;
  metaTitle: string;
  metaDescription: string;
  sottotitolo: string;
  descrizione: string[];
  perChi: string[];
  comeFunziona: string[];
  /** id delle zone del corpo 3D che suggeriscono questo trattamento */
  zone: string[];
  faq: { domanda: string; risposta: string }[];
}

export const TRATTAMENTI: Trattamento[] = [
  {
    slug: 'fisioterapia',
    nome: 'Fisioterapia',
    metaTitle: 'Fisioterapia a Caserta | Studio Juvenilia — Via Giotto 28',
    metaDescription:
      'Fisioterapia a Caserta con percorsi personalizzati: valutazione funzionale, terapia manuale e recupero attivo. Studio Juvenilia, Via Giotto 28. Prenota la tua valutazione.',
    sottotitolo: 'Il punto di partenza di ogni percorso di recupero',
    descrizione: [
      'La fisioterapia allo Studio Juvenilia parte sempre da una valutazione funzionale accurata: prima di trattare un sintomo vogliamo capire da dove nasce. Ogni percorso è costruito su misura, con obiettivi chiari e verificabili seduta dopo seduta.',
      'Integriamo terapia manuale, esercizio terapeutico e tecnologie strumentali, accompagnandoti dal dolore iniziale fino al ritorno completo alle tue attività quotidiane o sportive.',
    ],
    perChi: [
      'Dolori muscolari e articolari acuti o cronici',
      'Recupero post-operatorio (protesi, ricostruzione legamentosa, artroscopia)',
      'Esiti di traumi e fratture',
      'Patologie della colonna: lombalgia, cervicalgia, ernie discali',
    ],
    comeFunziona: [
      'Valutazione funzionale iniziale e definizione degli obiettivi',
      'Trattamento manuale e strumentale personalizzato',
      'Esercizio terapeutico progressivo',
      'Rivalutazione periodica e piano di mantenimento',
    ],
    zone: ['cervicale', 'spalla', 'schiena', 'gomito', 'polso', 'anca', 'ginocchio', 'caviglia'],
    faq: [
      {
        domanda: 'Serve la prescrizione medica per iniziare un percorso di fisioterapia?',
        risposta:
          'Per molti trattamenti fisioterapici è consigliata una valutazione medica preliminare. In fase di prima visita analizziamo la documentazione clinica disponibile e, se necessario, ti orientiamo verso lo specialista più adatto.',
      },
      {
        domanda: 'Quanto dura una seduta di fisioterapia?',
        risposta:
          'Una seduta dura in media 45-60 minuti, in base al tipo di trattamento e alla fase del percorso. La prima valutazione richiede generalmente più tempo.',
      },
    ],
  },
  {
    slug: 'osteopatia',
    nome: 'Osteopatia',
    metaTitle: 'Osteopata a Caserta | Studio Juvenilia — Trattamenti osteopatici',
    metaDescription:
      'Osteopata a Caserta: trattamenti manuali per disfunzioni muscolo-scheletriche, cefalee e dolori cronici. Studio Juvenilia, Via Giotto 28. Prenota il tuo trattamento.',
    sottotitolo: 'Un approccio manuale globale, non solo dove fa male',
    descrizione: [
      'L’osteopatia guarda al corpo come a un sistema integrato: spesso il dolore che senti in un punto nasce da una disfunzione altrove. Il trattamento osteopatico lavora sulle cause, non solo sui sintomi.',
      'Allo Studio Juvenilia l’osteopatia dialoga costantemente con la fisioterapia e la posturologia: un unico team, un unico percorso.',
    ],
    perChi: [
      'Cervicalgie, lombalgie e dolori vertebrali ricorrenti',
      'Cefalee ed emicranie di origine muscolo-tensiva',
      'Disfunzioni temporo-mandibolari',
      'Disturbi posturali e tensioni da sovraccarico',
    ],
    comeFunziona: [
      'Anamnesi e valutazione osteopatica completa',
      'Trattamento manuale con tecniche strutturali, miofasciali e cranio-sacrali',
      'Integrazione con esercizio ed eventuali terapie strumentali',
      'Piano di prevenzione delle recidive',
    ],
    zone: ['cervicale', 'schiena', 'testa'],
    faq: [
      {
        domanda: 'Quante sedute di osteopatia servono?',
        risposta:
          'Dipende dal problema e dalla sua cronicità: molti disturbi acuti rispondono in 2-4 sedute, mentre le condizioni croniche richiedono percorsi più lunghi con controlli periodici.',
      },
    ],
  },
  {
    slug: 'posturologia',
    nome: 'Posturologia',
    metaTitle: 'Posturologo a Caserta | Valutazione posturale — Studio Juvenilia',
    metaDescription:
      'Valutazione posturale a Caserta e rieducazione con metodo Mézières. Scoliosi, squilibri posturali, dolori ricorrenti. Studio Juvenilia, Via Giotto 28.',
    sottotitolo: 'Capire come stai in piedi per capire perché hai dolore',
    descrizione: [
      'La postura è il risultato di come il tuo corpo si adatta ogni giorno: piedi, occhi, mandibola e colonna dialogano tra loro. Una valutazione posturale completa individua gli squilibri che alimentano dolori ricorrenti.',
      'Utilizziamo la rieducazione posturale individuale, incluso il metodo Mézières, per ridare al corpo simmetria e libertà di movimento.',
    ],
    perChi: [
      'Scoliosi e atteggiamenti scoliotici',
      'Dolori ricorrenti a colonna, anche e ginocchia',
      'Squilibri del passo e dell’appoggio plantare',
      'Bambini e adolescenti in fase di crescita',
    ],
    comeFunziona: [
      'Esame posturale globale e test specifici',
      'Programma di rieducazione individuale',
      'Esercizi domiciliari guidati',
      'Controlli periodici di verifica',
    ],
    zone: ['schiena', 'cervicale', 'anca', 'ginocchio', 'caviglia'],
    faq: [
      {
        domanda: 'A che età è utile una valutazione posturale?',
        risposta:
          'A qualsiasi età: nei bambini e adolescenti serve a intercettare precocemente squilibri in fase di crescita, negli adulti a capire l’origine di dolori ricorrenti o cali di performance sportiva.',
      },
    ],
  },
  {
    slug: 'riabilitazione-sportiva',
    nome: 'Riabilitazione sportiva',
    metaTitle: 'Riabilitazione sportiva a Caserta | Ritorno allo sport — Studio Juvenilia',
    metaDescription:
      'Riabilitazione sportiva a Caserta: dal post-infortunio al ritorno in campo con protocolli di riatletizzazione e test isocinetici. Studio Juvenilia, Via Giotto 28.',
    sottotitolo: 'Dal giorno dell’infortunio al giorno del rientro in campo',
    descrizione: [
      'La riabilitazione sportiva non finisce quando passa il dolore: finisce quando torni a correre, saltare e giocare come prima — e con meno probabilità di farti male di nuovo.',
      'Lo Studio Juvenilia ha una lunga storia al fianco di atleti e società sportive del territorio: protocolli di riatletizzazione progressivi, test oggettivi e un team multidisciplinare dedicato.',
    ],
    perChi: [
      'Atleti professionisti e amatori dopo infortunio',
      'Ricostruzione del legamento crociato e lesioni meniscali',
      'Lesioni muscolari e tendinopatie',
      'Instabilità di spalla e caviglia',
    ],
    comeFunziona: [
      'Valutazione funzionale e test di forza',
      'Riabilitazione in studio e riatletizzazione sul campo',
      'Test isocinetici di verifica oggettiva',
      'Criteri di ritorno allo sport misurabili',
    ],
    zone: ['spalla', 'ginocchio', 'caviglia', 'anca'],
    faq: [
      {
        domanda: 'Dopo quanto tempo dall’intervento si può iniziare la riabilitazione?',
        risposta:
          'In molti protocolli moderni la riabilitazione inizia già nei primi giorni post-operatori, in accordo con il chirurgo. Prima si imposta un percorso corretto, migliori sono i tempi e la qualità del recupero.',
      },
    ],
  },
  {
    slug: 'tecarterapia',
    nome: 'Tecarterapia',
    metaTitle: 'Tecarterapia a Caserta | Studio Juvenilia — Via Giotto 28',
    metaDescription:
      'Tecarterapia a Caserta per il trattamento di dolori muscolari e articolari: recupero più rapido con la diatermia capacitiva e resistiva. Studio Juvenilia.',
    sottotitolo: 'La tecnologia che accelera i tempi naturali di recupero',
    descrizione: [
      'La tecarterapia utilizza la diatermia per stimolare dall’interno i processi riparativi dei tessuti, ridurre il dolore e accelerare il riassorbimento degli edemi.',
      'Allo Studio Juvenilia la tecar non è mai un trattamento isolato: è integrata nel percorso riabilitativo, combinata con terapia manuale ed esercizio.',
    ],
    perChi: [
      'Lesioni muscolari e contratture',
      'Tendinopatie e borsiti',
      'Distorsioni e traumi recenti',
      'Dolori cronici muscolo-articolari',
    ],
    comeFunziona: [
      'Valutazione del tessuto e della fase (acuta/cronica)',
      'Applicazione capacitiva o resistiva mirata',
      'Combinazione con tecniche manuali nella stessa seduta',
      'Monitoraggio della risposta e dosaggio progressivo',
    ],
    zone: ['spalla', 'schiena', 'ginocchio', 'caviglia', 'gomito'],
    faq: [
      {
        domanda: 'La tecarterapia è dolorosa?',
        risposta:
          'No: durante la seduta si percepisce un calore piacevole e controllato. L’intensità viene sempre regolata sulla sensibilità della persona e sulla fase del problema.',
      },
    ],
  },
  {
    slug: 'onde-durto',
    nome: 'Onde d’urto',
    metaTitle: 'Onde d’urto a Caserta | Tendinopatie e calcificazioni — Studio Juvenilia',
    metaDescription:
      'Terapia con onde d’urto a Caserta per tendinopatie croniche, calcificazioni e fascite plantare. Studio Juvenilia, Via Giotto 28. Prenota una valutazione.',
    sottotitolo: 'L’alleata contro le tendinopatie croniche e le calcificazioni',
    descrizione: [
      'Le onde d’urto focali stimolano la rigenerazione dei tessuti nei problemi cronici che non rispondono ai trattamenti tradizionali: tendinopatie ostinate, calcificazioni, fasciti plantari.',
      'Il trattamento è rapido, mirato e sempre inserito in un percorso che corregge anche le cause meccaniche del problema.',
    ],
    perChi: [
      'Fascite plantare e spina calcaneare',
      'Tendinopatia achillea e rotulea',
      'Calcificazioni di spalla',
      'Epicondilite (gomito del tennista)',
    ],
    comeFunziona: [
      'Individuazione ecoguidata o palpatoria del punto da trattare',
      'Ciclo di 3-5 sedute a cadenza settimanale',
      'Esercizio eccentrico complementare',
      'Rivalutazione a fine ciclo',
    ],
    zone: ['spalla', 'gomito', 'caviglia'],
    faq: [
      {
        domanda: 'Le onde d’urto sono adatte a tutti?',
        risposta:
          'Esistono alcune controindicazioni (gravidanza, pacemaker, terapie anticoagulanti in corso, zone di accrescimento nei ragazzi). Per questo il ciclo inizia sempre con una valutazione dedicata.',
      },
    ],
  },
  {
    slug: 'rieducazione-isocinetica',
    nome: 'Rieducazione isocinetica',
    metaTitle: 'Palestra isocinetica a Caserta | Test e rinforzo — Studio Juvenilia',
    metaDescription:
      'Palestra isocinetica a Caserta: test di forza oggettivi e rinforzo muscolare controllato per il recupero post-infortunio e la prevenzione. Studio Juvenilia.',
    sottotitolo: 'Il rinforzo muscolare che si misura, non si immagina',
    descrizione: [
      'Il macchinario isocinetico adatta la resistenza alla forza che esprimi in ogni grado di movimento: il muscolo lavora sempre al massimo in totale sicurezza, anche nelle fasi delicate del recupero.',
      'I test isocinetici producono dati oggettivi: confrontiamo l’arto sano con quello infortunato e decidiamo il ritorno allo sport sui numeri, non sulle sensazioni.',
    ],
    perChi: [
      'Recupero dopo ricostruzione del crociato',
      'Squilibri di forza tra arti o tra muscoli antagonisti',
      'Atleti che vogliono certificare la propria condizione',
      'Prevenzione delle recidive',
    ],
    comeFunziona: [
      'Test isocinetico di valutazione iniziale',
      'Programma di rinforzo a velocità e resistenza controllate',
      'Re-test periodici con report comparativo',
      'Certificazione dei criteri di ritorno allo sport',
    ],
    zone: ['ginocchio', 'spalla', 'caviglia'],
    faq: [
      {
        domanda: 'Cos’è un test isocinetico?',
        risposta:
          'È una valutazione strumentale della forza muscolare lungo tutto l’arco di movimento, a velocità costante. Produce curve e valori numerici che confrontiamo con l’arto controlaterale e con i valori di riferimento.',
      },
    ],
  },
  {
    slug: 'riabilitazione-pavimento-pelvico',
    nome: 'Riabilitazione del pavimento pelvico',
    metaTitle: 'Riabilitazione pavimento pelvico a Caserta | Studio Juvenilia',
    metaDescription:
      'Riabilitazione del pavimento pelvico a Caserta: percorsi riservati e personalizzati per incontinenza e disfunzioni pelviche. Studio Juvenilia, Via Giotto 28.',
    sottotitolo: 'Un percorso riservato per un benessere di cui si parla poco',
    descrizione: [
      'Le disfunzioni del pavimento pelvico riguardano moltissime persone, ma se ne parla ancora troppo poco. Sono condizioni che si possono trattare, con percorsi riservati, graduali e rispettosi.',
      'Il trattamento combina educazione, esercizio specifico e tecniche strumentali, in un ambiente dedicato e con la massima riservatezza.',
    ],
    perChi: [
      'Incontinenza urinaria da sforzo o da urgenza',
      'Recupero post-parto',
      'Dolore pelvico cronico',
      'Preparazione e recupero da chirurgia pelvica',
    ],
    comeFunziona: [
      'Colloquio riservato e valutazione specifica',
      'Programma di esercizi personalizzato',
      'Eventuale supporto strumentale (biofeedback)',
      'Verifiche periodiche dei progressi',
    ],
    zone: ['bacino'],
    faq: [
      {
        domanda: 'La riabilitazione del pavimento pelvico è solo per le donne?',
        risposta:
          'No: riguarda anche gli uomini, ad esempio nel recupero dopo chirurgia prostatica. I percorsi sono personalizzati e sempre condotti con la massima riservatezza.',
      },
    ],
  },
  {
    slug: 'ozonoterapia',
    nome: 'Ozonoterapia',
    metaTitle: 'Ozonoterapia a Caserta | Studio Juvenilia — Via Giotto 28',
    metaDescription:
      'Ozonoterapia a Caserta per ernie discali, dolori articolari e infiammazioni croniche. Studio Juvenilia, studio di medicina fisica e riabilitazione. Prenota una valutazione.',
    sottotitolo: 'L’ossigeno-ozono terapia contro dolore e infiammazione',
    descrizione: [
      'L’ozonoterapia sfrutta le proprietà antinfiammatorie e rigeneranti della miscela di ossigeno e ozono per trattare dolori articolari, ernie discali e infiammazioni croniche che rispondono poco alle terapie tradizionali.',
      'Allo Studio Juvenilia il trattamento è sempre inserito in un percorso riabilitativo completo: l’ozonoterapia riduce dolore e infiammazione, il lavoro fisioterapico corregge le cause meccaniche del problema.',
    ],
    perChi: [
      'Ernie e protrusioni discali',
      'Lombalgie e sciatalgie ricorrenti',
      'Dolori articolari e artrosi',
      'Infiammazioni tendinee croniche',
    ],
    comeFunziona: [
      'Valutazione clinica e della documentazione medica',
      'Definizione del ciclo di sedute con il medico',
      'Trattamenti mirati sulla zona interessata',
      'Integrazione con il percorso fisioterapico',
    ],
    zone: ['schiena', 'cervicale', 'ginocchio', 'anca'],
    faq: [
      {
        domanda: 'L’ozonoterapia è dolorosa? Ha effetti collaterali?',
        risposta:
          'Il trattamento è generalmente ben tollerato e gli effetti collaterali sono rari e transitori. Ogni ciclo inizia comunque con una valutazione medica che verifica l’indicazione e le eventuali controindicazioni individuali.',
      },
    ],
  },
  {
    slug: 'massoterapia',
    nome: 'Massoterapia',
    metaTitle: 'Massoterapia a Caserta | Massaggio terapeutico — Studio Juvenilia',
    metaDescription:
      'Massoterapia a Caserta: massaggio terapeutico per contratture, tensioni muscolari e recupero post-sforzo. Studio Juvenilia, Via Giotto 28. Prenota il tuo trattamento.',
    sottotitolo: 'Il massaggio terapeutico che scioglie tensioni e contratture',
    descrizione: [
      'La massoterapia è la manipolazione dei tessuti eseguita dalle mani del terapeuta: una serie di tecniche mirate per alleviare il disagio causato da traumi, sovraccarichi e posture scorrette.',
      'Non un semplice massaggio: ogni seduta parte dalla valutazione della zona da trattare e usa la tecnica giusta — dal linfodrenaggio al trigger point release miofasciale — per l’obiettivo terapeutico.',
    ],
    perChi: [
      'Contratture e tensioni muscolari',
      'Dolori da postura scorretta o sovraccarico lavorativo',
      'Recupero muscolare post-allenamento e post-gara',
      'Edemi e ristagni linfatici (linfodrenaggio)',
    ],
    comeFunziona: [
      'Valutazione della zona e del tipo di tensione',
      'Scelta della tecnica (decontratturante, miofasciale, linfodrenante)',
      'Trattamento manuale mirato',
      'Consigli di gestione ed esercizi complementari',
    ],
    zone: ['cervicale', 'spalla', 'schiena', 'gomito', 'ginocchio', 'caviglia'],
    faq: [
      {
        domanda: 'Che differenza c’è tra massoterapia e un massaggio estetico?',
        risposta:
          'La massoterapia è un trattamento sanitario con finalità terapeutica: viene eseguita da professionisti della riabilitazione, dopo una valutazione, con tecniche scelte in base al problema da trattare.',
      },
    ],
  },
  {
    slug: 'valutazione-baropodometrica',
    nome: 'Esame baropodometrico',
    metaTitle: 'Esame baropodometrico a Caserta | Analisi del passo — Studio Juvenilia',
    metaDescription:
      'Esame baropodometrico a Caserta: analisi della postura, del passo e del baricentro corporeo su pedana elettronica. Studio Juvenilia, Via Giotto 28.',
    sottotitolo: 'Postura, passo ed equilibrio misurati sulla pedana',
    descrizione: [
      'L’esame baropodometrico analizza su pedana elettronica come i tuoi piedi appoggiano al suolo, da fermi e durante il cammino: pressioni, baricentro, equilibrio e fasi del passo diventano dati misurabili.',
      'È lo strumento ideale per capire l’origine di dolori a piedi, ginocchia, anche e colonna, e per costruire percorsi posturali e plantari su misura basati su numeri, non su impressioni.',
    ],
    perChi: [
      'Dolori a piedi, ginocchia, anche o colonna di origine posturale',
      'Squilibri dell’appoggio plantare e del passo',
      'Sportivi che vogliono ottimizzare il gesto e prevenire infortuni',
      'Controllo dell’equilibrio e valutazioni pre/post trattamento',
    ],
    comeFunziona: [
      'Analisi statica: pressioni plantari e baricentro da fermo',
      'Analisi dinamica: fasi del passo durante il cammino',
      'Valutazione dell’equilibrio e della stabilità',
      'Report con dati oggettivi e piano di lavoro',
    ],
    zone: ['caviglia', 'ginocchio', 'anca', 'schiena'],
    faq: [
      {
        domanda: 'Quanto dura l’esame baropodometrico ed è invasivo?',
        risposta:
          'L’esame dura circa 20-30 minuti, è completamente indolore e non invasivo: si cammina a piedi nudi su una pedana elettronica che registra pressioni ed equilibrio.',
      },
    ],
  },
];

export const getTrattamento = (slug: string) => TRATTAMENTI.find((t) => t.slug === slug);
