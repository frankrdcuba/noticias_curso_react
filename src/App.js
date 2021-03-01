import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";

import Header from "./components/Header";
import Listado from "./components/Listado";

function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=5fea4513e84741928e38590bb4352d97`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    };
    getApi();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <Listado noticias={noticias} />
      </div>
    </>
  );
}

export default App;
