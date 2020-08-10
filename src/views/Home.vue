<template>
  <div class="Covid19-2020">
    
    <div content-class="banneer">
    <img alt="Banner" src="../assets/3717860.jpg">
    </div>
    <EstadisticasCovid msg="¿Como se si tengo coronavirus?-Si tienes sintomas-Marca desde tu movil al 192 "/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import EstadisticasCovid from '@/components/EstadisticasCovid.vue'

export default {
  name: 'Covid19-2020',
  components: {
    EstadisticasCovid
  }
}

</script>
<style scoped>
img{
width: 1320px;
height: 450px;
}
</style>
