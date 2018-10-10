import axios from 'axios'

const instance = axios.create({
  baseURL:"https://wd2323984238ivjjvi.wilddogio.com/"
})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance
