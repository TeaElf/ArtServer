import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8082/'
})

const TOKEN_HEADER_KEY = 'X-AUTH-TOKEN'

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const authToken = window.localStorage.getItem('contactsapp_auth_token')

//axiosInstance.defaults.headers.common[TOKEN_HEADER_KEY] = authToken ? authToken.toString() : ''

axiosInstance.defaults.headers.common[TOKEN_HEADER_KEY] = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcnlhQGdtYWlsLmNvbSJ9.8TSGxnKoYlIhx-5c6GCWzv6c0g-yEw79nXqaVTYp0X_96T3WOI4k_0Oxry6LY5LS7cHIKLwOh_q7zgiqjLo8pA'

export default {
  ...axiosInstance,
  setAuthHeader (token) {
    this.defaults.headers.common[TOKEN_HEADER_KEY] = token ? token.toString() : ''
  }
}

