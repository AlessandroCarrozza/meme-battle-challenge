import { reactive } from "vue"
export const store = reactive({
    memeA: {
        url: 'https://preview.redd.it/67y6h05wf6xb1.jpg?width=640&crop=smart&auto=webp&s=5ebd90a9bb402e844cf6a7d42ebb64dca939092b',
        points: 1,
    },
    memeB: {
        url: '',
        points: 1,
    },
    clickActive: true,
    bestMemes: [],
})