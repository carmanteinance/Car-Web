import http from './BaseService';


const register = user => http.post('/register-user', user)
  .then(response => response.data)


const authenticate = (user) => http.post('/login', user)
  .then(response => {
    return response.data
  });

  
const getProfile = () => http.get('/my-profile')
  .then(res => Promise.resolve(res.data));


const updateProfile = (user) => {
  return http.put('/profile', user)
    .then(res => Promise.resolve(res.data));
}

const logout = () => http.get('/logout')
  .then(response => response.data);

export default {
  authenticate,
  register,
  getProfile,
  updateProfile,
  logout
}