import React, { useState, useEffect } from "react";
import Headconectpro from "Modepro/Headconectpro";
import { Footer } from "../../Components/Footer/Footer.jsx";
import "./NotificationsPro.css";
import axios from "axios";

function RatingReview({ title, rating, setRating, onRatingChange }) {
  return (
    <div style={{ display: "block ruby" }}>
      <h4 style={{ paddingRight: "5%" }}>{title}</h4>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="star"
          style={{
            cursor: "pointer",
            color: rating >= star ? "gold" : "gray",
            fontSize: `35px`,
          }}
          onClick={() => {
            setRating(star);
            if (onRatingChange) {
              onRatingChange(title, star);
            }
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function NotificationsPro() {
  const [nots, setNots] = useState([]);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    axios
      .get("src/Modepro/NotificationsPro/nots.json")
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
          setUnread((prevUnread) => prevUnread - 1);
        }, index * 500);
      }
    );
  };

  const handleRatingChange = (title, newRating) => {
    // Mettre à jour l'évaluation dans l'application principale
    console.log(`Nouvelle évaluation pour ${title}: ${newRating}`);
  };

  return (
    <>
      <Headconectpro />
      <main
        className="grid-cols-profile-area mt-20 bg-p-cover overflow-hidden"
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
                </h1>
                <button onClick={markRead}>tout marquer comme lu</button>
              </div>
              <div id="main">
                {nots.map((myNot, index) => (
                  <div
                    key={index}
                    onClick={(e) => {
                      if (e.currentTarget.classList.contains("unread")) {
                        setUnread((prevUnread) => prevUnread - 1);
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
                        <span className="accountName">{myNot.account}</span>
                      </div>
                      <span>{myNot.didWhat}</span>
                      <div className="notification-time">{myNot.time} ago</div>
                      {myNot.type === "message" ? (
                        <div className="message">{myNot.message}</div>
                      ) : myNot.type === "rating" ? (
                        <div>
                          {Object.entries(myNot.ratings).map(
                            ([title, rating]) => (
                              <RatingReview
                                key={title}
                                title={title}
                                rating={rating}
                                setRating={(newRating) => {
                                  // Mettre à jour l'évaluation ici
                                  // Par exemple, vous pouvez envoyer une requête au serveur pour mettre à jour l'évaluation
                                  console.log(
                                    `Nouvelle évaluation pour ${title}: ${newRating}`
                                  );
                                }}
                                onRatingChange={handleRatingChange}
                              />
                            )
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotificationsPro;
