import React from "react";
import aboutImg from "../img/1.jpg";

function About() {
  const text1 =
    "APAD vise le progrès de l’agriculture Durable et le renforcement du secteur privé et de la société civile agricole à travers une recherche motivée, efficace et engagée dans le combat de lutte contre la dégradation des ressources naturelles (sol, eau, air...).";
  return (
    <div className="container-fluid about pt-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
              <img
                className="img-fluid mt-auto mx-auto"
                src={aboutImg}
                alt="AboutImage"
              />
            </div>
          </div>
          <div className="col-lg-6 pb-5">
            <div className="mb-3 pb-2">
              <h6 className="text-primary text-uppercase">A Propos</h6>
              <h1 className="display-5">
                Nous trouvons des solutions a vos problemes agricoles
              </h1>
            </div>
            <p className="mb-4">{text1}</p>
            <div className="row gx-5 gy-4">
              <div className="col-sm-6">
                <i className="fa fa-seedling display-1 text-secondary"></i>
                <h4>Qui Sommes Nous?</h4>
                <p className="mb-0">
                  Association pour le progrès de l'Agriculture Durable, ancrée
                  dans le territoire, elle est composée de professionnels de
                  l’agriculture (agriculteurs, techniciens, Agronomes, cadres),
                  tous membres d’organisations paysannes Camerounaise
                </p>
              </div>
              <div className="col-sm-6">
                <i className="fa fa-award display-1 text-secondary"></i>
                <h4>Nos Experiences</h4>
                <p className="mb-0">
                  Ces femmes et ces hommes pour le Progrès de l'Agriculture
                  Durable s’appuient sur leurs expériences syndicales,
                  économiques et sociales pour qu’APAD poursuive ses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
