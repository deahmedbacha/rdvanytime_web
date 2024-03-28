import "../Benefits/Benefits.css"
export const Benefits = () => {
  return (
    <>
      <section className="Benefits" id="benefits">
        <div className="Benefits-wrapper">
          <h2 className="Benefits-title">
            Pourquoi prendre rendez-vous sur
            <br />
            RDV
            <span className="Benefits-anim">anytime</span>
          </h2>
          <div className="Benefits-list">
            <div className="Benefits-item">
              <div className="Benefits-image">
                <img
                  className="Benefits-icon"
                  aria-hidden="true"
                  src="src/Components/Benefits/calendar-check.svg"
                  alt=""
                />
              </div>
              <p className="Benefits-desc">
                Retrouvez toutes les disponibilités de vos praticiens en un clin
                d’oeil.
              </p>
            </div>
            <div className="Benefits-item">
              <div className="Benefits-image">
                <img
                  className="Benefits-icon"
                  aria-hidden="true"
                  src="src/Components/Benefits/clock-check.svg"
                  alt=""
                />
              </div>
              <p className="Benefits-desc">
                Prenez vos rendez-vous n&apos;importe où, n&apos;importe quand,
                7j/7 et 24h/24.
              </p>
            </div>
            <div className="Benefits-item">
              <div className="Benefits-image">
                <img
                  className="Benefits-icon"
                  aria-hidden="true"
                  src="src/Components/Benefits/chat-unread.svg"
                  alt=""
                />
              </div>
              <p className="Benefits-desc">
                N’oubliez plus vos rendez-vous grâce à un SMS de rappel.
              </p>
            </div>
            <div className="Benefits-item">
              <div className="Benefits-image">
                <img
                  className="Benefits-icon"
                  aria-hidden="true"
                  src="src/Components/Benefits/settings.svg"
                  alt=""
                />
              </div>
              <p className="Benefits-desc">
                Gérez, déplacez ou annulez facilement vos rendez-vous.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Benefits;
