import axios from 'axios'

const state = {
    usersData: []
}

const getters = {
    allUsers: (state) => state.usersData
}

const actions = {
    async fetchUsers({ commit }) {
        const response = await axios
        .get("http://localhost:8000/api/users", {
          headers: {
            Authorization: `Bearer ` + localStorage.token
          }
        })

        commit('setUsers', response.data)
    }
}

const mutations = {
    setUsers: (state, usersData) => (state.usersData = usersData)
}

export default {
    state,
    getters,
    actions,
    mutations
}