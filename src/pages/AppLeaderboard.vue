<script>
import { store } from "../store";

export default {
    name: 'AppLeaderboard',
    data() {
      return {
        store,
      }
    },
    methods: {
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
        this.store.bestMemes.sort((a, b) => b.points - a.points); // ordino il db locale in ordine decrescente per punti

        // Ora puoi utilizzare 'chiave' e 'oggetto' come desideri
        console.log("Chiave:", chiave);
        console.log("Valore:", oggetto);
      }
    },
  },
  mounted() {
    this.getBestMemes();
  },
}
</script>

<template>


<div id="container">
    <div id="title">
      <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
      <h1>LEADERBOARD</h1>
      <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
    </div>

    <main>
      <div id="header">
        <h1>Ranking</h1>
        <h1>Punti</h1>
      </div>
      <div id="leaderboard">
        <table>
          <tr v-for="(meme, index) in this.store.bestMemes">
            <td class="number">{{index + 1}}</td>
            <td>
              <img class="best meme" :src="meme.url" alt="Meme">
            </td>
            <td class="points">
              <img v-if="index == 0" class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
              {{meme.points}}
            </td>
          </tr>
        </table>
      </div>
    </main>
</div>

</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

#container{
  margin-top: $header-height;
}

#title{
  text-align: center;
  padding: 2rem;
  font-family: sans-serif;

  h1{
    display: inline-block;
    vertical-align: 50%;
    padding: 0 1rem;
  }
}

main {
  max-width: 1000px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
  box-shadow: 0px 5px 15px 8px #e4e7fb;
  @include flex-ali-center;
  flex-direction: column;
  border-radius: 0.5rem;
  margin: 0 auto 2rem;

  #header {
    width: 100%;
    @include flex-between;
    padding: 2.5rem 2rem;

    h1 {
      font-family: "Rubik", sans-serif;
      font-size: 1.7rem;
      color: #141a39;
      text-transform: uppercase;
      cursor: default;
    }
  }

  #leaderboard {
    width: 100%;
    position: relative;

    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      color: #141a39;
      cursor: default;

      .best.meme{
        max-height: 100%;
      }
    }

    tr {
      transition: all 0.2s ease-in-out;
      border-radius: 0.2rem;
    }

    tr:hover {
      background-color: #fff;
      -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
      box-shadow: 0px 5px 15px 8px #e4e7fb;
    }

    tr:nth-child(odd) {
      background-color: #f9f9f9;
    }

    td {
      height: 10rem;
      font-family: "Rubik", sans-serif;
      font-size: 1.4rem;
      padding: 1rem 2rem;
      position: relative;
    }

    .number {
      width: 1rem;
      font-size: 2.2rem;
      font-weight: bold;
      text-align: left;
      color: grey;
    }

    .name {
      text-align: left;
      font-size: 1.2rem;
    }

    .points {
      font-weight: bold;
      font-size: 1.3rem;
      @include flex-ali-center;
      justify-content: flex-end;
    }

    .points:first-child {
      width: 10rem;
    }

    .gold-medal {
      height: 3rem;
      padding: 0 1.5rem;
    }
  }
}


@media (max-width: 550px) {
  .gold-medal{
    display: none;
  }
}

@media (max-width: 450px) {
  .meme{
    max-width: 200px;
  }
}

</style>