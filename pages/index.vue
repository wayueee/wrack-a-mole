<template>
  <div
    class="flex w-full m-auto justify-center bg-slate-500 items-center min-h-screen"
  >
    <div class="w-64 bg-slate-600 rounded-md text-slate-50 text-center">
      <button class="bg-green-600 w-full py-2 rounded-md">
        <NuxtLink to="/game">Start</NuxtLink>
      </button>
      <div class="difficulty">
        <b>Difficulty:</b>
        <div>
          <button
            class="shadow-md text-slate-300 px-2 py-1 mx-1 my-2 hover:bg-slate-700"
            @click="ChangeDifficulty('easy')"
          >
            Easy
          </button>
          <button
            class="shadow-md text-slate-300 px-2 py-1 mx-1 my-2 hover:bg-slate-700"
            @click="ChangeDifficulty('medium')"
          >
            Medium
          </button>
          <button
            class="shadow-md text-slate-300 px-2 py-1 mx-1 my-2 hover:bg-slate-700"
            @click="ChangeDifficulty('hard')"
          >
            Hard
          </button>
        </div>
      </div>
      <div class="time">
        <b>Time: </b>
        <div>
            <span class="shadow-md text-slate-300 px-2 py-1 mx-1 my-2 hover:bg-slate-700">
                <input type="radio" name="rime" id="10" :value="10000" checked v-model="store.time">
                <label for="10s">10s</label>
            </span>
            <span class="shadow-md text-slate-300 px-2 py-1 mx-1 my-2 hover:bg-slate-700">
                <input type="radio" name="rime" id="30" :value="30000" v-model="store.time">
                <label for="30s">30s</label>
            </span>
            <span class="shadow-md text-slate-300 px-2 py-1 mx-1 my-2 hover:bg-slate-700">
                <input type="radio" name="rime" id="60" :value="60000" v-model="store.time">
                <label for="60s">60s</label>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from '~/stores/shop';
const store = useShopStore()

const ChangeDifficulty = (diff) => {
    store.mode = diff;
    if(diff === 'easy'){
        store.difficulty.MIN_RANDOM_TIME = 1000;
        store.difficulty.MAX_RANDOM_TIME = 3000;
    }else if(diff === 'medium'){
        store.difficulty.MIN_RANDOM_TIME = 500;
        store.difficulty.MAX_RANDOM_TIME = 1500;
    }else if(diff === 'hard'){
        store.difficulty.MIN_RANDOM_TIME = 200;
        store.difficulty.MAX_RANDOM_TIME = 1000;
    }
}
</script>

<style></style>
