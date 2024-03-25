import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';
import './index.css'
import { Head } from '../../Components/Head.jsx';
import "../../styles/color.css";
import "../../styles/font.css";
import "../../styles/index.css";
import "../../styles/tailwind.css";



const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};

const Line = ({ className, ...restProps }) => {
  return <div className={className} {...restProps} />;
};
const sizeClasses = {
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};


const List = ({ children, className, ...restProps }) => {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};




const ContactusPage = () => {
// emailjs api call
const formRef = useRef(); // Ref for the form element
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    selectedOption: '', // Assuming this is the state for radio button value
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // This line updates the state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: `${form.firstName} ${form.lastName}`,
      to_name: 'Djamel Eddine AHMED BACHA',
      from_email: form.email,
      to_email: 'deahmedbacha@gmail.com',
      message: form.message,
      phone_number: form.phoneNumber,
      selected_option: form.selectedOption,
    };

    emailjs
      .send('service_zfu4xdp', 'template_67k3rer', templateParams, 'oywBbfgx8SZVoJ6o0')
      .then(
        () => {
          setLoading(false);
          alert('Thanks for your message!');
          // Reset the form after submission
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
            selectedOption: "",
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert('Something went wrong. Please try again later.');
        }
      );
  };


//return

  return (
    <>
    <Head></Head>
      <div className="bg-gray-50 flex flex-col font-poppins gap-[50px] items-center justify-end mx-auto pt-[122px] md:px-10 sm:px-5 px-[122px] w-full">
        <div className="flex flex-col gap-[18px] justify-start mt-3.5">
          <Text
            className="md:ml-[0] ml-[199px] sm:text-4xl md:text-[38px] text-[40px] text-blue-900"
            size="txtPoppinsSemiBold18"
          >
            Contactez-nous
          </Text>
          <Text
            className="text-center text-gray-600 text-lg"
            size="txtPoppinsSemiMedium18"
          >
            Une question ou des remarques ? Écrivez-nous simplement un message !
          </Text>
        </div>
        <div className="md:h-[1173px] sm:h-[667px] h-[758px] max-w-[1196px] mx-auto relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-2.5 rounded-[10px] shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-[97%] md:w-full">
                <div className="bg-blue-900 flex flex-col items-start justify-end sm:pl-5 pl-[37px] pt-[37px] rounded-[10px] w-[44%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtPoppinsSemiBold18"
                  >
                    Vos Coordonnées
                  </Text>
                  <Img
                    className="h-[291px] md:ml-[0] ml-[34px]"
                    src="images/img_contactusrafiki.svg"
                    alt="contactusrafiki"
                  />
                  <div className="md:h-[235px] h-[260px] mt-3.5 relative w-full">
                    <div className="absolute bottom-[0] md:h-[138px] h-[178px] right-[0] w-[38%]">
                      <div className="absolute bg-white-A700_1e bottom-[0] h-[134px] right-[0] rounded-[69px] w-[82%]"></div>
                      <div className="absolute bg-white-A700_21 h-[138px] left-[0] rounded-[50%] top-[0] w-[138px]"></div>
                    </div>
                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-3/4">
                      <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                        <div className="flex flex-row gap-[25px] items-center justify-start w-[54%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_bxsphonecall.svg"
                            alt="bxsphonecall"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsSemiRegular16"
                          >
                            +213 5 6127 9078
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[25px] items-start justify-start w-[78%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_icsharpemail.svg"
                            alt="icsharpemail"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsSemiRegular16"
                          >
                            Contact@rdvanytime.com
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[25px] items-start justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_carbonlocationfilled.svg"
                            alt="carbonlocationf"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsSemiRegular16"
                          >
                            <>
                              Rue Houari Abdellah, El Amria, <br />
                              Ain Temouchent
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-[22px] items-end justify-start md:mt-0 mt-[50px] w-[53%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <List
                      className="flex flex-col gap-11 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row gap-[39px] items-center justify-between my-0 w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-[47%] sm:w-full">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsSemiMedium12"
                          >
                            Nom
                          </Text>
                          <input
                          value={form.lastName}
                          onChange={handleChange}
                            name="lastName"
                            className="md:ml-[0] ml-[5px] mt-1 text-black text-sm"
                            size="txtPoppinsSemiMedium14"
                            placeholder="AHMED BACHA"
                          />
                          
                          <Line className="bg-gray-900 h-px mt-[9px] w-full" />
                        </div>
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-[47%] sm:w-full">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsSemiMedium12"
                          >
                            Prenom
                          </Text>
                          <input
                          value={form.firstName}
                          onChange={handleChange}
                            name="firstName"
                            className="mt-1.5 text-black text-sm"
                            size="txtPoppinsSemiMedium14"
                            placeholder="Djamel Eddine"
                          />
                          <Line className="bg-gray-900 h-px mt-[9px] w-full" />
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row gap-[39px] items-center justify-between my-0 w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-[47%] sm:w-full">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsSemiMedium12"
                          >
                            Email
                          </Text>
                          <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 text-black text-sm"
                            size="txtPoppinsSemiMedium14"
                            placeholder="Example@rdvanytime.com"
                            type="email"
                            style={{
                              width: "290px",
                              height: "20px",
                              marginLeft: "-5px",
                              border: "none",
                              borderRadius: "10px",
                              
                            }}
                          />
                          <Line className="bg-gray-900 h-px mt-[9px] w-full" />
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[47%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-xs"
                              size="txtPoppinsSemiMedium12"
                            >
                              Numéro de téléphone
                            </Text>
                            <input
                            value={form.phoneNumber}
                            onChange={handleChange}
                              name="phoneNumber"
                              className="mt-1 text-black text-sm"
                              size="txtPoppinsSemiMedium14"
                              placeholder="+213 5 6127 9078"
                            />
                            <Line className="bg-gray-900 h-px mt-[9px] w-full" />
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col items-center justify-start mt-11 w-[90%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtPoppinsBold14"
                        >
                          Le Sujet ?
                        </Text>
                        <div className="flex sm:flex-col flex-row sm:gap-[59px] items-start justify-between w-full">
                          <div className="flex sm:flex-1 flex-row items-start justify-start w-[66%] sm:w-full">
                            <input
                              name="selectedOption" 
                              value="Option 1"
                              type="radio"
                              className="text-left text-xs h-[13px] w-[13px]"
                              id="unbug"
                            />
                            <label
                              htmlFor="unbug"
                              className="text-black text-xs pl-4" 
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              Un Bug
                            </label>
                            <div className="flex flex-row gap-2.5 items-start justify-center ml-[70px] w-[27%]">
                              <input
                                type="radio"
                                value="Option 2"
                                onChange={handleChange}
                                className="text-left text-xs h-[13px] w-[13px]"
                                name="selectedOption"
                                id="unbug"
                              />
                              <label
                                htmlFor="Remarques"
                                className="text-black text-xs pl-4"
                              >
                                Remarques
                              </label>
                            </div>
                            <div className="flex flex-row gap-2.5 items-start justify-start ml-[42px] w-[22%]">
                              <input
                                type="radio"
                                value="Option 3"
                                onChange={handleChange}
                                className="text-left text-xs h-[13px] w-[13px]"
                                name="selectedOption"
                                id="unbug"
                              />
                              <label
                                htmlFor="Question"
                                className="text-black text-xs pl-4"
                              >
                                Question
                              </label>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start w-[24%] sm:w-full">
                            <input
                              type="radio"
                              value="Option 4"
                              onChange={handleChange}
                              className="text-left text-xs h-[13px] w-[13px]"
                              name="selectedOption"
                              id="unbug"
                            />
                            <label
                              htmlFor="Signaler_Medecin"
                              className="text-black text-xs pl-5"
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              Signaler Medecin
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[47px] w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtPoppinsSemiMedium12"
                      >
                        Message
                      </Text>
                      <textarea
                        name="message"
                        className="message"
                        value={form.message}
                        onChange={handleChange}
                        style={{
                          maxHeight: "200px",
                          minHeight: "100px",
                          height: "100px",
                          width: "100%",
                          padding: "10px",
                          overflowY: "auto", 
                          border: "none",
                          outline: "none",
                          resize: 'none',
                        }}
                        placeholder="Écrivez votre message.."
                      />
                       <Line className="bg-gray-900 h-px mt-[9px] w-full" />
                    </div>
                  </div>
                  <button>
                    <div className="bg-blue-900 flex flex-col items-start justify-start md:px-10 px-12 sm:px-5 py-[15px] rounded-[5px] shadow-bs1 w-auto">
                      <Text
                        className="text-base text-center text-white-A700 w-auto"
                        size="txtPoppinsSemiMedium16"
                      >
                        {loading ? "Envoyer en cour ..." : "Envoyer le message"}
                      </Text>

                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[0] h-[217px] object-cover right-[11%] w-[23%] left-[67%]"
            src="images/img_lettersend1.png"
            alt="lettersendOne"
          />
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
