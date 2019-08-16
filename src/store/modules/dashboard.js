import axios from "axios"

const state = {
    dashboardData: []
}

const getters = {
    allDashboardData: (state) =>  state.dashboardData
}

const actions = {
    async fetchDashboardData({ commit }) {
     const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

     commit('setDashboardData',response.data);
    }
}

const mutations = {
    setDashboardData: (state, dashboardData) => (state.dashboardData = dashboardData)
}

export default {
    state,
    getters,
    actions,
    mutations
}