export const state = () => ({
  user: [],
  token: "",
  login: false,
  dataUser: [],
});
export const getters = {
  getLogin() {
    if (process.client) {
      let login = JSON.parse(localStorage.getItem("login"));
      return login;
    }
  },
  getUser() {
    if (process.client) {
      let user = JSON.parse(localStorage.getItem("user"));
      return user;
    }
  },
};
export const actions = {
  async login({ commit, dispatch }, payload) {
    const options = {
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    };
    const token = await this.$axios.post("/auth/login", payload);
    const access_token = token.data.access_token;
    // console.log(token.data.access_token);
    commit("SET_TOKEN", access_token);
    dispatch("getuser", access_token);
  },
  async logout() {},

  async getuser({ commit }, payload) {
    const auth = {
      headers: {
        Authorization: `Bearer ${payload}`,
        "Content-Type": "application/json",
      },
    };
    const user = await this.$axios.get("/user", auth);
    commit("SET_USER", user.data);
  },

  async getAlluser() {
    const auth = {
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
    };
    const user = await this.$axios.get("/user/all", auth);
    commit("GET_USER", user.data);
  },
  async getAllbookmark() {
    const auth = {
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
    };
    const user = await this.$axios.get("/bookmark/all", auth);
    commit("GET_USER", user.data);
  },
};
export const mutations = {
  SET_USER(state, user) {
    localStorage.setItem("user", JSON.stringify(user));
    state.user.push(user);
  },
  SET_TOKEN(state, token) {
    localStorage.setItem("token", token);
    localStorage.setItem("login", true);
    state.login = true;
    state.token = token;
  },
  GET_USER(state, users) {
    state.dataUser = users;
  },
};
