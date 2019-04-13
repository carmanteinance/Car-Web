import http from "./BaseService";

const registerCar = car =>
  http.post("/my-cars/newCar", car)
    .then(response => response.data);

const listCar = () =>
  http.get("/my-cars")
    .then(res => Promise.resolve(res.data));

const listOneCar = (id) =>
  http.get(`/my-cars/${id}`)
    .then(res => Promise.resolve(res.data));

const addCar = car =>
  http.post("/my-cars/newCar ", car)
    .then(response => response.data);

const updateCar = (car) => {
  return http.put('/my-cars/edit/:id', car)
    .then(res => Promise.resolve(res.data));
}

const deleteCar = id =>
  http.delete(`/my-cars/delete/${id}`)
    .then(response => response.data);

export default {
  registerCar,
  listCar,
  listOneCar,
  addCar,
  updateCar,
  deleteCar
};
