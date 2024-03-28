import "./Marche.css"
export const Marche = () => {
  return (
    <>
      <section className="Benefits" id="Marche">
        <div className="Benefits-wrapper">
          <h2 className="Benefits-title">
            Comment
            <span className="Benefits-anim"> ça marche ? </span>
          </h2>
          <p style={{ textAlign: "center", alignSelf: "center" }}>
            Choisissez un professionnel parmi plus de 124 spécialités
            disponibles en ligne tous les jours de 24h/24 et
            <br />
            7j/7 sur notre plateforme facile d&apos;accès et sécurisée.
          </p>
          <section className="Section Section--spécialité">
            <div className="Section-wrapper" style={{ paddingBottom: "0" }}>
              <div className="Section-content">
                <h3 className="Section-title">
                  Rechercher une
                  <span className="Benefits-anim2"> spécialité </span>
                </h3>
                <p className="Section-desc">
                  Saisissez la spécialité du docteur que vous cherchez et votre
                  localisation : choisissez parmi les nombreuses spécialités de
                  praticiens et professionnels de santé.
                </p>
              </div>
            </div>
          </section>
          <section className="Section Section--chezmoi Section--app-fr">
            <div className="Section-wrapper" style={{ paddingBottom: "0" }}>
              <div className="Section-content">
                <h3 className="Section-title">
                  Autour de
                  <span className="Benefits-anim2"> chez moi</span>
                </h3>
                <p className="Section-desc">
                  Renseignez votre adresse, ou proposez à la plateforme RDVanytime
                  de vous géolocaliser, pour accéder rapidement aux
                  disponibilités des médecins les plus proches de chez vous.
                </p>
              </div>
            </div>
          </section>
          <section className="Section Section--horaire">
            <div className="Section-wrapper" style={{ paddingBottom: "0" }}>
              <div className="Section-content">
                <h3 className="Section-title">
                  Choisir mon
                  <span className="Benefits-anim2"> horaire</span>
                </h3>
                <p className="Section-desc">
                  Choisissez le jour et l&apos;horaire qui vous conviennent le
                  mieux, en consultation physique. Vous recevez ensuite
                  un message de confirmation avec l&apos;adresse, l&apos;horaire
                  et le nom du praticien de votre choix.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Marche;
