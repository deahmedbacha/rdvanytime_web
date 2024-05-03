
import Headconectpro from "Modepro/Headconectpro";
import { Footer } from "../../Components/Footer/Footer.jsx";
import "./NotificationsPro.css";
import axios from "axios";
import { useEffect, useState } from "react";
function NotificationsPro() {

  const [nots, setNots] = useState([]);
  const [unread, setUnread] = useState(0);

useEffect(() => {
  axios
    .get(
      "src/Modepro/NotificationsPro/nots.json"
    )
    .then((res) => {
      setNots(res.data);
      setUnread(res.data.filter((item) => !item.read).length);
    })
    .catch((error) => {
      console.error("Error fetching nots data:", error);
      setNots([]); // Set nots to an empty array in case of an error
    });
}, []);
  const markRead = () => {
    Array.from(document.getElementsByClassName("unread")).forEach(
      (item, index) => {
        setTimeout(() => {
          item.classList.remove("unread");
          item.classList.add("marked");
          setUnread(unread - index - 1);
        }, index * 500);
      }
    );
  };

  return (
    <>
      <Headconectpro></Headconectpro>
      <body>
        <main
          className=" grid-cols-profile-area mt-20 bg-p-cover overflow-hidden "
          style={{ display: "flex" }}
        >
          <div
            className="w-screen flex flex-col py-1 relative overflow-scroll scrollbar-none"
            style={{ alignItems: "center" }}
          >
            <div className="mx-5 pt-1 flex flex-col flex-1">
              <div className="mainnotif">
                <div id="header">
                  <h1>
                    Notifications{" "}
                    <span id="badge" className={unread <= 0 ? "hidden" : ""}>
                      {unread}
                    </span>
                  </h1>{" "}
                  <button onClick={() => markRead()}>
                    tout marquer comme lu
                  </button>
                </div>
                <div id="main">
                  {nots.map((myNot, index) => {
                    return (
                      <div
                        key={index}
                        onClick={(e) => {
                          if (e.currentTarget.classList.contains("unread")) {
                            setUnread(unread - 1);
                            e.currentTarget.classList.remove("unread");
                            e.currentTarget.classList.add("marked");
                          }
                        }}
                        className={`notification ${myNot.read ? "" : "unread"}`}
                      >
                        <div className="profile-img">
                          <img src={myNot.profilePicture} alt="" />
                        </div>
                        <div className="notification-content">
                          <div className="notification-header">
                            <span className="accountName">{myNot.account}</span>{" "}
                          </div>
                          <span>{myNot.didWhat}</span>
                          <div className="notification-time">
                            {myNot.time} ago
                          </div>
                          {myNot.type === "message" ? (
                            <div className="message">{myNot.message}</div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
      <Footer />
    </>
  );
}

export default NotificationsPro;
