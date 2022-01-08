interface IUserProp {
  name: string;
  age: number;
}

interface IState {
  userInfo: IUserProp;
}

const state = {
  userInfo: {
    name: "vite",
    age: 24,
  },
};

const getters = {
  userName(state: IState) {
    return state.userInfo.name;
  },
};

const mutations = {
  SET_USER(state: IState, value: IUserProp) {
    state.userInfo = value;
  },
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
