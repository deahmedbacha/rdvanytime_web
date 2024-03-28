import "./Doctors.css";
export const Doctors = () => {
  return (
    <>
      <section className="Doctors">
        <div className="Doctors-wrapper">
          <h3 className="Doctors-title">
            Vous êtes un
            <span className="Benefits-anim"> professionnel de santé ?</span>
          </h3>
          <p className="Doctors-desc">
            Simplifiez votre quotidien et celui de vos collaborateurs grâce à
            RDVanytime! Le module RDVanytime de prise de rendez-vous en ligne,
            synchronisé avec votre logiciel de cabinet médical, vous permet de
            vous concentrer sur ce qui compte: votre patientèle.
          </p>
          <div className="Doctors-content">
            <ul className="Doctors-list">
              <li className="Doctors-item">
                <div className="Doctors-image">
                  <img
                    className="Doctors-icon"
                    aria-hidden="true"
                    src="src/Components/Doctors/chart.svg"
                    alt=""
                  />
                </div>
                <p className="Doctors-text">
                  Réduisez le nombre de rendez-vous non-honorés grâce aux
                  rappels SMS envoyés à vos patients avant leurs rendez-vous.
                </p>
              </li>
              <li className="Doctors-item">
                <div className="Doctors-image">
                  <img
                    className="Doctors-icon"
                    aria-hidden="true"
                    src="src/Components/Doctors/clock-plus.svg"
                    alt=""
                  />
                </div>
                <p className="Doctors-text">
                  Gagnez du temps administratif et simplifiez la gestion de
                  votre cabinet.
                </p>
              </li>
            </ul>
            <ul className="Doctors-list">
              <li className="Doctors-item">
                <div className="Doctors-image">
                  <img
                    className="Doctors-icon"
                    aria-hidden="true"
                    src="src/Components/Doctors/rocket.svg"
                    alt=""
                  />
                </div>
                <p className="Doctors-text">
                  Améliorez votre visibilité sur internet grâce au premier site
                  de prise de rendez-vous médicaux.
                </p>
              </li>
              <li className="Doctors-item">
                <div className="Doctors-image">
                  <img
                    className="Doctors-icon"
                    aria-hidden="true"
                    src="src/Components/Doctors/bubble.svg"
                    alt=""
                  />
                </div>
                <p className="Doctors-text">
                  Proposez la prise de rendez-vous en ligne: un service
                  essentiel que vos patients apprécient.
                </p>
              </li>
            </ul>
          </div>
          <div className="Doctors-buttons">
            <a className="Button Button--purpleLight rounded-3xl" href="">
              Demander une démonstration gratuite
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Doctors;
