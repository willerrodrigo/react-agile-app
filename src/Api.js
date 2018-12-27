import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    loadReleases: () => api.get('releases'),
    loadReleaseById: (id) => api.get('releases/'+id),
    saveRelease: (NewRelease) => api.post('releases', NewRelease),
    deleteRelease: (id) => api.delete('releases/'+id)
}

export default apis