import axios from 'axios';

const api_url = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers:{
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export const fetchData = async (endpoints) => {
    try {
        const reponse = await api_url.get(endpoints);
        return reponse.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw error;
    }
}

export const postData = async (endpoint, data) => {
    try {
      const response = await api_url.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données:', error);
      throw error;
    }
};