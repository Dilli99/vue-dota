<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              :src="this.player.avatarfull"
              alt="Thumbnail"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <table class="table table-condensed">
          <thead>
            <th>Most Played Hero</th>
          </thead>
          <tbody
            v-for="playerHero in playerHeros.slice(0, 5)"
            :key="playerHero.heroId"
          >
            <tr v-for="hero in heroes" :key="hero.heroId">
              <td v-if="playerHero.heroId == hero.heroId">
                {{ hero.heroName }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-5">
        <table class="table table-condensed float-left">
          <thead>
            <th>Most Played With</th>
          </thead>
          <tbody>
            <tr v-for="friend in friends.slice(0, 5)" :key="friend.accointId">
              <td>
                <img :src="friend.avatar" />
              </td>
              <td>
                {{ friend.name }}
              </td>
              <td>
                <strong>{{ friend.games }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heroes"],
  data() {
    return {
      hero: ""
    };
  },
  computed: {
    player() {
      return this.$store.getters.player;
    },
    wins() {
      return this.$store.getters.wins;
    },
    playerHeros() {
      return this.$store.getters.playerHeros;
    },
    friends() {
      return this.$store.getters.playedWith;
    }
  }
};
</script>

<style scoped></style>
