<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Una adecuada atención al cliente es muy importante en el mercado y de su buena atención depende la fidelización y aumento de la clientela, para comenzar a profundizar en este interesante tema le invitamos a ver el siguiente video:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/c1LwAMyN3Xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Atención al Cliente en el Retail: introducción
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
