<template>
  <div class="card" @click="toggle" :class="{ maximize: maximize, outdated: outdated }">
    <div class="wrapper front card__side card__side--front" 
      :class="{ c10: amount == 10000, c13: amount == 13000, c16: amount == 16000, c19: amount == 19000, c22: amount == 22000, c25: amount == 25000, 
        i1: index == 0, i2: index == 1, i3: index == 2, i4: index == 3, i5: index == 4, i6: index == 5}">
      <div class="rec"><span class="amount">{{formatAmount()}}</span>
      <img :src="getFrontIcon()" alt="Карта"/></div>
    </div>
    <div class="wrapper back open card__side card__side--back"
      :class="{ type_0: type == 0, type_1: type == 1, type_2: type == 2, type_3: type == 3, type_4: type == 4, type_5: type == 5, type_6: type == 6, type_7: type == 7, 
        i1: index == 0, i2: index == 1, i3: index == 2, i4: index == 3, i5: index == 4, i6: index == 5
      }">
      <div class="rec">
      </div>
      <div class="frame">
        <div class="title"><span>{{getTitle()}}</span></div>
        <img :src="getBackIcon()" alt="img with question"/>
      </div>
    </div>
    <div class="wrapper-fake"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  const imgPath = "/img/";

  export default {
    name: 'Card',
    props: {
      title: {
        default: "some title",
        type: String
      },
      text: {
        type: String,
        default: "some text"
      },
      image: {
        type: String,
        default: "some text"
      },
      imageOpen: {
        type: String,
        default: "some text"
      },
      type:{
        type: Number,
        default: 0
      },
      amount: {
        type: Number,
        default: 10000
      },
      index: {
        type: Number,
        default: 0
      }
    },

    computed: {
    },

    data: function() {
      return {
        open: false,
        closed: false,
        maximize: false,
        outdated: false
      }
    },

    methods: {
      toggle: function(){
        if(this.outdated && !this.open){
          return;
        }

        this.open = !this.open;
        this.maximize = !this.maximize;
        this.outdated = true;
      },
      hide: function(){
        this.closed = true;
      },
      getTitle(){
        switch(this.type){
          case 0: return "ВНИМАНИЕ, ВОПРОС!";
          case 1: return "СЧАСТЛИВЫЙ СЛУЧАЙ";
          case 2: return "СЧАСТЛИВЫЙ СЛУЧАЙ";
          case 3: return "КИДАЙ СВИНЬЮ";
          case 4: return "БЛИЦ";
          case 5: return "ПРАВДА / ДЕЙСТВИЕ";
          case 6: return "РИСКУЙ!";
          case 7: return "СЧАСТЛИВЫЙ СЛУЧАЙ";
        }

        return "";
      },
      getBackIcon(){
        switch(this.type){
          case 0: return imgPath + "emoji.svg";
          case 1: return imgPath + "eye.svg";
          case 2: return imgPath + "money.svg";
          case 3: return imgPath + "pig.svg";
          case 4: return imgPath + "question.svg";
          case 5: return imgPath + "question2.svg";
          case 6: return imgPath + "rating.svg";
          case 7: return imgPath + "text.svg";
        }

        return "";
      },
      getFrontIcon(){
        switch(this.amount){
          case 10000: return imgPath + "background.png";
          case 13000: return imgPath + "background-1.png";
          case 16000: return imgPath + "background-2.png";
          case 19000: return imgPath + "background-3.png";
          case 22000: return imgPath + "background-4.png";
          case 25000: return imgPath + "background-5.png";
        }
      },
      formatAmount(){
        return this.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      },
    },
  }
</script>

<style>

.card {
  flex: initial;
  position: relative;
  -moz-perspective: 200rem;
  perspective: 200rem;
  margin: 0 1rem;
}

.card > .wrapper, .card > .wrapper-fake, .card > .wrapper, .card > .wrapper-fake-2{
  width: 226px;
  height: 143px;
  border: 1px solid transparent;
  box-shadow: 6px 6px 0px transparent;
}

.card > .wrapper{
  border: 1px solid #FCFADF;
  box-shadow: 6px 6px 0px #3A3F33;
}

.card {
  text-align: center;
  padding: 0!important;
  z-index: 11;
  margin-bottom: 15px;
}

.card .wrapper {
  position: relative;
}

.card .wrapper-fake, .card .wrapper-fake-2{
  display: none;
}

.card.outdated .wrapper-fake{
  display: block;
}

.card.card.outdated:not(.maximize) .wrapper-fake-2{
  display: block;
}

.card.outdated:not(.maximize) > *{
  top: 0 !important;
  opacity: 0.1;
}

.maximize{
  z-index: 1001;
  /* -webkit-transition: all 2s ease;  
  -moz-transition: all 2s ease;  
  -o-transition: all 2s ease;  
  -ms-transition: all 2s ease;  
  transition: all 2s ease; */
}

.maximize .wrapper-fake{
  display: block;
}

.card__side--back{
  transform: rotateY(-180deg);
}

.maximize .card__side--back {
  transform: rotateY(0);
}

.card__side--front{
  transform: rotateY(0) !important;
} 

.maximize .card__side--front {
  transform: rotateY(180deg)  !important;
}

.card.outdated:not(.maximize) .card__side--front{
  transform:translate(9999px);
  display: none;
}

.maximize .wrapper{
  width:315px;
  height: 193px;
  position: absolute !important;
  right: 0 !important;
  bottom: 0 !important; 
  transform: translate(-50%, -50%);
}


.maximize .wrapper {
  top: 50% !important;
  left: 50% !important;
}

.s1 .maximize .wrapper{
  left: 55% !important;
}

.s8 .maximize .wrapper{
  left: 40% !important;
}

