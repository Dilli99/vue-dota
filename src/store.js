import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player: [],
    wins: [],
    heroByPlayer: [],
    playedWith: []
  },
  mutations: {
    playerData(state, data) {
      state.player = data;
    },
    playerWin(state, data) {
      state.wins = data;
    },

    playerHero(state, data) {
      state.heroByPlayer = data;
    },
    playedWith(state, data) {
      state.playedWith = data;
    }
  },
  actions: {
    heroByPlayer({ commit }, playerId) {
      axios
        .get("https://api.opendota.com/api/players/" + playerId + "/heroes")
        .then(res => {
          const playerHero = res.data.map(hero => ({
            heroId: hero.hero_id,
            games: hero.games
          }));
          commit("playerHero", playerHero);
        });
    },
    searchByName({ commit, dispatch }, playerId) {
      axios
        .get("https://api.opendota.com/api/players/" + playerId)
        .then(res => {
          commit("playerData", res.data.profile);
          dispatch("heroByPlayer", playerId);
          dispatch("playedWith", playerId);
        });
    },
    playedWith({ commit }, playerId) {
      axios
        .get("https://api.opendota.com/api/players/" + playerId + "/peers")
        .then(res => {
          const playedWith = res.data.map(friend => ({
            avatar: friend.avatar,
            name: friend.personaname,
            accoundId: friend.account_id,
            games: friend.games
          }));
          commit("playedWith", playedWith);
        });
    }
  },
  getters: {
    player(state) {
      return state.player;
    },
    wins(state) {
      return state.wins;
    },
    playerHeros(state) {
      return state.heroByPlayer;
    },
    playedWith(state) {
      return state.playedWith;
    }
  }
});
