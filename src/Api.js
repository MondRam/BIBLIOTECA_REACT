//  import React, { useEffect, useState } from 'react';
//  import axios from 'axios';

//  const Api = () => {
//    const [datos, setDatos] = useState([]);
//    const [cargando, setCargando] = useState(true);
//    const [error, setError] = useState(null);

//    useEffect(() => {
//      axios.get('/api/datos')
//        .then(response => {
//          setDatos(response.data);
//          setCargando(false);
//        })
//        .catch(error => {
//          setError(error);
//          setCargando(false);
//        });
//    }, []);

//    if (cargando) {
//      return <div>Cargando...</div>;
//    }

//    if (error) {
//      return <div>Error: {error.message}</div>;
//    }

//    return (
//      <div>
//        <h1>Datos de la API</h1>
//        <ul>
//          {datos.map(dato => (
//            <li key={dato._id}>{dato.nombre}</li>
//          ))}
//        </ul>
//      </div>
//    );
//  };

//  export default Api;

import React, { useEffect, useState } from 'react';

const Api = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/datos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDatos(data);
        setCargando(false);
      })
      .catch(error => {
        setError(error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <ul>
        {datos.map(dato => (
          <li key={dato._id}>{dato.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
