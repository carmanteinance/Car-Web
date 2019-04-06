import http from './BaseService';


const register = user => http.post('/register-user', user)
  .then(response => response.data)


const authenticate = (user) => http.post('/login', user)
  .then(response => {
    console.log('esto es la response', response)
    return response.data
  })
  .catch(error => console.log('doy error, sorry', error));


const getProfile = () => http.get('/profile')
  .then(res => Promise.resolve(res.data));


const updateProfile = (user) => {
  const data = new FormData();
  Object.keys(user).forEach(prop => {
    if (prop === 'password' && user.password === '') return;
    data.append(prop, user[prop]) //que es?
  });
  return http.put('/profile', data)
    .then(res => Promise.resolve(res.data));
}

const logout = (user) => http.post('/logout')
  .then(response => response.data);

export default {
  authenticate,
  register,
  logout
}