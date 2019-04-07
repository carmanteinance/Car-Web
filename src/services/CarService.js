import http from './BaseService';


const registerCar = car => http.post('/my-cars/newCar', car)
  .then(response => response.data)
  
const listCar = () => http.get('/my-cars')
  .then(res => Promise.resolve(res.data));

const listOneCar = () => http.get('/my-cars/:id')
  .then(res => Promise.resolve(res.data))
  .catch(error => console.log('doy error, sorry', error))

const addCar = car => http.post('/my-cars/newCar ',car)
  .then (response => response.data)

// const updateProfile = (user) => {
//   const data = new FormData();
//   Object.keys(user).forEach(prop => {
//     data.append(prop, user[prop]) //que es?
//   });
//   return http.put('/my-cars/edit/:id', data)
//     .then(res => Promise.resolve(res.data));
// }

const deleteCar = (car) => http.delete('/my-cars/delete/:id', car)
  .then(response => response.data);

export default {
  registerCar,
  listCar,
  listOneCar,
  addCar,
  //updateProfile,
  deleteCar
}