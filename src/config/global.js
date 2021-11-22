export default {
  global: {
    componenteFormativo: 'Atención al Cliente en el Retail',
    descripcionCurso:
      'El propósito de este componente de formación es ayudar a los aprendices a desarrollar una excelente Atención al Cliente teniendo en cuenta que es muy importante en el mercado y de su buena atención depende la fidelización y aumento de la clientela.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: ' Definiciones en el Retail',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Atender al cliente en el Retail',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conocer al cliente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de los clientes',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Necesidades, deseos y demanda de los clientes',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Momentos de verdad con el cliente',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Contingencias',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas de servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Comunicación asertiva',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Comunicación verbal y no verbal',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Pautas de actuación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Ciclo de servicio',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Triángulo de servicio',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolos de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Protocolo de atención',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Etiqueta y normas de cortesía',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Satisfacción del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Trazabilidad del servicio',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Tipos de herramientas de evaluación de satisfacción del cliente',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Trámite de PQRS',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Registro de la información',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blanco García, C. (2013). Comunicación y atención al cliente. Madrid, Spain: Macmillan Iberia, S.A. ',
      link: '',
    },
    {
      referencia:
        'Deulofefeu Aymar, J. (2015). Gestión de calidad total en el retail: con la implicación de personas y la satisfacción del cliente y la sociedad. Madrid, México: Difusora Larousse - Ediciones Pirámide. ',
      link: '',
    },
    {
      referencia:
        'Grönroos, C. (2007). Marketing y gestión de servicios: la gestión de los momentos de la verdad y la competencia en los servicios. Madrid, Spain: Ediciones Díaz de Santos. ',
      link: '',
    },
    {
      referencia:
        'María del Carmen Blanco García (2011). Comunicación empresarial y atención al cliente. Madrid, Spain: Macmillan Iberia, S.A.  ',
      link: '',
    },
    {
      referencia:
        'Marielos Ramos (2020). Universidad de San Carlos de Guatemala. Etiqueta y normas de cortesía. ',
      link: '',
    },
    {
      referencia:
        'Mariscal, M. (2009). Manual de proceso de la información. México D.F, México: Editorial Miguel Ángel Porrúa.',
      link: '',
    },
    {
      referencia:
        'Prats Darder, P. (2011). Métodos para medir la satisfacción del cliente. Madrid, Spain: AENOR - Asociación Española de Normalización y Certificación.  ',
      link: '',
    },
    {
      referencia:
        'Vargas Quiñones, M. E. (2007). Calidad en el servicio. Bogotá, Colombia: Universidad de La Sabana.',
      link: '',
    },
    {
      referencia:
        'Villanueva López, R. (2012). Gestión de protocolo (UF0043). Málaga, Spain: IC Editorial. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'Es el servicio que se presta a las personas que adquieren un bien o servicio. La atención al cliente comprende desde el recibimiento y la información antes de realizar una compra hasta el seguimiento postventa. ',
    },
    {
      termino: 'Branding',
      terminoHtml: '<em>Branding</em>',
      significado:
        'Es ayudar a los consumidores a entender lo que ofreces y en qué te diferencias, de manera simple y fácil. Pero no es solo la Propuesta Única de Venta.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es la persona que utiliza o adquiere, de manera frecuente u ocasional los servicios o productos que pone a su disposición un profesional, un comercio o una empresa.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Es el proceso que consiste en la transmisión e intercambio de mensajes entre un emisor y un receptor.',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos ya procesados y ordenados par su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado.',
    },
    {
      termino: 'Momentos de verdad',
      significado:
        'Es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la empresa y se crea una impresión sobre la calidad del servicio.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de reglas ya sea por normas o por costumbre, se establecen para actos oficiales o solemnes, ceremonias y otros eventos.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'Estado mental de goce por sentir que ya nada se necesita para lograr la plenitud ya sea física o mental.',
    },
    {
      termino: 'Servicio',
      significado:
        'Dar o prestar apoyo o asistencia a alguien valiéndonos de un conjunto de medios materiales o inmateriales.',
    },
    {
      termino: 'Trámite',
      significado:
        'Proceso o procedimiento legal o administrativo para resolver un litigio o discutible. Cada uno de los estados y diligencias precisas para la conclusión de un negocio.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Posibilidad de identificar el origen y las diferentes etapas de un proceso de producción y distribución de bienes de consumo.',
    },
  ],
  complementario: [
    {
      texto: 'Blanco, C. (2013). Comunicación y atención al cliente.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/42955 ',
    },
    {
      texto: 'Goodman, J. (2014). Atención estratégica al cliente. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/77357 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Instructora',
        centro:
          'Centro de Gestión Tecnológica de Servicios CGTS - Regional Valle',
      },
      {
        nombre: 'Jaime Alberto Pérez Posada',
        cargo: 'Instructor',
        centro: 'Comercio - Regional Antioquia',
      },
      {
        nombre: 'Zvi Daniel Grosman ',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          ' Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah Gamboa ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
