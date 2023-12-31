import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import { store } from "./store"
import { router } from './router';
createApp(App).use(router).mount('#app')



// funzione richiamabile ovunque
// chiamata axios che prende un meme randomico, l'api cambia meme ogni secondo
export function getMeme() {
    axios.get(`https://meme-api.com/gimme`)
  .then(response => {
    store.memeB.url = response.data.preview[3] ? response.data.preview[3] : response.data.preview[2];
    // console.log(store.memeA);
    // console.log(store.memeB);
  });
};
  