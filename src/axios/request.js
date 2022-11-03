import axios from 'axios'
import router from '../router'

const requestAxios = axios.create({
    baseURL: 'https://testvueminin-default-rtdb.europe-west1.firebasedatabase.app/' //process.env.VUE_APP_FB_URL
})

// Add a response interceptor
requestAxios.interceptors.response.use(null, error => {
    if (error.response.status === 401)
    {
        router.push('/auth?message=auth')
    }
    return Promise.reject(error);
});

export default requestAxios