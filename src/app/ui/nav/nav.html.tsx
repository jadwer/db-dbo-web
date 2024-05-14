import React from 'react'

const Nav = () => {
  return (
    <nav
    className="offcanvas offcanvas-start"
    id="navMenu"
    aria-labelledby="navMenuLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="navMenuLabel">
        Karma Balance
      </h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <div>
        Administra tus niveles de karma Y... ¡¡NO PIERDAS NADA!!
      </div>

      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Me deben [0 CP]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Les debo [0 KP]</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Historial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Karma friends</a>
          </li>
          <li><hr /></li>
          <li className="nav-item">
            <a className="nav-link" href="#">Perfil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cerrar sesión</a>
          </li>
        </ul>
        </div>
    </div>
  </nav>  )
}

export default Nav