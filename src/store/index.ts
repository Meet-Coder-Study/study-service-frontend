import { createStore } from "vuex";
import auth from "./modules/auth/index";

export default createStore({
  modules: {
    auth
  },
  state: {},
  mutations: {},
  actions: {}
});

// import { createStore } from "vuex";
// import auth from "./modules/auth/index";

// export const store = createStore({
//   modules: {
//     auth
//   },
//   state: {},
//   mutations: {},
//   actions: {}
//   // modules: {}
// });
