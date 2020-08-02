import Vue from "vue";

export default {
  actions: {
    deleteList({ commit }, id) {
      commit("DELETE", id);
    },
    onFormSubmit({ commit }, data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      commit("ADD_NEW_LIST", newObj);
    }
  },
  mutations: {
    DELETE(state, id) {
      Vue.delete(state.list, id);
    },
    ADD_NEW_LIST(state, newObj) {
      Vue.set(state.list, newObj.id, newObj);
    }
  },
  state: {
    list: {
      1: {
        type: "income",
        value: 100,
        comments: "Some comments",
        id: 1
      },
      2: {
        type: " outcome",
        value: -50,
        comments: "Some comments",
        id: 2
      }
    },
    formData: {
      type: "income",
      comments: "",
      value: 0
    }
  },
  getters: {
    totalList(state) {
      return Object.values(state.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
    list(state) {
      return state.list;
    }
  }
};
