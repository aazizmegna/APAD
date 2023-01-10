import { useState } from "react";
import carousel from "../img/carousel-1.jpg";
import carouse2 from "../img/carousel-2.jpg";

function Carousel() {
  const [etat1, setEtat1] = useState("carousel-item active");
  const [etat2, setEtat2] = useState("carousel-item");

  const handelNexCarousel = () => {
    setEtat1("carousel-item");
    setEtat2("carousel-item active");
  };
  const handelPrevCarousel = () => {
    setEtat1("carousel-item active");
    setEtat2("carousel-item");
  };

  const descrip =
    "Depuis l'introduction des intrants chimiques (engrais et pesticides chimiques) dans l'agriculture, la pollution des sols est de plus en plus prononcée et ses impacts importants. Selon le rapport du Programme des Nations-Unies pour l'Environnement (PNUE) la principale source anthropique de contamination des sols sont les produits chimiques utilisés en agriculture. Ces produits chimiques, rejetés dans l'environnement vont contaminer les sols, les eaux et aussi les productions agricoles et alimentaires. cela est en partie a l'origine des maladies tels les cancers, les ulcères gastriques et biens d'autres.";

  const [showFullDescription, setFullDescription] = useState(false);

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  const description = showFullDescription ? descrip : descrip.slice(0, 177);

  const preamb =
    "Soucieux du manque de conscientisation qui sévit en milieu rural paysan et quelque fois dans le milieu urbain, des méthodes peu développées des pratiques agricoles utilisées, de la préservation des ressources naturelles, du désir de renforcement du niveau des compétences des agriculteurs en zone rurales et urbaines, conscient du bon nombre de paysans et agriculteurs exclus de l’innovation et de la recherche, Reconnaissant la capacité des agriculteurs et paysans à faire face à leur propre besoin de développement, Les jeunes Agronomes, Agriculteurs, cadres versés en Agriculture et d’autres...ont décidés à cet effet de créer l’association dénommée Association pour le Progrès de l’Agriculture durable (APAD) avec pour Slogan : TRAVAIL- RÉSULTAT -PROGRÈS.";
  const [showFullPreambule, setFullPreambule] = useState(false);

  const showFullPreambuleHandler = () => {
    setFullPreambule(!showFullPreambule);
  };

  const preambule = showFullPreambule ? preamb : preamb.slice(0, 177);

  return (
    <div className="container-fluid p-0">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className={etat1}>
            <img className="w-100" src={carousel} alt="Images" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
              <div className="text-start p-5 carou">
                <h3 className="text-white">Agriculture sans chimiques</h3>
                <h1 className="display-1 text-white mb-md-4">
                  Impacts des produits Chimiques
                </h1>
                <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                  Explorer
                </a>
                <a href="/" className="btn btn-secondary py-md-3 px-md-5">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className={etat2}>
            <img className="w-100" src={carouse2} alt="Image3" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
              <div className="text-start p-5 carou">
                <h3 className="text-white">Nos Formations</h3>
                <h1 className="display-1 text-white mb-md-4">
                  Découvrez nos formations
                </h1>
                <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                  Explorer
                </a>
                <a href="/" className="btn btn-secondary py-md-3 px-md-5">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
          onClick={handelPrevCarousel}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
          onClick={handelNexCarousel}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5 ban">
                <h3 className="text-white mb-3">
                  Impacts des produits Chimiques
                </h3>
                <p className="text-white">{description}</p>

                <span
                  className="text-white fw-bold"
                  onClick={showFullDescriptionHandler}
                >
                  Lire {showFullDescription ? "Moins" : "Plus"}
                  <i className="bi bi-arrow-right ms-2"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5 ban">
                <h3 className="text-white mb-3">Préambule</h3>
                <p className="text-white">{preambule}</p>

                <span
                  className="text-white fw-bold"
                  onClick={showFullPreambuleHandler}
                >
                  Lire {showFullPreambule ? "Moins" : "Plus"}
                  <i className="bi bi-arrow-right ms-2"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
