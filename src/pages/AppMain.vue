<script>
import { store } from "../store";
import { getMeme } from '../main';

export default {
    name: 'AppMain',
    data() {
      return {
        store,
      }
    },
    methods: {
    clickOnMeme(winnerMeme) {
      if (this.store.clickActive) {
        // Salva un oggetto con una chiave
        if (localStorage.getItem(winnerMeme.url) == null) {
          localStorage.setItem(winnerMeme.url, JSON.stringify(winnerMeme));
        } else {
          const memeString = localStorage.getItem(winnerMeme.url);
          if (memeString) {
            const meme = JSON.parse(memeString);
            meme.points += 1;
            localStorage.setItem(winnerMeme.url, JSON.stringify(meme));
            console.log(meme)
          }
        }

        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          console.log(`Chiave: ${key}, Valore: ${value}`);
        }

        this.store.memeA.url = winnerMeme.url;
        this.store.memeB.url = '';
        this.store.clickActive = false;
        getMeme();

        //localStorage.clear();

        const oneSecAfter = () => {
          this.store.clickActive = true;
        }                               // per non confrontare due meme uguali
        setTimeout(oneSecAfter, 1010); // posso cliccare un secondo dopo il click precedente
        this.getBestMemes();
      }                          
    },
    getBestMemes() {
      this.store.bestMemes = [];
      for (let i = 0; i < localStorage.length; i++) {
        const chiave = localStorage.key(i); // Ottieni la chiave corrente
        const valore = localStorage.getItem(chiave); // Ottieni il valore associato alla chiave

        // Se il valore è una stringa JSON, analizzalo in un oggetto JavaScript
        let oggetto;
        try {
          oggetto = JSON.parse(valore);
        } catch (e) {
          oggetto = valore; // Se non è una stringa JSON, mantienilo com'è
        }

        this.store.bestMemes.push(oggetto);
        this.store.bestMemes.sort((a, b) => b.points - a.points);

        // Ora puoi utilizzare 'chiave' e 'oggetto' come desideri
        // console.log("Chiave:", chiave);
        // console.log("Valore:", oggetto);
      }
    },
  },
  mounted() {
    this.getBestMemes();
  },
}
</script>

<template>
    <main>
        <h1>Scegli il meme migliore:</h1>
        <div id="game-container">
            <img class="meme" :src='this.store.memeA.url' alt="Meme" @click="this.clickOnMeme(this.store.memeA)">
            <img id="versus" src="../../public/versus.webp" alt="Vs">
            <img class="meme" :src='this.store.memeB.url' alt="Meme" @click="this.clickOnMeme(this.store.memeB)">
        </div>
    </main>

    <div v-for="meme in this.store.bestMemes">
      <h1 class="points">{{ meme.points }}</h1>
      <img class="meme best" :src="meme.url" alt="Meme">
    </div>
</template>

<style scoped lang="scss">
main{
    h1{
        text-align: center;
        padding: 3rem 0;
    }

    #game-container{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .meme{
        max-height: 600px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        &:hover{
            opacity: 50%;
        }
    }
  }
}

.meme.best{
  max-height: 150px;
}

.points{
  display: inline-block;
}
</style>