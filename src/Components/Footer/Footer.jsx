import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-screen bg-white">
          <div className="w-full py-24 grid grid-flow-row md:grid-flow-col px-6 gap-y-20 gap-x-12">
            <div className="flex flex-col flex-nowrap items-center md:items-start px-5">
              <a className="mb-3" href="">
                <img
                  src={logo}
                  width="124"
                  height="56"
                  className="lg:w-52 max-w-[124px]"
                  loading="eager"
                  alt="RDVanytime"
                />
              </a>
              <div className="font-normal text-base text-gray-600 text-center md:rtl:text-right md:ltr:text-left w-full max-w-xs">
                Ensemble, pour un meilleur parcours santé
              </div>
            </div>
            <div className="flex flex-col flex-nowrap items-center md:items-start">
              <div className="font-bold text-base mb-5">Notre entreprise</div>
              <div className="flex flex-col flex-nowrap items-center md:items-start">
                <a
                  className="font-normal text-base text-gray-700 mb-2 text-center"
                  href=""
                >
                  Mode pro
                </a>
                <a
                  className="font-normal text-base text-gray-700 mb-2 text-center"
                  href=""
                >
                  À propos
                </a>
                <a
                  className="font-normal text-base text-gray-700 mb-2 text-center"
                  href=""
                >
                  Rejoignez-nous
                </a>
                <a
                  className="font-normal text-base text-gray-700 mb-2 text-center"
                  href=""
                >
                  Une question ?
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col flex-nowrap items-center md:items-start w-full">
                <div className="font-bold text-base mb-5">Nous suivre</div>
                <div className="grid grid-flow-col auto-cols-max gap-3 md:items-start">
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <svg width="1em" height="1em" viewBox="0 0 32 32">
                      <path
                        d="M19.254 2C15.312 2 13 4.082 13 8.826V13H8v5h5v12h5V18h4l1-5h-5V9.672C18 7.885 18.583 7 20.26 7H23V2.205C22.526 2.141 21.145 2 19.254 2z"
                        className="fill-current text-gray-700"
                      ></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <svg width="1em" height="1em" viewBox="0 0 24 24">
                      <g transform="translate(2 2)">
                        <path
                          d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"
                          className="fill-current text-gray-700"
                        ></path>
                        <path
                          d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164a5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31a3.155 3.155 0 0 1 0 6.31z"
                          className="fill-current text-gray-700"
                        ></path>
                        <circle
                          cx="15.156"
                          cy="4.858"
                          r="1.237"
                          className="fill-current text-gray-700"
                        ></circle>
                      </g>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <svg width="1em" height="1em" viewBox="0 0 32 32">
                      <path
                        d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"
                        className="fill-current text-gray-700"
                      ></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <svg width="1em" height="1em" viewBox="0 0 16 16">
                      <g className="fill-current text-gray-700">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                      </g>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="">
                    <svg width="1em" height="1em" viewBox="0 0 24 24">
                      <g fill="none">
                        <g clipPath="url(#IconifyId-17a5c6fc4a3-3b84d6-79)">
                          <path
                            d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27a3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47a3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494c.137.479.404.916.775 1.269c.371.353.833.608 1.341.743c1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47a3.05 3.05 0 0 0 1.338-.742c.37-.353.633-.792.765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517zM9.602 15.424V8.577l6.26 3.424l-6.26 3.423z"
                            className="fill-current text-gray-700"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="IconifyId-17a5c6fc4a3-3b84d6-79">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col flex-nowrap items-center md:items-start mt-10 w-full">
                <div className="font-bold text-base mb-2">Contact</div>
                <div className="flex flex-col flex-nowrap gap-1 items-center md:items-start">
                  <a
                    href="mailto:RDVanytime@gmail.com"
                    className="font-normal text-base text-start text-gray-500 !font-main"
                    style={{ unicodeBidi: "plaintext" }}
                  >
                    RDVanytime@gmail.com
                  </a>
                  <a
                    href="tel:+213 664 18 93 25"
                    className="font-normal text-base text-start text-gray-500 !font-main"
                    style={{ unicodeBidi: "plaintext" }}
                  >
                    +213 664 18 93 25
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-nowrap items-center">
              <div className="font-bold text-center md:rtl:text-right md:ltr:text-left text-base mb-5 w-full">
                Télécharger l&apos;application
              </div>
              <div className="grid grid-flow-col auto-cols-max gap-3 items-center justify-center md:items-start md:justify-start w-full">
                <a
                  href=""
                  className="w-max"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hidden lg:flex">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
                        />
                      </span>
                      <img
                        alt="app-store"
                        src="src/assets/app-store.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "medium",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                  </div>
                  <div className=" w-12 h-12 displayicon">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </span>
                      <img
                        alt="app-store"
                        src="src/assets/appstore-icon.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "medium",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                </a>
                <a
                  href=""
                  className="w-max"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hidden lg:flex">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
                        />
                      </span>
                      <img
                        alt="android-store"
                        src="src/assets/play-store.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "medium",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                  </div>
                  <div className=" w-12 h-12 displayicon">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </span>
                      <img
                        alt="android-store"
                        src="src/assets/playstore-icon.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "medium",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full py-4 px-6">
            <div className="w-full mb-5 h-px bg-[#e1e1e1]"></div>
            <div className="w-full flex mb-10 md:mb-0 rowfine items-center justify-between text-xs text-primary-grish">
              <div className="order-2 md:order-1 text-center" translate="no">
                © 2024 RDVanytime - Tous les droits sont réservés
              </div>
              <div className="order-1 md:order-2 flex flex-row gap-4 mb-11 md:mb-0">
                <a
                  className="text-sm md:text-sm text-center uppercase hover:text-gray-800"
                  href=""
                >
                  Conditions générales d&apos;utilisation
                </a>
                <a
                  className="text-sm md:text-sm text-center uppercase hover:text-gray-800"
                  href=""
                >
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
