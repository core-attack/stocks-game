<template>
  <div>
    <div class="e-header"></div>
    <div class="congrats container" v-show="finished">
      <div class="message">
        <h1>Победили</h1>
        <h2 v-for="(x) in winners" 
            v-bind:key="x.name">{{ x.title }}</h2>
      </div>
    </div>
    <div class="e-container">
      <div class="e-sector" v-for="sector in sectors" v-bind:key="sector.id" :class="{ s1: sector.id == 1, s2: sector.id == 2, s3: sector.id == 3, s4: sector.id == 4, s5: sector.id == 5, s6: sector.id == 6, s7: sector.id == 7, s8: sector.id == 8 }">
          <div class="e-title"><span >{{sector.title}}</span></div>
          <appCard v-for="(card, i) in sector.items" 
            v-bind:key="card.id"
            :title="card.title"
            :image="card.image"
            :imageOpen="card.imageOpen"
            :imageChild="card.imageChild"
            :text="card.text"
            :options="card.options"
            :type="card.type"
            :amount="card.amount"
            :index="i"
            @updated="onUpdated(card)"/>
      </div>
    </div>
    <div class="e-footer">
      <div class="teams">
        <div class="team" v-for="team in teams" v-bind:key="team.title">
          <span class="name">{{team.title}}</span>
          <span class="dec" @click="decrease(team)">—</span>
          <span class="amount">{{team.amount}}</span>
          <span class="inc" @click="increase(team)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        sectors: [],
        teams: [ { title: "Синие бойцы", amount: 0 }, { title: "Зелёные лягушки", amount: 0 } ],
        currentAmount: 0,
        closedCards: 0,
        cardsAmount: 0
      }
    },

    created() {
      this.sectors = Api.getAll();
      this.cardsAmount = this.sectors.length * this.sectors[0].items.length;
    },

    computed: {
      finished(){
        return this.cardsAmount == this.closedCards && this.closedCards > 0;        
      },
      winners(){
        let maxAmount = 0;

        this.teams.map((x) => {
          if (x.amount > maxAmount){
            maxAmount = x.amount;
          }
        });
console.log(maxAmount);

        let wins = this.teams.filter(function(x) { return x.amount === maxAmount });
        console.log(wins);

        return wins;
      }
    },

    mounted(){
      const Confettiful = function(el) {
        this.el = el;
        this.containerEl = null;
        
        this.confettiFrequency = 3;
        this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E','#EFFF1D'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];
        
        this._setupElements();
        this._renderConfetti();
      };

      Confettiful.prototype._setupElements = function() {
        const containerEl = document.createElement('div');
        const elPosition = this.el.style.position;
        
        if (elPosition !== 'relative' || elPosition !== 'absolute') {
          this.el.style.position = 'relative';
        }
        
        containerEl.classList.add('confetti-container');
        
        this.el.appendChild(containerEl);
        
        this.containerEl = containerEl;
      };

      Confettiful.prototype._renderConfetti = function() {
        this.confettiInterval = setInterval(() => {
          const confettiEl = document.createElement('div');
          const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
          const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
          const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
          const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
          
          confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
          confettiEl.style.left = confettiLeft;
          confettiEl.style.width = confettiSize;
          confettiEl.style.height = confettiSize;
          confettiEl.style.backgroundColor = confettiBackground;
          
          confettiEl.removeTimeout = setTimeout(function() {
            confettiEl.parentNode.removeChild(confettiEl);
          }, 3000);
          
          this.containerEl.appendChild(confettiEl);
        }, 25);
      };

      window.confettiful = new Confettiful(document.querySelector('.congrats'));
    },

    methods:{
      onUpdated(card){
        console.log('current='+card.amount)
        this.currentAmount = card.amount;
        this.closedCards++;  
      },
      increase(team){
        team.amount += this.currentAmount;

      },
      decrease(team){
        team.amount -= this.currentAmount;
      }
    }
  }
</script>

<style>

.congrats{
  z-index: 2000;
  position: absolute !important;
}

.congrats .message{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #FFF;
}

.congrats .message h1{
  font-size: 60px;
}

.congrats .message h2 {
  font-size: 40px;
}

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
  top: 80vh;
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
  height: 100vh;
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

.teams{
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: flex;
  flex-direction: row;
  width: 100%;
}

.team{
  flex-grow: 1;
  text-align: center;
  margin-bottom: 2em;
  font-size: 30px;
}

h1, h2{
  color: #fff;
}



.team , .team .title, .team .amount{
  color: #c1c1c1 !important
}

.team .inc {
}

.team .dec {
}

.team .inc, .team .dec{
  padding: 1em;
}

body {
  font-family: 'Roboto';
  margin: 0;
  padding: 0;
}

@keyframes confetti-slow {
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  
  100% { transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg); }
}

@keyframes confetti-medium {
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  
  100% { transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg); }
}

@keyframes confetti-fast {
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  
  100% { transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg); }
}

.container {
  width: 100vw;
  height: 100vh;
  background: transparent;
  display:fixed;
  top:0px;
}

.confetti-container {
  perspective: 700px;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.confetti {
  position: absolute;
  z-index: 1;
  top: -10px;
  border-radius: 0%;
}

.confetti--animation-slow {
  animation: confetti-slow 2.25s linear 1 forwards;
}

.confetti--animation-medium {
  animation: confetti-medium 1.75s linear 1 forwards;
}

.confetti--animation-fast {
  animation: confetti-fast 1.25s linear 1 forwards;
}

/* Checkmark */
.checkmark-circle {
  width: 150px;
  height: 150px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-left: auto;
  margin-right: auto;
}
.checkmark-circle .background {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #00C09D;
  position: absolute;
}
.checkmark-circle .checkmark {
  border-radius: 5px;
}
.checkmark-circle .checkmark.draw:after {
  -webkit-animation-delay: 100ms;
  -moz-animation-delay: 100ms;
  animation-delay: 100ms;
  -webkit-animation-duration: 3s;
  -moz-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-name: checkmark;
  -moz-animation-name: checkmark;
  animation-name: checkmark;
  -webkit-transform: scaleX(-1) rotate(135deg);
  -moz-transform: scaleX(-1) rotate(135deg);
  -ms-transform: scaleX(-1) rotate(135deg);
  -o-transform: scaleX(-1) rotate(135deg);
  transform: scaleX(-1) rotate(135deg);
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.checkmark-circle .checkmark:after {
  opacity: 1;
  height: 75px;
  width: 37.5px;
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top;
  border-right: 15px solid white;
  border-top: 15px solid white;
  border-radius: 2.5px !important;
  content: '';
  left: 25px;
  top: 75px;
  position: absolute;
}

@-webkit-keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
@-moz-keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}

</style>
