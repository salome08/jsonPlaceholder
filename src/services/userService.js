import axios from 'axios'

const users = {
  getUsers: async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
  },
  getAlbums: async (userId) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
  },
  getPhotos: async (userId) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/photos`)
  }
}

export default users