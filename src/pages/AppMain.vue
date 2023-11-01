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
        if (localStorage.getItem(winnerMeme.url) == null) { // se il meme non è presente nel db
          localStorage.setItem(winnerMeme.url, JSON.stringify(winnerMeme)); // inserisci meme (chiave, valore json)
        } else {
          const memeString = localStorage.getItem(winnerMeme.url);
          if (memeString) {
            const meme = JSON.parse(memeString); // da stringa json a oggetto js
            meme.points += 1;
            localStorage.setItem(winnerMeme.url, JSON.stringify(meme));
            console.log(meme)
          }
        }

        // console di tutti i meme nel db
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
          this.store.clickActive = true; // l'api offre un meme diverso ogni secondo
        }                               // per non confrontare due meme uguali
        setTimeout(oneSecAfter, 1010); // posso cliccare un secondo dopo il click precedente
      }                          
    },
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
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

main{
  min-height: calc(100vh - 70px); // h desktop - h header
  background-image: url('../../public/bg-game.png');
  background-size: cover;
  margin-top: $header-height;
  padding-bottom: 1rem;
    h1{
        text-align: center;
        color: #fff;
        padding: 2rem 0;
        font-weight: 900;
        font-family:sans-serif;
        text-transform: uppercase;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    #game-container{
      margin: auto;
      @include flex-center;

    .meme.best{
      max-width: 600px;
    }

    .points{
      display: inline-block;
    }

    .meme{
        max-height: 600px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        &:hover{
            filter: brightness(50%);
        }
    }
  }
}

@media (max-width: 1600px) {
  #game-container img{
    max-width: 500px;
  }
}

@media (max-width: 1320px) {
  #game-container img{
    max-width: 400px;
  }
}

@media (max-width: 1120px) {
  #game-container img{
    max-width: 330px;
  }
}

@media (max-width: 992px) {
  #game-container{
    flex-direction: column;

    img{
      width: 200px;
    }

    #versus{
      padding: 0.5rem 0;
    }
  }
}

@media (max-width: 300px) {
  #game-container img{
    max-width: 150px;
  }
}
</style>