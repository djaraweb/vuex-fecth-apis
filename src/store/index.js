import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    arrayUsers: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
    ],
    arrayPosts: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ],
    arrayComments: []
  },
  getters: {
    getArrayUsers: (state) => state.arrayUsers,
    getArrayPosts: (state) => state.arrayPosts,
    getArrayComments: (state) => state.arrayComments,
    getLoading: (state) => state.loading
  },
  mutations: {
    setArrayUsers: (state, arrayUsersAction) =>
      (state.arrayUsers = arrayUsersAction),
    setArrayPosts: (state, arrayPostsAction) =>
      (state.arrayPosts = arrayPostsAction),
    setArrayComments: (state, arrayCommentsAction) =>
      (state.arrayComments = arrayCommentsAction)
  },
  actions: {
    async getApiUsers({ commit }) {
      this.state.loading = true;
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((rpta) => rpta.json())
        .then((data) => {
          commit("setArrayUsers", data);
        })
        .finally(() => (this.state.loading = false));
    },
    async getApiPosts({ commit }, userId) {
      this.state.loading = true;
      let url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
      await fetch(url)
        .then((rpta) => rpta.json())
        .then((data) => {
          commit("setArrayPosts", data);
        })
        .finally(() => (this.state.loading = false));
    },
    async getApiComments({ commit }, postId) {
      this.state.loading = true;
      let url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
      await fetch(url)
        .then((rpta) => rpta.json())
        .then((data) => {
          commit("setArrayComments", data);
        })
        .finally(() => (this.state.loading = false));
    }
  }
});
