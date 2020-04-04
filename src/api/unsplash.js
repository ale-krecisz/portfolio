import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
            'Client-ID 82aa8e9f3a8de6761455339658c86eaf65c8973aa1f14a2e9c9b3ff79cbab21c'
  }
    
});