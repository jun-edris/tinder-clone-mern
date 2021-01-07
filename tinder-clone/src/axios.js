import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-full-stack-clone.herokuapp.com'
})

export default instance;