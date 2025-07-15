<template>
  <div class="bg-slate-500 min-h-screen text-white">
    <div class="game">
      <div
        class="hole"
        v-for="(bushes, index) in 6"
        :key="index"
        :class="index + 1 === hole ? 'up' : ''"
      >
        <img
          :src="!moleBonked ? '/mole.svg' : '/mole-no-color.svg'"
          alt="mole"
          class="mole pl-5"
          v-if="index + 1 === hole"
          @click="bonk"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from "~/stores/shop.js";
const store = useShopStore();

const start = ref(false);
const hole = ref(0);
const startTimeout = ref(null);
const score = ref(0);
const lastHole = ref(0);

const peepTimeout = ref(null);
const moleBonked = ref(false);

const peep = () => {
  let changeTime = randomTime(
    store.difficulty.MIN_RANDOM_TIME,
    store.difficulty.MAX_RANDOM_TIME
  );
  hole.value = randomHole(6);

  peepTimeout.value = setTimeout(() => {
    if (start.value) peep();
  }, changeTime);
};

const randomHole = (holes) => {
  let id = Math.floor(Math.random() * holes + 1);
  while (id === lastHole.value) {
    id = Math.floor(Math.random() * holes + 1);
  }
  lastHole.value = id;
  return id;
};

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const startGame = () => {
  start.value = true;
  let gameTime = store.time;
  score.value = 0;
  peep();
  startTimeout.value = setTimeout(() => {
    start.value = false;
    hole.value = 0;
    alert(`Game Over! Your score is ${score.value}`);
  }, gameTime);
};

const bonk = (event) => {
  if (!event.isTrusted) return;
  score.value++;
  moleBonked.value = true;
  clearTimeout(peepTimeout.value);
  setTimeout(() => {
    moleBonked.value = false;
    peep();
  }, 200);
};

onMounted(() => {
  startGame();
});
</script>

<style scoped>
.game {
  width: 600px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.hole {
  flex: 1 0 33.33%;
  overflow: hidden;
  position: relative;
}
.hole::after {
  display: inline-block;
  background: url("bush.svg") bottom center no-repeat;
  background-size: cover;
  content: "";
  width: 100%;
  height: 55%;
  position: absolute;
  z-index: 2;
  bottom: -30px;
}
.mole {
  background: bottom center no-repeat;

  background-size: 100%;
  position: absolute;
  top: 100%;

  height: 150px;
  left: 5%;
  transition: all 0.4s;
}
.hole.up .mole {
  top: 40px;
}
</style>
