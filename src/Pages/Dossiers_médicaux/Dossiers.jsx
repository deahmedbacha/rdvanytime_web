import { Head } from "../../Components/Head";
import { Footer } from "../../Components/Footer/Footer.jsx";
import FileInput from "./components/FileInput";
export const Dossiers = () => {

 
  return (
    <>
      <body>
        <Head></Head>
        <main
          className=" grid-cols-profile-area mt-20 bg-p-cover overflow-hidden "
          style={{ display: "flex" }}
        >
          <div
            className="w-screen lg:w-full flex flex-col py-1 relative overflow-scroll scrollbar-none"
            style={{ marginLeft: "14%", width: "70%" }}
          >
            <div>
              <div
                className="relative w-full bg-white shadow-sh-112-8 p-11 me-5 mb-3 rounded flex flex-1 first:mt-6 last:mb-10"
                style={{ borderRadius: "1.5rem" }}
              >
                <div className="w-full flex flex-col relative">
                  <div className="grid grid-flow-col auto-cols-max items-center gap-4 mb-6">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
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
                          border: "0",
                          margin: "0",
                          padding: "0",
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
                            border: "0",
                            margin: "0",
                            padding: "0",
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </span>
                      <img
                        src="src/assets/image_Profil/medical-profile.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          bottom: "0",
                          right: "0",
                          boxSizing: "border-box",
                          padding: "0",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0",
                          height: "0",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                    <div className="font-medium text-gray-600 text-lg flex flex-row items-center select-none">
                      Dossiers Médicaux
                    </div>
                  </div>
                  <div className="w-full flex flex-col mx-auto flex-1">
                    <FileInput />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </body>
      <Footer />
    </>
  );
};
export default Dossiers;