import axios from '../../axios/request'
import store from '../index'

export default  {
    namespaced: true,
    state() {
        return {
            requests:[]
        }
    },
            mutations : {
            setRequests(state, requests) {
                state.requests = requests
            },
             addRequests(state, request){
                state.requests.push(request)
             }
        },
        actions: {
            async create({commit, dispatch}, payload) {
                try{
                    const token = store.getters['auth/token']
                   const {data} = await axios.post(`/requests.json?auth=${token}`, payload)
                    commit('addRequests', {...payload, id: data.name})
                    console.log(data)
                    dispatch('setMessage',{
                        value: 'Заявка успшно создана',
                        type: 'primary'
                    }, {root: true})
                }catch (e) {
                    dispatch('setMessage',{
                        value: e.message,
                        type: 'danger'
                    }, {root: true})
                }
            },
            async load({commit, dispatch})
            {
                try{
                    const token = store.getters['auth/token']
                    const {data} = await axios.get(`/requests.json?auth=${token}`)
                    const requests = Object.keys(data).map( id => ({...data[id],id}))
                    commit('setRequests',requests)
                    console.log(data)

                }catch (e) {
                    dispatch('setMessage',{
                        value: e.message,
                        type: 'danger'
                    }, {root: true})
                }
            },
            async loadById({commit, dispatch}, id)
            {
                try{
                    const token = store.getters['auth/token']
                    const {data} = await axios.get(`/requests/${id}.json?auth=${token}`)
                    return data

                }catch (e) {
                    dispatch('setMessage',{
                        value: e.message,
                        type: 'danger'
                    }, {root: true})
                }
            }
        },

    getters: {
        requests(state)
        {
            return state.requests
        }
    }

}