<template>
  <div>Time : {{ secondsLeft }}</div>
</template>

<script setup>
import { ref, onMounted, watch, toRefs, defineProps } from 'vue'

const props = defineProps({
  time: {
    type: Number,
    required: true,
  },
  resetTime: {
    type: Boolean,
    required: true,
  },
})

const { time, resetTime } = toRefs(props)

const countdown = ref(null)
const secondsLeft = ref(Math.floor(time.value / 1000))

const timer = () => {
  const now = Date.now()
  const then = now + time.value

  countdown.value = setInterval(() => {
    const seconds = Math.round((then - Date.now()) / 1000)
    secondsLeft.value = seconds
    if (seconds <= 0) {
      clearInterval(countdown.value)
      secondsLeft.value = 0
    }
  }, 1000)
}

onMounted(() => {
  timer()
})

watch(resetTime, (newVal) => {
  if (newVal) {
    secondsLeft.value = Math.floor(time.value / 1000)
    clearInterval(countdown.value)
    timer()
  }
})
</script>
