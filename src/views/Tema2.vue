<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Atender al cliente en el Retail
    p.mb-5 Para una correcta atención del cliente, es necesario tener claro:
    .bg--1.p-5.d-flex.justify-content-center.align-items-center.mb-5
      vue-typed-js(:strings="[ 'El conocimiento del cliente.', 'La clasificación de los clientes.', 'Necesidades, deseos y demanda de los clientes.', 'Momentos de verdad con el cliente.', 'Contingencias.']" :loop="true") 
        h2.h1.text-center.text-white.typing.m-5
    p.mb-5 Conozcamos más sobre cada una de ellas.
    #t_2_1.titulo-segundo(data-aos="fade-right")
      h2 2.1. Conocer al cliente
    p.mb-5 El concepto de cliente tiene un gran universo, permite plantear diferentes significados de cliente desde las distintas funciones de la empresa. Se puede considerar que la definición de cliente desde el punto de vista integral de la empresa es: el que constituye el eje principal de toda la actividad de la empresa, por lo que es la receptora final de todos los esfuerzos de esta última como organización.
      br
      br
      |Se hace necesario para conocer al cliente, analizar el papel que cada persona juega en un proceso de compra, para así diferenciar los siguientes tipos de cliente: 
    SlyderD.mb-5(:datos="datosSlyder")
    #t_2_2.titulo-segundo(data-aos="fade-right")
      h2 2.2 Clasificación de los clientes
    p.mb-5 Cada cliente es diferente y las relaciones que se establecen entre la empresa y los mismos dependen además de los objetivos y la forma de proceder de la empresa, así como del tipo de cliente.
      br
      br
      |El mercado clasifica los distintos tipos de clientes bajo los criterios que tienen que ver con la relación cliente-empresa. Por ejemplo, según su personalidad, el cliente puede ser: 
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Amable")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/10.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Amable
            p Persona amable con la que es fácil entenderse y entablar una conversación; puede ser lento en la toma de decisiones. 
      .tarjeta.bg--1-claro.p-4(titulo="Agresivo")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/11.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Agresivo
            p Persona de difícil trato por ser impaciente e intolerante.
      .tarjeta.bg--1-claro.p-4(titulo="Altivo")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/12.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Altivo
            p Persona que pretende que todos estén a su servicio porque considera que es importante para la empresa. 
      .tarjeta.bg--1-claro.p-4(titulo="Desconfiado ")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/13.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Desconfiado 
            p Persona que cree que los demás lo quieren engañar; el trato con este tipo de personas es complejo. 

      .tarjeta.bg--1-claro.p-4(titulo="Decidido")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/14.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Decidido
            p Persona que toma sus decisiones con rapidez, declara abiertamente sus intenciones; son clientes fáciles de tratar. 
      .tarjeta.bg--1-claro.p-4(titulo="Indeciso")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/15.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Indeciso
            p Casi siempre se hace acompañar por otra persona, desconoce o no tiene claro lo que quiere, suele ser tímido y tarda mucho en decidir. 
      .tarjeta.bg--1-claro.p-4(titulo="Especulador")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/16.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Especulador
            p Este tipo de cliente siempre busca acuerdos beneficiosos; el trato con este tipo de clientes es complejo. 
      .tarjeta.bg--1-claro.p-4(titulo="Exigente")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/17.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Exigente
            p Requiere de una atención inmediata y prioritaria; estas personas suelen ser inseguras y la mejor forma de actuar es tratarle con mucha delicadeza. 
      .tarjeta.bg--1-claro.p-4(titulo="Discutidor")
        .row
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/18.jpg', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Discutidor
            p Persona que piensa que tiene la razón y que rebate todos los argumentos. Se le debe tratar con cortesía, firmeza y argumentos claros.
    p.mb-5 Esta clasificación de los clientes es específica para cada caso en función de la personalidad de cada uno, pero hay que tener claro que hay que utilizar las habilidades sociales como la empatía y asertividad; y en todo caso comportarse con respeto al tratar con cada uno nos darán el éxito en la atención.
    #t_2_3.titulo-segundo(data-aos="fade-right")
      h2 2.3 Necesidades, deseos y demanda de los clientes
    .row.mb-5.justify-content-center
      .col-lg-4
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-0 ¿Qué estimula a un cliente a querer un determinado servicio? 
            i.fas.fa-quote-right
      .col-lg-4
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-0 ¿Qué inspira al cliente a adquirirlo de un determinado proveedor? 
            i.fas.fa-quote-right
    p.mb-5 Cada cliente tiene sus propias expectativas, pero estas son función de una amplia variedad de factores internos y externos. Veamos a continuación:
    .tarjeta.tarjeta-bg(data-aos="zoom-in-up")
      #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel').p-5
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 1')
        .carousel-inner
          .carousel-item.active.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                p La necesidad de un cliente es un factor que coloca sus expectativas en función de la solución que se le pueda brindar, las empresas deben organizar sus necesidades de forma mucho más complicada de lo que lo haría un cliente o una unidad familiar. Este tipo de fenómeno o problema requiere de una solución.
                  br
                  br
                  |Las soluciones se pueden resolver de diferente manera, considerando lo anterior se puede decir que usted mismo puede hacer la limpieza del hogar si compra el material necesario para hacerlo o por el contrario puede contratar un servicio de limpieza que lo haga.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/19.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                p Si las organizaciones fueran consecuentes con las necesidades de sus clientes, no determinarían qué tipo de servicio busca cada uno de ellos. Lo que determinan las necesidades, en cierta forma es que ese cliente potencial requiere de proveedores de servicios que ofrezcan soluciones aceptables al respecto.
                  br
                  br
                  |Los clientes también tienen ciertos deseos en relación a la forma en la que necesita que su proveedor los trate. 
                  br
                  br
                  |Fundamentalmente, por ejemplo, no todos los bancos proporcionan a los clientes los mismos servicios ya que cada uno de ellos tiene sus propias necesidades
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/20.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                p Teniendo en cuenta lo anterior, las expectativas también reciben la influencia de factores externos. Esto nos indica que es importante lo que los clientes conocen sobre el trabajo de un proveedor de servicios ya que ellos se comunican boca a boca y cada uno habla de su experiencia sea esta buena o mala.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/21.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                p El mercado debe plantear unas actividades de comunicación de marketing para la venta personal y también hacer campañas de publicidad para generar expectativas sobre sus productos y servicios. Para el comercio es muy importante la imagen que tengan las empresas tanto a nivel local como global.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/22.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                p Cada cliente tiene una necesidad o deseo distintos de cómo quiere ser tratado, por esto es que las empresas no satisfacen esas necesidades porque considera que todos deben ser tratados de igual manera, para poder conocer las necesidades de cada uno se deben segmentar, ahí encontrará las diferencias que hay entre unos y otros, en el caso de los servicios es aún más difícil ya que muchos clientes se relacionan entre sí y están enterados de las concesiones que se les hacen a unos y no a otros.
                  br
                  br
                  |Los servicios son fenómenos complejos y la producción de los mismos una ardua labor.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/23.jpg")
            
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next
    #t_2_4.titulo-segundo(data-aos="fade-right")
      h2 2.4 Momentos de verdad con el cliente
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        p.mb-4 
          b Los momentos de verdad son los instantes en los que los clientes y los proveedores se enfrentan.
          br
          br
          |Y en el servicio al cliente son la secuencia de experiencias buenas y malas que los clientes pasan con una empresa al satisfacer una necesidad. Para una empresa, lo más relevante es el manejo que deben tener los empleados con los clientes. Hay que tener en cuenta que el trato debe ser cuidadoso, donde la prioridad son las necesidades emocionales.
        .cajon.color-acento-contenido.bg--3-claro.p-4.mb-4
          p Es una gran oportunidad para la empresa hacer calificar al cliente los productos y servicios que estos reciben o se le ofrecen. En este sentido todo está en manos de la respuesta que de la empresa y de la rapidez para actuar ante cualquier imprevisto.
        p.mb-4 Las expectativas de los consumidores comienzan muy altas, por lo que los empleados deben asegurarse de que obtengan lo que necesitan y de la mejor forma posible.
      .col-lg-6(data-aos="fade-left"): img(src="@/assets/curso/24.jpg")
    #t_2_5.titulo-segundo(data-aos="fade-right") 
      h2 2.5 Contingencias
    .row.mb-5.justify-content-center
      .col-lg-6(data-aos="fade-right")
        p.mb-4 Las empresas necesitan planificar lo inesperado para darle solución. Los planes de contingencia son la preparación para cualquier cosa que pueda suceder fuera de las operaciones diarias normales. 
          br
          br
          |Ninguna empresa quiere pensar en que ocurran estos escenarios y es muy posible que sucedan, por eso es importante tener un plan establecido. Ten en cuenta lo siguiente:
      .col-lg-6(data-aos="fade-left"): img(src="@/assets/curso/25.jpg")
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta")
      .row(titulo="").px-3
        .col-lg-7.col-md-9.col-sm-8.col-xs-7.mb-5
          h4 Notificación al cliente
          p Toda empresa debe analizar las necesidades indicadas por el cliente y determinar un plan para abordarlas. Se deben tener en cuenta las reacciones del mismo, esto será clave. Las empresas deben pensar en cómo afectará el escenario al cliente para determinar cómo reaccionar ante la necesidad.
            br
            br
            |Por poner un ejemplo: los huéspedes de un hotel estaban confundidos y no tenían ninguna instrucción de la Administración sobre qué hacer en la situación de un apagón (ausencia de energía) Si todos los empleados del Hotel estuvieran al tanto del plan de contingencia, habrían podido informar a los huéspedes cómo se resolvería el problema. 
        .col-lg-5.col-md-3.col-sm-4.col-xs-5.mb-3: img(src='@/assets/curso/27.jpg')
      .row(titulo="").px-3
        .col-lg-7.col-md-9.col-sm-8.col-xs-7.mb-5
          h4 Encontrar una solución
          p En todo plan de contingencia, se debe contactar a los clientes lo antes posible para notificarles de la situación. La compañía siempre debe tener un equipo o departamento a cargo de contactar a los clientes cuando surjan estas situaciones.
            br
            br
            |Toda empresa debe tener una solución, aunque sea temporal, para ofrecer a los clientes. Todo cliente debe entender que a veces suceden cosas fuera del control de la empresa, pero aun así se sentirán molestos si no hay una pronta solución al problema. Algunas situaciones estarán fuera del control de la empresa. Por esto es muy importante contar con un plan de contingencia que ayudará a evitar posibles problemas con los clientes.
        .col-lg-5.col-md-3.col-sm-4.col-xs-5.mb-3: img(src='@/assets/curso/26.jpg')
    p.mb-5 Los planes de contingencia se deben preparar para saber cómo reaccionar ante cualquier situación inesperada. Las organizaciones deben determinar las situaciones que pueden ocurrir y planificar cómo comunicarse, es necesario también, encontrar soluciones temporales para ayudar a evitar futuros problemas con los clientes.


















































































</template>

<script>
import AcordeonB from '../components/AcordeonB.vue'
export default {
  name: 'Tema2',
  components: {
    AcordeonB,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'El que decide',
        texto: 'Es la persona que toma la decisión final sobre la compra.',
        imagen: require('@/assets/curso/6.jpg'),
      },
      {
        titulo: 'El que ejecuta',
        texto: 'Es la persona que realiza los trámites de compra.',
        imagen: require('@/assets/curso/7.jpg'),
      },
      {
        titulo: 'El que influye',
        texto: 'Es la persona que aconseja sobre la compra.',
        imagen: require('@/assets/curso/8.jpg'),
      },
      {
        titulo: 'El usuario',
        texto: 'Es la persona que utiliza el producto del proceso de compra.',
        imagen: require('@/assets/curso/9.jpg'),
      },
    ],
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
.bloque-texto-b:before
  background-color: #D8ECFD
.bg-img
  background-image: url(../assets/curso/bg-2.svg)
  background-position: top
  background-size: cover
  background-repeat: no-repeat
</style>
