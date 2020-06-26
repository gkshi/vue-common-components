export default {
  namespaced: true,
  state: () => ({
    ...({
      inited: false,
      list: []
    })
  }),
  actions: {
    ...({
      open ({ commit, state }, id) {
        if (!id) {
          return
        }
        commit('LIST_UPDATE', [...state.list, id])
      },
      close ({ commit, state, dispatch }, id) {
        if (!id) {
          return dispatch('closeAll')
        }
        commit('LIST_UPDATE', state.list.filter(i => i !== id))
      },
      closeLast ({ commit, state }) {
        commit('LIST_UPDATE', state.list.slice(0, -1))
      },
      closeAll ({ commit }) {
        commit('LIST_UPDATE', [])
      }
    })
  },
  mutations: {
    ...({
      INIT_UDPATE (state, value = false) {
        state.inited = value
      },
      LIST_UPDATE (state, list = []) {
        state.list = list
      }
    })
  }
}
