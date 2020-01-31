import axios from 'axios';

// export const axiosWithAuth = () => {
//     return axios.create({
        
//             baseURL: 'https://localhost:5000',
//             headers: {
//             Authorization: localStorage.getItem('token')
//                 }
//     })
// }




export function axiosWithAuth () {
  return axios.create({
    // config object
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
  ;
};




