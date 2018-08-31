import http from '@/service/http'

export default {
  createNewAlbum (createAlbumDto, cb, errorCb) {
    http.post('/user/createAlbum', createAlbumDto)
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  }
}