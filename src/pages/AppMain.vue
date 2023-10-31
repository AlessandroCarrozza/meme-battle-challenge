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
        this.store.memeA.url = winnerMeme;
        this.store.memeB.url = '';
        this.store.clickActive = false;
        getMeme();

        const oneSecAfter = () => {
          this.store.clickActive = true;
        }
        setTimeout(oneSecAfter, 1010); // posso cliccare un secondo dopo il click precedente
      }                                // per non confrontare due meme uguali
    }
  },
}
</script>

<template>
    <main>
        <h1>Scegli il meme migliore:</h1>
        <div id="game-container">
            <img class="meme" :src='this.store.memeA.url' alt="Meme" @click="this.clickOnMeme(this.store.memeA.url)">
            <img id="versus" src="../../public/versus.webp" alt="Vs">
            <img class="meme" :src='this.store.memeB.url' alt="Meme" @click="this.clickOnMeme(this.store.memeB.url)">
        </div>
    </main>
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

        &:hover{
            opacity: 50%;
        }
    }
}
}
</style>