<template>
<div class="principal">
  <h3>{{ msg }}</h3>
  <div class="row">
    <div class="col s6 m4 ">
      <div class="card lime accent-2">
        <h3 class="header  white-text">Contagiados</h3>
        <div class="card-content">
          <h3>{{Contagios}}</h3>
        </div>
      </div>
    </div>
    <div class="col s6 m4">
      <div class="card light-green">
        <h3 class="header  white-text">Recuperados</h3>
        <div class="card-content">
          <h3>{{Recuperacion}}</h3>
        </div>
      </div>
    </div>
    <div class="col s6 m4">
      <div class="card deep-orange darken-1">
        <h3 class="header  white-text">Muertos</h3>
        <div class="card-content">
        <h3>{{Mortalidad}}</h3>
        </div>
      </div>
    </div>
  
  </div>
  
  <label> {{Casos}} </label>
  
  <column-chart :data="chartdata"></column-chart>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EstadisticasCovid extends Vue {
  @Prop() private msg!: string;
private Casos: any = {};
private chartdata: any ={};
private Contagios: any ={};
private Recuperacion: any ={};
private Mortalidad: any ={};
private paises: any =[];

private mounted(){
//this.numero();
this.grafico();
this.card1();
this.card2();
this.card3();
this.array();

}

/**private numero(){
  this.axios.get('countries').then((Response)=>{
    this.Casos = Response.data;
  console.log(Response.data)
  }).catch((e)=>{
    console.log(e);
  })
}*/
private grafico(){
  this.axios.get('summary').then((Response)=>{
    this.chartdata = Response.data.Global;
  console.log(Response.data)
  }).catch((e)=>{
    console.log(e);
  })
}
private card1(){
  this.axios.get('summary').then((Response)=>{
    this.Contagios = Response.data.Global.TotalConfirmed;
  console.log(Response.data)
  }).catch((e)=>{
    console.log(e);
  })
}
private card2(){
  this.axios.get('summary').then((Response)=>{
    this.Recuperacion = Response.data.Global.TotalRecovered;
  console.log(Response.data)
  }).catch((e)=>{
    console.log(e);
  })
}
private card3(){
  this.axios.get('summary').then((Response)=>{
    this.Mortalidad = Response.data.Global.TotalDeaths;
  console.log(Response.data)
  }).catch((e)=>{
    console.log(e);
  })
}
private array() {
  this.axios.get('summary').then((Response)=>{
    this.paises = Response.data.Countries
  console.log(Response.data)
  }).catch((e)=>{
    console.log(e);
  })
}
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  text-decoration-color: gray;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
