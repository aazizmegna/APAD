import React from "react";

function Services() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <h6 className="text-primary text-uppercase">Nos Services</h6>
              <h1 className="display-5">Les Services APAD</h1>
            </div>
            <p className="mb-4">
              Les principaux Services que nous offrons sont les suivants
            </p>
            <a href="/" className="btn btn-primary py-md-3 px-md-5">
              Nous Contacter
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light text-center p-5">
              <i className="fa fa-carrot display-1 text-primary mb-3"></i>
              <h4>Nos Formations</h4>
              <p className="mb-0">
                Nous offrons des formations en Apiculture, Myciculture, Culture
                légumière, Viennoiseries, Aviculture et Pisciculture et bien
                d'autres
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light text-center p-5">
              <i className="fa fa-apple-alt display-1 text-primary mb-3"></i>
              <h4>Fabrication des biopesticides et des composts</h4>
              <p className="mb-0"></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light text-center p-5">
              <i className="fa fa-seedling display-1 text-primary mb-3"></i>
              <h4>
                Transformation de la tomate en confiture et en tomate séchée
              </h4>
              <p className="mb-0"></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light text-center p-5">
              <i className="fa fa-seedling display-1 text-primary mb-3"></i>
              <h4>Transformation de la viande en saucisses et Merguez</h4>
              <p className="mb-0"></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light text-center p-5">
              <i className="fa fa-seedling display-1 text-primary mb-3"></i>
              <h4>Activation de la rhizogenèse des boutures des agrumes</h4>
              <p className="mb-0"></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light text-center p-5">
              <i className="fa fa-seedling display-1 text-primary mb-3"></i>
              <h4>Transformation de légumes et fruits</h4>
              <p className="mb-0">
                en produits fermentés, confitures et compotes, jus et nectars de
                fruits
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light text-center p-5">
              <i className="fa fa-seedling display-1 text-primary mb-3"></i>
              <h4>
                Renforcement des Capacités des cacao-culteur et des plants
                d'accompagnement
              </h4>
              <p className="mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
