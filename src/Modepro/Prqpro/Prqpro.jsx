export const Prqpro = () => {
  return (
    <>
      <section className="Benefits" id="PrqPro">
        <div className="Benefits-wrapper" style={{ paddingTop: "0",paddingBottom:"0" }}>
          <h2 className="Benefits-title">
            Pourquoi choisir RDV
            <span className="Benefits-anim">anytime Pro</span>
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
                Accédez à votre agenda et Permettez à vos patients une prise de
                RDV à tout moment.
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
                Optimisez votre temps avec une gestion connectée et offrez une
                meilleure prise en charge à vos patients
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
                Envoie automatique des rappels de RDV à vos patients grâce à un
                SMS.
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
                RDVanytime fournit aux professionnels comme aux patients des
                technologies faciles à utiliser.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Prqpro;
