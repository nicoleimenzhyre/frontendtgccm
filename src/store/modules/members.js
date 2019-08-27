import axios from 'axios'

const state = {
    members: [],
    tribeLeaders: []
}

const getters = {
    allMembers: (state) => state.members,
    allTribeLeaders: (state) => state.tribeLeaders
}

const actions = {
    //get
    async fetchMembers({ commit }) {
        const response = await axios.get('http://localhost:8000/api/snd',
        {
            headers: {
                Authorization: `Bearer ` + localStorage.token
            }
        })
        commit('setMembers', response.data)
    },
    async fetchTribeLeaders({ commit }) {
        const response = await axios.get('http://localhost:8000/api/members/tribe-leaders',
        {
            headers: {
                Authorization: `Bearer ` + localStorage.token
            }
        })
        commit('setTribeLeaders', response.data.data)
    },
    //post
    async postMember({ commit }, member) {
        const response = await axios.post(
            "http://localhost:8000/api/member/add-member",
            {
                'first_name': member.first_name,
                'middle_name': member.middle_name,
                'last_name': member.last_name,
                'gender': member.gender,
                'user_type': member.role_name,
            },
            {
                headers: {
                    Authorization: `Bearer ` + localStorage.token
                }
              }
        );
        commit('createMember', response.data);
    }
}

const mutations = {
    setMember: (state, allMembers) => (state.allMembers = allMembers),
    createMember: (state, addMember) => state.allMembers.unshift(addMember),
    setTribeLeaders: (state, tribeLeaders) => (state.tribeLeaders = tribeLeaders)
}

export default {
    state,
    getters,
    actions,
    mutations
}