import { AXIOS } from '@/http-common'

function sendData (path, paras) {
  AXIOS.post(path, paras)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default sendData
