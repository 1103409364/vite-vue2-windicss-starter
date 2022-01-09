const state = {
  language: "zh",
};

const getters = {
  language(state: State) {
    return state.language;
  },
};

const mutations = {
  SET_USER(state: State, value: string) {
    state.language = value;
  },
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
