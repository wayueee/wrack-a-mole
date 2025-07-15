import { defineStore } from 'pinia'
export const useShopStore = defineStore('shop', () => {
    const mode = ref('easy')
    const time = ref(10000)
    const difficulty = ref({
        MIN_RANDOM_TIME : 1000,
        MAX_RANDOM_TIME : 5000,
    })
    return { difficulty, mode, time}
})