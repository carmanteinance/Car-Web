// import React from 'react'
// import { Route, Redirect } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthStore';

// const PrivateRoute = ({component: Component, ...rest}) => {
//   return (
//     <AuthContext.Consumer>
//       {( { isAuthenticated, user } ) => (
//       <Route {...rest} render={ (props) => {
//         if (isAuthenticated()) {
//           if (!rest.role || rest.role === user.role) {
//             return (<Component {...props} />);
//           } else {
//             return <Redirect to="/forbidden" />; 
//           }
//         }
//         return <Redirect to="/login" />; 
//       }}/>
//       )}
//     </AuthContext.Consumer>
//   );
// }

// export default PrivateRoute;