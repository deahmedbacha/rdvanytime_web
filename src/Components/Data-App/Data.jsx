import "./Data-App.css";
export const Data = () => {
  return (
    <>
      <section className="Section Section--data">
        <div className="Section-wrapper">
          <div className="Section-content">
            <h3 className="Section-title">Protection des données</h3>
            <p className="Section-desc">
              La confidentialité de vos informations personnelles est une
              priorité absolue pour nous . Vos données sont en sécurité avec
              nous , nos données sont chiffrées et stockées .
            </p>
            <a className="Section-button Button rounded-3xl" href="">
              Lire notre politique de confidentialité
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Data;
