import axios from "axios"

const state = {
    rolesData: []
}

const getters = {
    allRolesData: (state) =>  state.rolesData
}

const actions = {
    async fetchRolesData({ commit }) {
        const response = await axios.get('http://localhost:8000/api/roles',
       {
        headers: {
            Authorization: `Bearer ` + localStorage.token
        }
       }
        );

     commit('setRolesData',response.data);
    },
    async postRoleData({ commit }, data) {
        // console.log(data.role_name)
        const response = await axios
        .post(
            "http://localhost:8000/api/roles/add-roles",{ 
              'role_name' : data.role_name,
              'description':data.description
             },
            {
              headers: {
                  Authorization: `Bearer ` + localStorage.token
              }
            }
            );

        commit('createRole', response.data);
    }
}

const mutations = {
    setRolesData: (state, rolesData) => (state.rolesData = rolesData),
    createRole: (state, roleData) => state.rolesData.unshift(roleData)
}

export default {
    state,
    getters,
    actions,
    mutations
}