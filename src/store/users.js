import axios from "axios";

const defaultUser = {
  id: 123,
  name: "guillaume",
  lastname: "amg",
  email: "gui@ohm.com"
};



const userStore = {
  namespaced: true,
  state: {
    currentUser: defaultUser,
      allUsers: []
  },
  getters: {
    current(state) {
      return state.currentUser;
    },
    all(state) {
      return state.allUsers;
    }
  },
  mutations: {
    setUsers(state, users) {
        state.allUsers = users;
    }
  },
  actions: {
    register(ctx, user) {
      axios
        .post("/users", user)
        .then(res => {
          console.log("response server", res);
        })
        .catch(err => {
          console.error("error server", err);
        });
    },
    login(ctx) {},
    logout(ctx) {},
    getAll(ctx) {
      axios
        .get("/admin")
        .then(res => {
          console.log("good", res.data);
        //   ctx.commit("setUsers", res.data);
        })
        .catch(err => {
          console.error("baaad", err);
        });
    },
    updateUser(ctx) {},
    deleteUser(ctx) {}
  }
};

export default userStore;