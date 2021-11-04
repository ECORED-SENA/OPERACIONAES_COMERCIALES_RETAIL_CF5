<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Técnicas de servicio al cliente
    p.mb-5 Ahora veamos diferentes técnicas y conceptos, que debemos conocer y aplicar para una asertiva atención al cliente:
    #t_3_1.titulo-segundo(data-aos="fade-right")
      h2 3.1 Comunicación asertiva 
    p.mb-5 Históricamente el hombre ha sido un ser social y necesita comunicarse, porque es importante relacionarse con los demás. La comunicación es un acto que el individuo establece con otro, este contacto le permite informar.
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p Es importante decir que uno de los aspectos más importantes es la comunicación asertiva cuyo objetivo es poder expresarse de manera respetuosa, sincera, sencilla y exponiendo lo que uno quiere, para que esto se cumpla es necesario tener la habilidad de hacerlo sin hacer daño a nadie.
    h3(data-aos="fade-right") Características de la comunicación asertiva:
    .row.mb-5.justify-content-center
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--1-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 Trata de mostrar los deseos o necesidades que una persona anhela, pero siempre de manera educada y honesta.
          .imagen-hover: img(src="@/assets/curso/28.jpg")
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--1-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 Se deben evitar los reproches personales, los ataques constantes o recurrir a informaciones hirientes que desacrediten a un individuo.
          .imagen-hover: img(src="@/assets/curso/29.jpg")
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--1-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 No es una comunicación pasiva o que impida exponer lo que verdaderamente se desea. La diferencia en este tipo de comunicación es que se expresa con honestidad, respeto y escogiendo las palabras más adecuadas para no generar conflicto.
          .imagen-hover: img(src="@/assets/curso/30.jpg")
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--1-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 Busca el equilibrio para manifestar la opinión que uno tiene sin menospreciar a los demás. 
          .imagen-hover: img(src="@/assets/curso/31.jpg")
    h3(data-aos="fade-right") Técnicas de la comunicación asertiva:
    p.mb-5 Teniendo en cuenta la importancia de la comunicación asertiva, se enumeran algunas técnicas para mejorarla, pueden ser especialmente útiles en el trabajo:
    .row.mb-5.justify-content-center
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--2-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 La escucha activa es muy importante para atender la información y el mensaje que nos transmite la persona con la que se está conversando.
          .imagen-hover: img(src="@/assets/curso/32.jpg")
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--2-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 Es muy importante hablar en primera persona para exponer lo que uno siente, esto evita echar la culpa de manera constante a alguien, sin asumir también las responsabilidades propias.
          .imagen-hover: img(src="@/assets/curso/33.jpg")
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--2-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 Nos debemos comunicar sin exponer juicios de valor. No se recomienda en ninguna circunstancia juzgar ni señalar a alguien, ya que eso impide que se pueda poner en práctica una comunicación asertiva.
          .imagen-hover: img(src="@/assets/curso/34.jpg")
      .col-lg-3
        .tarjeta.tarjeta-hover.bg--2-claro.p-5.h-100.d-flex.align-items-center.hover(style='min-height: 297px')
          p.mb-0.text-center.mx-2.h5 Debe argumentar en lugar de exigir o reclamar en primera instancia. Es muy importante exponer las razones, motivos y argumentos que den valor a la comunicación.
          .imagen-hover: img(src="@/assets/curso/35.jpg")
    #t_3_2.titulo-segundo(data-aos="fade-right")
      h2 3.2 Comunicación verbal y no verbal
    p.mb-5 Para hablar de comunicación verbal y no verbal se hace necesario repasar el proceso de comunicación, recordando sus elementos:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/36.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones.p-3(x="35%" y="15%")
        .h5.mb-2 CÓDIGO: 
        p El lenguaje se refiere a los códigos; palabras, signos escritos, gestos. 
      .tarjeta.color-acento-botones.p-3(x="18%" y="40%")
        .h5.mb-2 EMISOR:
        p Es la persona que emite la información a otros
      .tarjeta.color-acento-botones.p-3(x="38%" y="48%")
        .h5.mb-2 BARRERAS: 
        p Se refiere a las actitudes personales, prejuicios, ruidos, no ser el momento adecuado que dificultan la comunicación. 
      .tarjeta.color-acento-botones.p-3(x="66%" y="15%")
        .h5.mb-2 CANAL: 
        p El vehículo que transporta el mensaje entre el emisor y el receptor que puede ser oral, escrito o gestual.
      .tarjeta.color-acento-botones.p-3(x="51%" y="20%")
        .h5.mb-2 MENSAJE: 
        p El contenido se refiere a lo que se desea comunicar.
      .tarjeta.color-acento-botones.p-3(x="83%" y="40%")
        .h5.mb-2 RECEPTOR:
        p Es la persona que recibe la información de otros.
      .tarjeta.color-acento-botones.p-3(x="57%" y="48%")
        .h5.mb-2 <i>FEED-BACK</i> (retroalimentación):
        p Es la respuesta al mensaje para confirmar que la comunicación va bien.
    p.mb-5 Luego de ver el proceso de comunicación y sus elementos compositivos, analicemos las categorías de la comunicación humana, las cuales se dividen en dos:
    .row.mb-5.justify-content-center
      .col-lg-6(data-aos="fade-right")
        .tarjeta.bg--3-claro.p-5.text-center.h-100.hover
          h4 Comunicación verbal
          p Es en la que interviene la utilización de la palabra y se divide en:
          img(src="@/assets/curso/37.png") 
          h5.text-white Oral
          img(src="@/assets/curso/38.png") 
          h5.text-white Escrita
      .col-lg-6(data-aos="fade-right")
        .tarjeta.bg--1-claro.p-5.text-center.h-100.d-flex.align-items-center.hover
          .content
            h4 Comunicación no verbal: 
            p Se considera que el 55% de nuestra comunicación es gestual, en este tipo de comunicación se utilizan los gestos, el contacto visual, la postura del cuerpo, el movimiento de las manos, esta comunicación es efectiva cuando los mensajes verbales y no verbales coinciden.
            img(src="@/assets/curso/39.png") 
    #t_3_3.titulo-segundo(data-aos="fade-right")
      h2 3.3 Pautas de actuación 
    p.mb-5 Es muy importante que a la hora de atender una llamada entrante o de actuar ante la generación de un requerimiento, es necesario tener presentes las siguientes pautas de actuación y actuar de acuerdo con ellas:
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/40.svg' alt='AvatarTop')
          .tarjeta.rounded-3.bg--3-claro.d-flex.align-items-center
            .p-4
              p.mb-0 Se requiere en las pautas de actuación atender siempre la llamada de forma relajada sin perder la calma y transmitiendo seguridad y confianza a la persona usuaria del servicio.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/41.svg' alt='AvatarTop')
          .tarjeta.rounded-3.bg--3-claro.d-flex.align-items-center
            .p-4
              p.mb-0 Tener en cuenta siempre los protocolos de presentación y despedida que existan en la empresa.
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/42.svg' alt='AvatarTop')
          .tarjeta.rounded-3.bg--3-claro.d-flex.align-items-center
            .p-4
              p.mb-0 Aplicar los protocolos de actuación y de atención de llamadas adecuadamente.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/43.svg' alt='AvatarTop')
          .tarjeta.rounded-3.bg--3-claro.d-flex.align-items-center
            .p-4
              p.mb-0 Pensar y actuar con rapidez sin tomar decisiones de manera precipitada y que por consiguiente puedan resultar inoportunas o inadecuadas.
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/44.svg' alt='AvatarTop')
          .tarjeta.rounded-3.bg--3-claro.d-flex.align-items-center
            .p-4
              p.mb-0 Los criterios de selección y utilización de las pautas de actuación deben hacerse con lógica y responsabilidad.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/45.svg' alt='AvatarTop')
          .tarjeta.rounded-3.bg--3-claro.d-flex.align-items-center
            .p-4
              p.mb-0 En el uso de las pautas de actuación se debe ser cercano, afectuoso y tranquilizador en el trato.
    p.mb-5 Teniendo en cuenta las pautas, resulta muy importante actuar de acuerdo con las técnicas y habilidades de carácter comunicativo y adecuado, utilizando el mensaje con las características y necesidades de la persona usuaria y de la situación entre sí.
    #t_3_4.titulo-segundo(data-aos="fade-right")
      h2 3.4 Ciclo de servicio
    p.mb-5 Es una herramienta muy efectiva para la Gerencia del Servicio, esta refleja un proceso ordenado de todos los contactos que tiene el cliente con la organización, lo cual se manifiesta con la satisfacción en la prestación del servicio o la insatisfacción del servicio prestado.
      br
      br
      |Cuando pensamos en los ciclos del servicio nos ponemos en los zapatos del cliente y podemos percibir la calidad de servicio que este recibe. Cada momento de verdad se puede representar gráficamente y la responsabilidad del ciclo del servicio le corresponde a los empleados y directivos encargados de la prestación del servicio. Veamos un ejemplo de un ciclo basado en la calidad del servicio:

    //todo! INFOGRAFIA INTERACTIVA 

    #t_3_5.titulo-segundo(data-aos="fade-right")
      h2 3.5 Triángulo de servicio
    p.mb-5 El cliente es el eslabón más importante del triángulo del servicio, las estrategias y los actores de la empresa deben girar en torno a las motivaciones y necesidades del cliente.
      br
      br
      |Las tácticas que cada empresa fija deben ser estratégicas para poder cumplir con el propósito y razón de ser de la empresa. Esto garantiza que se prestará un servicio de calidad.
    figure.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/46.svg' alt='AvatarTop')
    p.mb-5 Los colaboradores de la empresa son los que deben conocer, entender y aplicar la promesa de servicio al cliente, ellos son los que tienen el contacto directo con el usuario o cliente y deben estar capacitados en atención al cliente con el fin de ofrecer un servicio de calidad.
      br
      br
      |Las herramientas de los sistemas físicos y técnicos que tienen los empleados para prestar el servicio deben ser fáciles de manejar tanto para el colaborador como para el cliente.








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.bg-img
  background-image: url(../assets/curso/bg-3.svg)
  background-position: top
  background-size: cover
  background-repeat: no-repeat
.tarjeta-avatar-b
  .tarjeta-avatar-b__img
    transition: transform 0.4s ease-in-out
  &:hover
    .tarjeta-avatar-b__img
      transform: scale(1.1)
</style>
