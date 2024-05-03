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
            Une plateforme en ligne pour mieux gérer votre cabinet, travailler
            plus sereinement et gagnez en mobilité.
          </p>
          <section className="Section Section--horaire">
            <div className="Section-wrapper " style={{ paddingBottom: "0" }}>
              <div className="Section-content">
                <h3 className="Section-title">
                  Agenda en
                  <span className="Benefits-anim2"> ligne </span>
                </h3>
                <p className="Section-desc">
                  Gestion de vos consultations depuis votre smartphone et votre
                  plateforme web ergonomique.
                </p>
              </div>
            </div>
          </section>
          <section className="Pro Section Section--chezmoi Section--app-fr">
            <div className="Pro Section-wrapper" style={{ paddingBottom: "0" }}>
              <div className="Section-content">
                <h3 className="Section-title">
                  Gérer votre
                  <span className="Benefits-anim2"> cabinet</span>
                </h3>
                <p className="Section-desc">
                  La première solution qui vous offre la plateforme dans la
                  gestion de votre cabinet et qui vous informe en temps réel.
                </p>
              </div>
            </div>
          </section>
          <section className="Section Section--horaire">
            <div className="Pro Section-wrapper" style={{ paddingBottom: "0" }}>
              <div className="Section-content">
                <h3 className="Section-title">
                  Documents
                  <span className="Benefits-anim2"> médicaux</span>
                </h3>
                <p className="Section-desc">
                  Accès au profil médical de votre patient si renseigné et à la
                  gestion de ses documents médicaux.
                </p>
              </div>
            </div>
          </section>
          <section className="Section Section--chezmoi Section--app-fr">
            <div className="Pro Section-wrapper" style={{ paddingBottom: "0" }}>
              <div className="Section-content">
                <h3 className="Section-title">
                  Sécurisé des
                  <span className="Benefits-anim2"> données</span>
                </h3>
                <p className="Section-desc">
                  La confidentialité de vos informations personnelles est une
                  priorité absolue pour nous . Vos données sont en sécurité avec
                  nous , nos données sont chiffrées et stockées .
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
