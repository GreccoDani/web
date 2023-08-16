// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';
// import Contacto from './Componentes/Contacto.jsx';
// import Error404 from './Componentes/Error404.jsx';

// const routes = [
//   {
//     path: '/',
//     element:  <App />  ,
//     errorElement: <Error404 />,
//   },
//   {
//     path: '/contacto',
//     element: <Contacto />
    
//   },
 
// ];

// const router = createBrowserRouter(routes);

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/contacto">Contacto</Link>
//           </li>
//           {/* Agregar más elementos de navegación si es necesario */}
//         </ul>
//       </nav>
//       <Route path="/" element={<App />} />
//     </RouterProvider>
//   </React.StrictMode>,
//   document.getElementById('root')



// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// )


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';
 
// import Error404 from './Componentes/Error404.jsx';

// const routes = [
//   {
//         path: '/',
//         element:  <App />  ,
//         errorElement: <Error404 />,
//       },
 
// ];

// const router = createBrowserRouter(routes);

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/contacto">Contacto</Link>
//           </li>
//           {/* Agregar más elementos de navegación si es necesario */}
//         </ul>
//       </nav>
//       <Route path="/" element={<App />} />
//     </RouterProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Error404 from './Componentes/Error404.jsx';

const routes = [
  {
    path: '/',
    element:  <App />  ,
    errorElement: <Error404 />,
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <nav>
        <ul>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          {/* Agregar más elementos de navegación si es necesario */}
        </ul>
      </nav>
      <Route path="/" element={<App />} />
    </RouterProvider>
  </React.StrictMode>
);
