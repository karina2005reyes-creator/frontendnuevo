import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [juegos, setJuegos] = useState([
    {
      id: 1,
      nombre: "God of War",
      plataforma: "PlayStation",
      genero: "Acción",
      horas: 40,
      imagen:
        "https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/06/24/6679985fd8978.jpeg",
    },
    {
      id: 2,
      nombre: "Zelda: Breath of the Wild",
      plataforma: "Switch",
      genero: "Aventura",
      horas: 65,
      imagen:
        "https://play-lh.googleusercontent.com/MTIX0FNwqAnlb2vsGBlSkblBi1wd9iCcFZD__veY4XU_ZtRNI1EAeL7g9TIvQxl1pOs=w240-h480-rw",
    },
  ]);

  const eliminarJuego = (id) => {
    setJuegos(juegos.filter((j) => j.id !== id));
  };

  return (
    <div>
      <header>
        <h1>drivers game's</h1>
        <nav>
          <button>Biblioteca</button>
          <button>Reseñas</button>
          <button>Estadísticas</button>
        </nav>
      </header>

      <main>
        <section id="biblioteca" className="activo">
          <h2>Mi Biblioteca de Juegos</h2>
          <div className="contenedor-juegos">
            {juegos.map((j) => (
              <div className="tarjeta-juego" key={j.id}>
                <img src={j.imagen} alt={j.nombre} />
                <h3>{j.nombre}</h3>
                <p>Plataforma: {j.plataforma}</p>
                <p>Género: {j.genero}</p>
                <p>Horas jugadas: {j.horas}</p>
                <button
                  className="btn-editar"
                  onClick={() => eliminarJuego(j.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <button className="btn-agregar">+ Agregar nuevo juego</button>
        </section>

        <section id="reseñas">
          <h2>Mis Reseñas</h2>
          <div className="lista-reseñas">
            <article>
              <h3>Driving school</h3>
              <p>⭐ 5/5</p>
              <p>Me gusta jugar mientras aprendo a conducir</p>
            </article>
            <article>
              <h3>Zelda: BOTW</h3>
              <p>⭐ 4.8/5</p>
              <p>Un mundo abierto espectacular.</p>
            </article>
          </div>
        </section>

        <section id="estadisticas">
          <h2>Car driving school simulator</h2>
          <div className="estadisticas">
            <div className="card">
              <h3>Total de Juegos</h3>
              <p>{juegos.length}</p>
            </div>
            <div className="card">
              <h3>Horas Totales</h3>
              <p>{juegos.reduce((acc, j) => acc + j.horas, 0)}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 GameTracker — Proyecto de Programación</p>
      </footer>
    </div>
  );
}
