interface UserProp {
  name: string;
  age: number;
}

interface State {
  userInfo: UserProp;
}

const state = {
  userInfo: {
    name: "vite",
    age: 24,
  },
};

const getters = {
  userName(state: State) {
    return state.userInfo.name;
  },
};

const mutations = {
  SET_USER(state: State, value: UserProp) {
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
