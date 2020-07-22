const DEFAULT_NOTIFICATION = {
  type: 'default',
  content: ''
}

export default {
  namespaced: true,
  state: () => ({
    ...({
      list: []
    })
  }),
  actions: {
    ...({
      show ({ commit, state }, data) {
        // sanitize data at first
        typeof data === 'object'
          ? data = { ...DEFAULT_NOTIFICATION, ...data }
          : data = { ...DEFAULT_NOTIFICATION, ...{ content: data } }

        // generate notification id
        data.id = data.id || Math.random().toFixed(7).slice(2)

        commit('LIST_UPDATE', [...state.list, data])
      },
      hide ({ commit, state, dispatch }, id) {
        if (!id) {
          return dispatch('hideAll')
        }
        commit('LIST_UPDATE', state.list.filter(i => i.id !== id))
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
  },
  getters: {
    notification: state => id => state.list.find(i => i.id === id)
  }
}
