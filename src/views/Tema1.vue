<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Definiciones en el Retail
    p.mb-5 En este proceso de aprendizaje, en torno a la atención al cliente es bueno precisar y/o recordar ciertos conceptos que nos servirán de insumo para el desarrollo temático.
    h4(data-aos="fade-right") Mercadeo Mix
    p.mb-5 En la dinámica del mercado, el Mercadeo Mix o mezcla, tiene como objetivo analizar la conducta de los consumidores, clientes, usuarios y compradores lo cual genera acciones de satisfacción a sus necesidades basándose en cuatro componentes principales, también conocidos como las 4P: Plaza, Producto, Precio y Promoción, las cuales veremos a continuación:
    SlyderE(indicadores="izquierda").mb-5
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Producto (o servicio)
          p El mercado es todo lo que se ofrece para su consecución, uso o consumo y que puede satisfacer las necesidades o deseos de los clientes.
            br
            br
            |Las decisiones que se tomen al respecto incluyen la formulación y presentación del producto, el <i>packaging</i> (empaquetado) el desarrollo de la marca-producto, etc.
        .col-md-7
          figure
            img(src='@/assets/curso/0.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Precio
          p Este concepto se refiere a la cantidad de dinero por la que intercambiamos un producto o servicio. Las formas de pago que se pueden utilizar son, créditos, descuentos o promociones. 
            br
            br
            |Para poder comprobar los precios es necesario hacer una investigación de mercado donde se vea, entre otras cosas, cuánto vale un producto similar y cuánto está dispuesto a pagar un consumidor o cliente por él.
        .col-md-7
          figure
            img(src='@/assets/curso/1.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Plaza
          p Se refiere a los canales donde se comercializa el producto o servicio al consumidor. La distribución se considera desde que se hace el despacho de la empresa hasta que lo recibe el consumidor.
            br
            br
            |Este proceso incluye logística, puntos de venta <i>offline</i> y comercio <i>online</i> (<i>ecommerce</i>).
        .col-md-7
          figure
            img(src='@/assets/curso/2.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Promoción
          p Se refiere a la comunicación que deben tener las empresas con sus clientes o clientes potenciales para comunicar, informar y persuadir sobre los productos y la marca. Hay que tener en cuenta que para trabajar la promoción se usarán las distintas estrategias de comunicación de marca, publicidad y ventas.
            br
            br
            |Las operaciones (<i>offline</i> y <i>online</i>) que están dentro de los ámbitos del <i>branding</i> (marca) la publicidad, las relaciones públicas y la promoción de ventas (fuerza de venta).
        .col-md-7
          figure
            img(src='@/assets/curso/3.jpg', alt='Texto que describa la imagen')
    h3(data-aos="fade-right") <i>Retail</i>
    p.mb-5 Se refiere a la venta al por menor o comercio minorista. Con este concepto se busca la finalidad de agrupar a grandes empresas que se dedican a la venta de productos y servicios a gran escala a sectores concretos, con el tipo de especialización según el tipo de formato comercial. 
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-md-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/4.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 <i>Retail</i> se refiere al término de la lengua inglesa que se emplea para nombrar a la venta minorista y la comercialización de productos al por menor, como tiendas de barrio, supermercados, hipermercados y tiendas de descuento duro. Estas tiendas especializadas ofrecen productos como calzado, libros, ropa, accesorios, relojerías, banca, entre otras.
    h3(data-aos="fade-right") Omnicanalidad
    .row.mb-5
      .col-md-6(data-aos="fade-right")
        .cajon-b.color-acento-contenido.abajo-derecha.p-3.mb-5
          p.mb-0 Es una estrategia de Mercadeo que busca ofrecer una experiencia única e interconectada a los clientes a través del diálogo y alineación de canales <i>online</i> y <i>offline</i>. También se refiere a la integración que haces de todos los canales de comunicación, de ventas o de mercadeo existentes en tu mercado (Facebook, WhatsApp, Instagram, correo electrónico, sitio web, blog, entre otros)
      .col-md-6(data-aos="fade-left"): img(src="@/assets/curso/5.jpg")
      
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
  background-image: url(../assets/curso/bg-1.svg)
  background-position: top
  background-size: cover
  background-repeat: no-repeat
</style>
