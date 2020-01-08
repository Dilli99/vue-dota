<template>
  <div>
    <div class="row mb-5 ">
      <div class="col-lg-8 mx-auto">
        <div class="bg-white p-5 rounded shadow">
          <!-- Custom rounded search bars with input group -->
          <div class="p-1 bg-dark rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input
                type="search"
                v-model="playerId"
                placeholder="Search by Player Id"
                class="form-control border-0 bg-light"
              />
              <div class="input-group-append">
                <button
                  @click="searchPlayers"
                  type="submit"
                  class="btn btn-link text-primary"
                >
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <app-players :heroes="heroes"></app-players>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import players from "./Players";
export default {
  components: { appPlayers: players },
  data() {
    return {
      playerId: "",
      heroes: []
    };
  },
  methods: {
    searchPlayers() {
      this.$store.dispatch("searchByName", this.playerId);
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    axios.get("https://api.opendota.com/api/heroes").then(res => {
      const heroes = res.data.map(hero => ({
        heroId: hero.id,
        heroName: hero.localized_name
      }));
      this.heroes = heroes;
    });
  }
};
</script>

<style scoped>
.form-control:focus {
  box-shadow: none;
}

.form-control-underlined {
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
  padding-left: 0;
}
</style>
