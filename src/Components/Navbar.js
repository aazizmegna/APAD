import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex d-lg-none">
          <h1 className="m-0 display-4 text-secondary">
            <span className="text-white">AP</span>AD
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav py-0">
            <a href="index.html" className="nav-item nav-link active">
              Accueil
            </a>
            <a href="about.html" className="nav-item nav-link">
              A propos
            </a>
            <a href="service.html" className="nav-item nav-link">
              Nos Services
            </a>
            <a href="product.html" className="nav-item nav-link">
              Notre équipe
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Nous Contacter
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
