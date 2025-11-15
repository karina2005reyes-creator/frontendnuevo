import axios from 'axios';

const API_URL = 'http://localhost:3000/api/juegos';


export const obtenerJuegos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};


export const agregarJuego = async (nuevoJuego) => {
  const res = await axios.post(API_URL, nuevoJuego);
  return res.data;
};


export const eliminarJuego = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};


export const editarJuego = async (id, datosActualizados) => {
  const res = await axios.put(`${API_URL}/${id}`, datosActualizados);
  return res.data;
};

