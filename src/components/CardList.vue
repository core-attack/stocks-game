<template>
  <div>
    <div class="e-header"></div>
    <div class="e-container">
      <div class="e-sector" v-for="sector in sectors" v-bind:key="sector.id" :class="{ s1: sector.id == 1, s2: sector.id == 2, s3: sector.id == 3, s4: sector.id == 4, s5: sector.id == 5, s6: sector.id == 6, s7: sector.id == 7, s8: sector.id == 8 }">
          <div class="e-title"><span >{{sector.title}}</span></div>
          <appCard v-for="(card, i) in sector.items" v-bind:key="card.id" :title="card.title" :image="card.image" :imageOpen="card.imageOpen" :text="card.text" :type="card.type" :amount="card.amount" :index="i"/>
      </div>
    </div>
    <div class="e-footer"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Card from "@/components/Card.vue";
  import Api from "@/api/Requests";

  export default {
    name: 'CardList',
    components: {
      appCard: Card,
      appNew: () => ({
        component: New
      })
    },

    data(){
      return {
        state: false,
        sectors: []
      }
    },

    created() {
      this.sectors = Api.getAll();
    },

    methods:{

    }
  }
</script>

<style>

body{
  font-family: Playfair Display;
  margin: 0;
}

.e-header{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 80.5vh;
  background: url("/img/currency-pattern.png");
}

.e-footer{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 84vh;
  bottom: 0%;

  background: url("/img/currency-pattern.png");
  transform: matrix(1, 0, 0, -1, 0, 0);
  z-index: 10;
  height: 20vh;
}

.e-container{
  display: flex;
  justify-content: center;
  background: url("/img/pattern.png");
  background-repeat: repeat-x;
  z-index: -99999;
  max-width: 100vw;
  overflow: hidden;
}

.e-sector{
  flex-grow: 1;
  width: 12%;
  flex-basis: 210px;

}

.e-sector .e-title{
  color: #FFE169;
  width: 210px;
  height: 75px;
  font-size: 24px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;

  /* голд */

  color: #FFE169;
}

.e-sector .e-title span{
  display: inline-block;
  width: 210px;
  z-index: 100;
}

.e-title{
  margin: 10px 0;
}

.s1 .e-title {
  margin-left: 28px;
}

.s2 .e-title{
  margin-left: 29px;
}

.s3 .e-title {
  margin-left: 29px;
}

.s4 .e-title {
  margin-left: 29px;
}

.s5 .e-title {
  margin-left: 28px;
}

.s6 .e-title {
  margin-left: 16px;
}

.s7 .e-title {
  margin-left: 23px;
}

.s8 .e-title {
  margin-left: 19px;
  color: #FCFADF;
}


</style>
