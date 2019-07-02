import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 0e206f5679f0e571555f1e7d391ebe78b3e34f1ac375472bcf9008e9b39ea7ac'
  }
})