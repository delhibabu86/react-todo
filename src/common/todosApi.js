/**
 * Created by DVengamBhanumoorthy on 2/22/2018.
 */

const apiUrl = 'https://5a8b8dea3d92490012370c03.mockapi.io/api/v1/todos';

export default () =>  fetch(apiUrl, {
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  method: 'GET'
})
  .then(response => response.json());