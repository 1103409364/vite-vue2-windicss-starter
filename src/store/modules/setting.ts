interface IState {
  language: string;
}

const state = {
  language: "zh",
};

const getters = {
  language(state: IState) {
    return state.language;
  },
};

const mutations = {
  SET_USER(state: IState, value: string) {
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
