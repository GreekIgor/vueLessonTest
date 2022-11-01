
import axios from 'axios'
import {error} from '../../utils/error'
const TOKEN_KEY = 'jwt-token'

export default  {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state, token)
        {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state)
        {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    actions: {
        async login({commit}, payload){
            try{

            } catch (e)
            {
                console.log(error(e.response.data.error.message))
            }
            const API_KEY = process.env.VUE_APP_KEY
          const {data} =  await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
              {...payload,returnSecureToken: true})
        commit('setToken', data.idToken)
        }
    },
    getters: {
        token(state){
            return state.token
        },
        isAuthenticated(_, getters)
        {
            return !!getters.token // использует двоиное отрицание чтобы привести к boolean
        }
    }
}