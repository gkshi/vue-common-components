export default {
  namespaced: true,
  state: () => ({
    ...({
      list: []
    })
  }),
  actions: {
    ...({
      show ({ commit, state }, id) {
        if (!id) {
          return
        }
        commit('LIST_UPDATE', [...state.list, id])
      },
      hide ({ commit, state, dispatch }, id) {
        if (!id) {
          return dispatch('hideAll')
        }
        commit('LIST_UPDATE', state.list.filter(i => i !== id))
      },
      hideLast ({ commit, state }) {
        commit('LIST_UPDATE', state.list.slice(0, -1))
      },
      hideAll ({ commit }) {
        commit('LIST_UPDATE', [])
      }
    })
  },
  mutations: {
    ...({
      LIST_UPDATE (state, list = []) {
        state.list = list
      }
    })
  }
}
