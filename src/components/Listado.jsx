import React from "react";
import PropTypes from "prop-types";
import Noticia from "./Noticia";

const Listado = ({ noticias }) => (
  <div className="row">
    {noticias.map((noticia) => (
      <Noticia noticia={noticia} key={noticia.url} />
    ))}
  </div>
);

Listado.propTypes = {
  noticias: PropTypes.array.isRequired,
};

export default Listado;
