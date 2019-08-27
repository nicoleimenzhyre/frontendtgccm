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
        .get("http://localhost:8000/api/members", {
          headers: {
            Authorization: `Bearer ` + localStorage.token
          }
        })
        commit('setUsers', response.data)
    },
    async updateUser({ commit }, data) {
        console.log(data)
        const response = await axios
        .post("http://localhost:8000/api/member/update-member", 
        {
            'id': data.id,
            'first_name': data.first_name,
            'last_name': data.last_name,
            'tribe_leader': data.tribe_leader,
            'cell_leader': data.cell_leader,
        },
        {
            headers: {
                Authorization: `Bearer ` + localStorage.token
            }
          }
        )
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