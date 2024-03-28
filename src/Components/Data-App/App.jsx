export const App = () => {
  return (
    <>
      <section className="Section Section--app Section--app-fr">
        <div className="Section-wrapper">
          <div className="Section-content">
            <h3 className="Section-title">
              Découvrez l&apos;application RDVanytime
            </h3>
            <p className="Section-desc">
              Prenez rendez-vous n’importe où, n’importe quand. Téléchargez
              l’application RDVanytime et gérez votre santé depuis votre natel!
            </p>
            <div className="Section--app-download-container">
              <img
                className="Section-qrcode"
                width="133px"
                height="133px"
                src="src/Components/Data-App/Ma_galerie.png"
                alt=""
              />
              <p className="Section-legend">
                Scannez le QR code pour télécharger l’application
              </p>
              <div className="Section--app-download">
                <a href="" target="_blank" className="Section-badge">
                  <img
                    src="src/assets/app-store.svg"
                    alt="Téléchargez notre application sur l'App Store!"
                  />
                </a>
                <a href="" target="_blank" className="Section-badge">
                  <img
                    src="src/assets/play-store.svg"
                    alt="Téléchargez notre application sur le Google Play Store!"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
