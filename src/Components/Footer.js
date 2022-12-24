import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-footer bg-primary text-white mt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <h4 className="text-white mb-4">Entrer en contact</h4>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-white me-2"></i>
                    <p className="text-white mb-0">
                      Rue 1.544, Yaoundé, Cameroun
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-white me-2"></i>
                    <p className="text-white mb-0">
                      issaalhamdulilla@gmail.com
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-white me-2"></i>
                    <p className="text-white mb-0">
                      694 56 99 51 / 698 28 87 29
                    </p>
                  </div>
                  <div className="d-flex mt-4">
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle"
                      href="/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-white mb-4">Liens rapides</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Accueil
                    </a>
                    <a className="text-white mb-2" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>A
                      Propos Us
                    </a>
                    <a className="text-white mb-2" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>Nos
                      Services
                    </a>
                    <a className="text-white" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Nous Contacter
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-white mb-4">Liens Populaires</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Accueil
                    </a>
                    <a className="text-white mb-2" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>A
                      Propos Us
                    </a>
                    <a className="text-white mb-2" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>Nos
                      Services
                    </a>
                    <a className="text-white" href="/">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Nous Contacter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-n5">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                <h4 className="text-white">Newsletter</h4>
                <h6 className="text-white">Abonnez-vous à notre newsletter</h6>
                <p></p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-white p-3"
                      placeholder="Email"
                    />
                    <button className="btn btn-primary">S'inscrire</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            &copy;{" "}
            <a className="text-secondary fw-bold" href="/">
              APAD
            </a>
            . Tous les droits sont réservés. Designed by{" "}
            <a
              className="text-secondary fw-bold"
              href="https://abdelkamo-4e116.web.app/"
            >
              Abdel Aziz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
