import React from "react";

function Contact() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5 contactwidth">
          <h6 className="text-primary text-uppercase">Nous Contacter</h6>
          <h1 className="display-5">N'hésitez pas à nous contacter</h1>
        </div>
        <div className="row g-0">
          <div className="col-lg-7">
            <div className="bg-primary h-100 p-5">
              <form>
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4 contactheight"
                      placeholder="Nom"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4 contactheight"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4 contactheight"
                      placeholder="Sujet"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3 contactheight"
                      rows="2"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-secondary w-100 py-3 contactheight"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-secondary h-100 p-5">
              <h2 className="text-white mb-4">Entrer en contact</h2>
              <div className="d-flex mb-4">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center contacthw">
                  <i className="bi bi-geo-alt fs-4 text-white"></i>
                </div>
                <div className="ps-3">
                  <h5 className="text-white">Localisation</h5>
                  <span className="text-white">
                    Rue 1.544, Yaoundé, Cameroun
                  </span>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center contacthw">
                  <i className="bi bi-envelope-open fs-4 text-white"></i>
                </div>
                <div className="ps-3">
                  <h5 className="text-white">Email</h5>
                  <span className="text-white">issaalhamdulilla@gmail.com</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center contacthw">
                  <i className="bi bi-phone-vibrate fs-4 text-white"></i>
                </div>
                <div className="ps-3">
                  <h5 className="text-white">Appelez Nous</h5>
                  <span className="text-white">
                    694 56 99 51 / 698 28 87 29
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
