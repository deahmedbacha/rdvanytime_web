import { Headpro } from "./Headpro";
import "./Modepro.css";
import { TypeAnimation } from "react-type-animation";
import ShowSpécialité from "./ShowSpécialité";
import Prqpro from "./Prqpro/Prqpro";
import Marche from "./Marche/Marche";
import { Footer } from "../Components/Footer/Footer";

function Modepro() {
  return (
    <>
      <Headpro />
      <div className="section__inner padding-none">
        <div className="hero-form-blue">
          <div className="hero-form-blue__inner container container--large">
            <div className="hero-form-blue__content">
              <div className="hero-illu-video__title">
                <h1 className="title title--xxxlarge title--doodle1">
                  La
                  <strong>
                    <em> nouvelle</em>
                  </strong>{" "}
                  génération de solutions pour les praticiens
                </h1>
              </div>
              <div className="hero-form-blue__subtitle-and-slider">
                <p className="title title--xlarge">
                  Équipez-vous de Doctolib Pro et
                </p>
                <div className="w-full font-bold">
                  <span
                    className="text-primary text-center border-solid border-primary border-e-4 home_writer__YUoPY"
                    id="writer"
                  >
                    <TypeAnimation
                      sequence={[
                        "renforcez la communication patient",
                        1000,
                        "gagnez du temps au quotidien",
                        1000,
                        "gagnez en confort de travail",
                        1000,
                      ]}
                      speed={50}
                      style={{ fontSize: "1.5em" }}
                      repeat={Infinity}
                    />
                  </span>
                </div>
              </div>
              <ul className="hero-form-blue__list">
                <li className="icon-text">
                  <svg
                    className="icon-text__icon"
                    fill="none"
                    height="16"
                    viewBox="0 0 32 16"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath id="a">
                      <path d="m0 0h32v16h-32z"></path>
                    </clipPath>
                    <g clipPath="url(#a)" fill="#012bb4">
                      <path d="m20.9684 8.43105c-4.9628 2.05265-10.286 3.29335-15.67372 3.35405-1.63908.0114-3.27816-.0986-4.886884-.4174-.3945932-.0796-.660185-.4477-.626037-.8499l.04553-.53493c.034147-.39459.356651-.70951.755039-.72848 3.354042-.15936 6.658762-.06071 9.997672-.40598 3.1036-.29215 6.2148-.82334 9.2046-1.73014l.6488-.17833.0379-.01138c.9676-.26939 1.4305 1.13825.4933 1.4987z"></path>
                      <path d="m16.5138.271664c.2467-.155562.6602.053118.9182.094854l.8803.223857c4.0483 1.028225 8.6393 2.200625 12.7977 3.300935.6754.17833.8992 1.02063.406 1.51767-3.5058 3.521-7.0117 7.07992-10.8969 10.17602-.368.2921-.8992.2504-1.2255-.0873l-.3149-.3301c-.2846-.2959-.296-.6488-.0911-.884 2.5194-2.914 5.3346-5.53953 8.1689-8.14613.3225-.29595.2049-.83472-.2125-.96752l-.4781-.15177c-2.4851-.81954-6.1389-2.02988-8.6165-2.84943l-.8613-.28456c-.019-.00759-.0379-.01518-.0569-.02277-.4515-.15556-.6905-.6488-.5578-1.107895z"></path>
                    </g>
                  </svg>
                  <p className="paragraph icon-text__text paragraph--bold">
                    Profitez d’un agenda sur mesure
                  </p>
                </li>
                <li className="icon-text">
                  <svg
                    className="icon-text__icon"
                    fill="none"
                    height="16"
                    viewBox="0 0 32 16"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath id="a">
                      <path d="m0 0h32v16h-32z"></path>
                    </clipPath>
                    <g clipPath="url(#a)" fill="#012bb4">
                      <path d="m20.9684 8.43105c-4.9628 2.05265-10.286 3.29335-15.67372 3.35405-1.63908.0114-3.27816-.0986-4.886884-.4174-.3945932-.0796-.660185-.4477-.626037-.8499l.04553-.53493c.034147-.39459.356651-.70951.755039-.72848 3.354042-.15936 6.658762-.06071 9.997672-.40598 3.1036-.29215 6.2148-.82334 9.2046-1.73014l.6488-.17833.0379-.01138c.9676-.26939 1.4305 1.13825.4933 1.4987z"></path>
                      <path d="m16.5138.271664c.2467-.155562.6602.053118.9182.094854l.8803.223857c4.0483 1.028225 8.6393 2.200625 12.7977 3.300935.6754.17833.8992 1.02063.406 1.51767-3.5058 3.521-7.0117 7.07992-10.8969 10.17602-.368.2921-.8992.2504-1.2255-.0873l-.3149-.3301c-.2846-.2959-.296-.6488-.0911-.884 2.5194-2.914 5.3346-5.53953 8.1689-8.14613.3225-.29595.2049-.83472-.2125-.96752l-.4781-.15177c-2.4851-.81954-6.1389-2.02988-8.6165-2.84943l-.8613-.28456c-.019-.00759-.0379-.01518-.0569-.02277-.4515-.15556-.6905-.6488-.5578-1.107895z"></path>
                    </g>
                  </svg>
                  <p className="paragraph icon-text__text paragraph--bold">
                    Pas de double-saisie grâce à plus de 30 synchronisations
                  </p>
                </li>
                <li className="icon-text">
                  <svg
                    className="icon-text__icon"
                    fill="none"
                    height="16"
                    viewBox="0 0 32 16"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath id="a">
                      <path d="m0 0h32v16h-32z"></path>
                    </clipPath>
                    <g clipPath="url(#a)" fill="#012bb4">
                      <path d="m20.9684 8.43105c-4.9628 2.05265-10.286 3.29335-15.67372 3.35405-1.63908.0114-3.27816-.0986-4.886884-.4174-.3945932-.0796-.660185-.4477-.626037-.8499l.04553-.53493c.034147-.39459.356651-.70951.755039-.72848 3.354042-.15936 6.658762-.06071 9.997672-.40598 3.1036-.29215 6.2148-.82334 9.2046-1.73014l.6488-.17833.0379-.01138c.9676-.26939 1.4305 1.13825.4933 1.4987z"></path>
                      <path d="m16.5138.271664c.2467-.155562.6602.053118.9182.094854l.8803.223857c4.0483 1.028225 8.6393 2.200625 12.7977 3.300935.6754.17833.8992 1.02063.406 1.51767-3.5058 3.521-7.0117 7.07992-10.8969 10.17602-.368.2921-.8992.2504-1.2255-.0873l-.3149-.3301c-.2846-.2959-.296-.6488-.0911-.884 2.5194-2.914 5.3346-5.53953 8.1689-8.14613.3225-.29595.2049-.83472-.2125-.96752l-.4781-.15177c-2.4851-.81954-6.1389-2.02988-8.6165-2.84943l-.8613-.28456c-.019-.00759-.0379-.01518-.0569-.02277-.4515-.15556-.6905-.6488-.5578-1.107895z"></path>
                    </g>
                  </svg>
                  <p className="paragraph icon-text__text paragraph--bold">
                    Permettez à vos patients d’être autonomes 24/7
                  </p>
                </li>
                <li className="icon-text">
                  <svg
                    className="icon-text__icon"
                    fill="none"
                    height="16"
                    viewBox="0 0 32 16"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath id="a">
                      <path d="m0 0h32v16h-32z"></path>
                    </clipPath>
                    <g clipPath="url(#a)" fill="#012bb4">
                      <path d="m20.9684 8.43105c-4.9628 2.05265-10.286 3.29335-15.67372 3.35405-1.63908.0114-3.27816-.0986-4.886884-.4174-.3945932-.0796-.660185-.4477-.626037-.8499l.04553-.53493c.034147-.39459.356651-.70951.755039-.72848 3.354042-.15936 6.658762-.06071 9.997672-.40598 3.1036-.29215 6.2148-.82334 9.2046-1.73014l.6488-.17833.0379-.01138c.9676-.26939 1.4305 1.13825.4933 1.4987z"></path>
                      <path d="m16.5138.271664c.2467-.155562.6602.053118.9182.094854l.8803.223857c4.0483 1.028225 8.6393 2.200625 12.7977 3.300935.6754.17833.8992 1.02063.406 1.51767-3.5058 3.521-7.0117 7.07992-10.8969 10.17602-.368.2921-.8992.2504-1.2255-.0873l-.3149-.3301c-.2846-.2959-.296-.6488-.0911-.884 2.5194-2.914 5.3346-5.53953 8.1689-8.14613.3225-.29595.2049-.83472-.2125-.96752l-.4781-.15177c-2.4851-.81954-6.1389-2.02988-8.6165-2.84943l-.8613-.28456c-.019-.00759-.0379-.01518-.0569-.02277-.4515-.15556-.6905-.6488-.5578-1.107895z"></path>
                    </g>
                  </svg>
                  <p className="paragraph icon-text__text paragraph--bold">
                    Gagnez le temps de secrétariat téléphonique
                  </p>
                </li>
                <li className="icon-text">
                  <svg
                    className="icon-text__icon"
                    fill="none"
                    height="16"
                    viewBox="0 0 32 16"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath id="a">
                      <path d="m0 0h32v16h-32z"></path>
                    </clipPath>
                    <g clipPath="url(#a)" fill="#012bb4">
                      <path d="m20.9684 8.43105c-4.9628 2.05265-10.286 3.29335-15.67372 3.35405-1.63908.0114-3.27816-.0986-4.886884-.4174-.3945932-.0796-.660185-.4477-.626037-.8499l.04553-.53493c.034147-.39459.356651-.70951.755039-.72848 3.354042-.15936 6.658762-.06071 9.997672-.40598 3.1036-.29215 6.2148-.82334 9.2046-1.73014l.6488-.17833.0379-.01138c.9676-.26939 1.4305 1.13825.4933 1.4987z"></path>
                      <path d="m16.5138.271664c.2467-.155562.6602.053118.9182.094854l.8803.223857c4.0483 1.028225 8.6393 2.200625 12.7977 3.300935.6754.17833.8992 1.02063.406 1.51767-3.5058 3.521-7.0117 7.07992-10.8969 10.17602-.368.2921-.8992.2504-1.2255-.0873l-.3149-.3301c-.2846-.2959-.296-.6488-.0911-.884 2.5194-2.914 5.3346-5.53953 8.1689-8.14613.3225-.29595.2049-.83472-.2125-.96752l-.4781-.15177c-2.4851-.81954-6.1389-2.02988-8.6165-2.84943l-.8613-.28456c-.019-.00759-.0379-.01518-.0569-.02277-.4515-.15556-.6905-.6488-.5578-1.107895z"></path>
                    </g>
                  </svg>
                  <p className="paragraph icon-text__text paragraph--bold">
                    Réduisez les rendez-vous non-honoré
                  </p>
                </li>
              </ul>
            </div>
            <div className="hero-form-blue__form">
              <div className="hero-form-blue__shape hero-form-blue__shape-water-500">
                <svg
                  width="428"
                  height="520"
                  fill="#012bb4"
                  className="shape"
                  viewBox="0 0 448 544"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="m224.051.968819c79.066-9.550369 151.587 53.083981 196.505 118.388181 38.582 56.093 27.845 127.728 19.118 195.098-7.276 56.176-24.98 109.225-63.901 150.635-40.478 43.067-92.454 81.477-151.722 78.776-85.708-3.907-219.40107-145.439-223.878591-229.411-3.096849-58.079 36.117691-105.331 70.000391-152.775 44.7632-62.6808 77.0522-151.4315 153.8782-160.711181z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hero-form-blue__shape hero-form-blue__shape-sky-400">
                <svg
                  width="392"
                  height="270"
                  fill="#012bb4"
                  className="shape"
                  viewBox="0 0 616 424"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M346.751 0.924061C101.721 21.2292 -62.6792 323.915 22.9113 410.013C93.3574 475.945 210.228 287.108 352.3 292.075C472.816 296.289 566.865 360.982 608.568 242.675C650.27 124.367 510.143 -12.5729 346.751 0.924061Z"></path>
                </svg>
              </div>
              <div className="hero-form-blue__shape hero-form-blue__shape-sun-400">
                <svg
                  width="114"
                  height="116"
                  fill="#bfe7e1"
                  className="shape"
                  viewBox="0 0 440 448"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M278.043 1.30155C366.202 9.3044 406.645 102.305 430.379 188.067C450.235 259.813 441.465 337.569 384.156 384.732C314.572 441.998 219.715 472.028 143.364 424.272C48.0929 364.681 -25.7055 257.229 8.51048 149.771C43.0492 41.2987 165.249 -8.93756 278.043 1.30155Z"
                  ></path>
                </svg>
              </div>
              <div className="hero-form-blue__form-inside">
                <div className="hero-form-blue__form-content">
                  <div className="form-wrapper">
                    <div id="contact-form">
                      <form
                        id="form-contact-us"
                        className="flex flex-col w-full"
                        method="POST"
                      >
                        <div className="flex flex-col items-center justify-center w-full mb-5">
                          <div className="font-extrabold text-3xl mb-3 text-center text-gray-700">
                            Vous êtes praticien ?
                          </div>
                          <div className="font-normal text-base mb-4 text-center text-gray-400">
                            Remplissez ce formulaire, et nous vous contactera
                            dans les plus brefs délais.
                          </div>
                        </div>
                        <div className="grid grid-rows-2 gap-x-3 w-full md:grid-cols-2 md:grid-rows-none">
                          <div className="w-full mb-3">
                            <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                              <input
                                style={{
                                  backgroundColor:
                                    "rgba(245, 245, 245, var(--tw-bg-opacity))",
                                }}
                                placeholder="Prénom"
                                className="text-base font-normal h-9 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                type="text"
                                name="firstName"
                                id="firstName"
                              />
                            </div>
                          </div>
                          <div className="w-full mb-3">
                            <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                              <input
                                placeholder="Nom"
                                style={{
                                  backgroundColor:
                                    "rgba(245, 245, 245, var(--tw-bg-opacity))",
                                }}
                                className="text-base font-normal h-9 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                type="text"
                                name="lastName"
                                id="lastName"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3 w-full">
                          <div className="rounded-full text-base px-5 py-1 bg-p-night react-tel-input">
                            <input
                              className="rounded-full h-9 text-base font-normal bg-p-night outline-none border-none w-full rtl:text-right ltr:text-left form-control"
                              style={{
                                backgroundColor:
                                  "rgba(245, 245, 245, var(--tw-bg-opacity))",
                                unicodeBidi: "plaintext",
                              }}
                              placeholder="Numéro de téléphone"
                              type="tel"
                            />
                            <div className="flag-dropdown">
                              <div
                                className="selected-flag"
                                title="Algeria: + 213"
                                tabIndex="-1"
                                role="button"
                                aria-haspopup="listbox"
                              >
                                <div className="flag dz"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3 w-full">
                          <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                            <input
                              placeholder="Email"
                              className="text-base font-normal h-9 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                              type="text"
                              style={{
                                backgroundColor:
                                  "rgba(245, 245, 245, var(--tw-bg-opacity))",
                              }}
                              name="email"
                              id="email"
                            />
                          </div>
                        </div>
                        <ShowSpécialité></ShowSpécialité>
                        <div className="w-full flex items-center justify-center">
                          <button
                            type="submit"
                            className="rounded-full bg-primary hover:bg-primary-bold text-center text-white font-bold flex items-center justify-center h-12 px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-gray-500 disabled:select-none disabled:pointer-events-none group py-3"
                            style={{ backgroundColor: "#012bb4" }}
                          >
                            <div className="me-2">Envoyer</div>
                            <svg
                              className="fill-current text-white group-disabled:text-gray-500 rtl:transform rtl:-rotate-180"
                              width="1.4em"
                              height="1.4em"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"></path>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Prqpro />
      <Marche />
      <Footer />
    </>
  );
}

export default Modepro;
