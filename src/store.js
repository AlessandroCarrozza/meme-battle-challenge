import { reactive } from "vue"
export const store = reactive({
    memeA: {
        url: 'https://preview.redd.it/jgysc912ooxb1.png?width=640&crop=smart&auto=webp&s=1b976bf5a75d031c56b8b09ae430c1f8049d7695',
        points: 1,
    },
    memeB: {
        url: '',
        points: 1,
    },
    clickActive: true,
    bestMemes: [],
})