/* .maximize .wrapper.i1 {
  top: 10% !important;
} */

.card__side {
  height: 52rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden; 
  overflow: hidden; 
  box-shadow: 0 2rem 6rem rgba(#000, 0.15);
}

.card__side--front {
  width: 210px;
  height: 130px;
  background: url("/img/card-back-pattern.svg"), #8E943D;
  border: 1px solid #FCFADF;
  box-shadow: 6px 6px 0px #3A3F33;
}

.c10{
  background: url("/img/card-back-pattern.svg"), #9F8E60;
}

.c13{
  background: url("/img/card-back-pattern.svg"), #ACA672;
}

.c16{
  background: url("/img/card-back-pattern.svg"), #7B847F;
}

.c19{
  background: url("/img/card-back-pattern.svg"), #71825E;
}

.c22{
  background: url("/img/card-back-pattern.svg"), #92905E;
}

.c25{
  background: url("/img/pattern-front.png"), #9EA348;
}

.card__side--front .rec{
  position: absolute;
  left: 2.22%;
  right: 2.22%;
  top: 3.33%;
  bottom: 3.33%;
  border: 1px solid #FCFADF;
}

.card__side--front .amount{
  position: absolute;
  left: 32.86%;
  right: 32.86%;
  top: 35.31%;
  bottom: 39.23%;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;
  color: #FCFADF;
  z-index: 1001;
}

.card__side--front img{
  position: absolute;
  left: 24.79%;
  right: 24.83%;
  top: 5.33%;
  bottom: 5%;
}

.card__side--front{
  background-size: 15% !important;
}

.card__side--back{
  z-index: 9999999;
  background-size: 15% !important;
}

.card__side--back .rec {
  position: absolute;
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  border: 1px solid #24281F;
  box-sizing: border-box;
}

.frame {
  display: flex;
  flex-direction: column;
  padding: 0px;
  position: absolute;
  width: 162px;
  height: 95px;
  left: calc(50% - 162px/2);
  top: calc(50% - 95px/2);
}

.maximize .frame{
  position: absolute;
  width: 240.55px;
  height: 141.06px;
  left: calc(50% - 240.55px/2 - 0px);
  top: calc(50% - 141.06px/2 + 0px);
}

.maximize .frame .title{
  height: 59.39px;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 22.2727px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #24281F;
  flex: none;
  order: 0;
  align-self: center;
  margin: 0px 7.42424px;
}

.maximize .frame img{
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 7.42424px;
}

.title {
  /* position: static;
  width: 162px; */
  height: 40px;
  left: calc(50% - 162px/2);
  top: 0px;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #24281F;
  flex: none;
  order: 0;
  align-self: center;
  margin: 0px 5px;
}

.card__side--back {
  position: absolute !important;
  border: 1px solid #24281F !important;
  box-shadow: 0px 13px 28px rgba(58, 63, 51, 0.7) !important;
}

.type_0.card__side--back {
  position: absolute;
  left: 0.47%;
  right: 0.47%;
  top: 0.76%;
  bottom: 0.76%;
  background: url('/img/pattern-back.png'), #D7D0D4;
}

.type_0 img {
  position: absolute;
  left: 43.27%;
  right: 35.27%;
  top: 61.37%;
  bottom: 0%;
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
  transform: scale(2.5);
}

.type_1.card__side--back {
  left: 0.47%;
  right: 0.47%;
  top: 0.76%;
  bottom: 0.76%;
  background: url('/img/pattern-back.png'), #D8DAD3;
}

.type_1 img{
  position: static;
  left: 35.27%;
  right: 35.27%;
  top: 47.37%;
  bottom: 0%;
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
}

.type_2.card__side--back {
  left: 1.98%;
  right: 87.08%;
  top: 38.9%;
  bottom: 48.1%;
  background: url('/img/pattern-back.png'), #D8DAD3;
}

.type_2 img{
  position: static;
  left: 35.27%;
  right: 35.27%;
  top: 47.37%;
  bottom: 0%;
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
}

.type_3.card__side--back {
  left: 0.47%;
  right: 0.47%;
  top: 0.76%;
  bottom: 0.76%;
  background: url('/img/pattern-back.png'), #D7D0D4;
}

.type_3 img{
  position: static;
  left: 35.27%;
  right: 35.27%;
  top: 33.33%;
  bottom: 0%;
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
}

.type_4.card__side--back {
  left: 0.47%;
  right: 0.47%;
  top: 0.76%;
  bottom: 0.76%;
  background: url('/img/pattern-back.png'), #E9D5BD;
}

.type_4 img{
  position: static;
  left: 35.27%;
  right: 35.27%;
  top: 33.33%;
  bottom: 0%;
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
}

.type_5.card__side--back {
  left: 0.47%;
  right: 0.47%;
  top: 0.76%;
  bottom: 0.76%;
  background: url('/img/pattern-back.png'), #E4DFC2;
}

.type_5 img{
  position: absolute;
  top: 25%;
  left: calc(50% - 65px);
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
  transform: scale(0.5);
}

.type_6.card__side--back {
  left: 0.47%;
  right: 0.47%;
  top: 0.76%;
  bottom: 0.76%;
  background: url('/img/pattern-back.png'), #D7D0D4;
}

.type_6 img{
  position: static;
  left: 35.27%;
  right: 35.27%;
  top: 33.33%;
  bottom: 0%;
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
}

.type_7.card__side--back {
  left: 0.47%;
  right: 0.47%;
  top: 0.76%;
  bottom: 0.76%;
  background: url('/img/pattern-back.png'), #D8DAD3;
}

.type_7 img{
  position: static;
  left: 35.27%;
  right: 35.27%;
  top: 47.37%;
  bottom: 0%;
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 5px;
}

</style>
