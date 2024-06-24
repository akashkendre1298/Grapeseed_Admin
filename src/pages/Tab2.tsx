import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonText,
  IonCard,
  IonCardContent,
  IonButton,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import logo from "../Assets/gapeseed-logo.png";
import "./ViewExecutive.css";

const ViewExecutive = () => {
  const [executiveData, setExecutiveData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedExecutive, setSelectedExecutive] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    // Fetch executive data from the API and set the state
    fetch("https://grapeseed-executive.onrender.com/api/clients")
      .then((response) => response.json())
      .then((data) => setExecutiveData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleDetails = (executive) => {
    setShowDetails(!showDetails);
    setSelectedExecutive(executive);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding main-page-bg" fullscreen>
        <div className="main-page-bg">
          <div className="header">
            <IonImg src={logo} className="login-logo" />
            <IonText className="title">View Executive</IonText>
          </div>

          {executiveData.map((executive, index) => (
            <IonCard
              key={executive.id}
              className={`executiveDetails ${
                index === executiveData.length - 1 ? "lastItemMargin" : ""
              }`}
            >
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <IonLabel className="label">Full Name:</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonText className="value">{executive.clientName}</IonText>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonLabel className="label">Contact:</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonText className="value">{executive.clientPhone}</IonText>
                  </IonCol>
                </IonRow>

                {showDetails && selectedExecutive === executive && (
                  <>
                    <IonRow>
                      <IonCol>
                        <IonLabel className="label">Address:</IonLabel>
                      </IonCol>
                      <IonCol>
                        <IonText className="value">
                          {executive.clientAddress}
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonLabel className="label">PAN Card:</IonLabel>
                      </IonCol>
                      <IonCol>
                        <IonText className="value">
                          {executive.clientPanCard}
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonLabel className="label">Email:</IonLabel>
                      </IonCol>
                      <IonCol>
                        <IonText className="value">
                          {executive.clientEmail}
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonLabel className="label">Password:</IonLabel>
                      </IonCol>
                      <IonCol>
                        {passwordVisible ? (
                          <IonText className="value">
                            {executive.clientPassword}
                          </IonText>
                        ) : (
                          <IonInput
                            className="passwordInput"
                            value={(executive.clientPassword || "").replace(
                              /./g,
                              "*"
                            )}
                            readonly
                          />
                        )}
                        <IonButton
                          fill="clear"
                          onClick={togglePasswordVisibility}
                        >
                          <IonIcon
                            slot="icon-only"
                            icon={passwordVisible ? eye : eyeOff}
                          />
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </>
                )}

                <IonButton
                  fill="clear"
                  onClick={() => toggleDetails(executive)}
                >
                  {showDetails && selectedExecutive === executive
                    ? "View Less"
                    : "View More"}
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ViewExecutive;
