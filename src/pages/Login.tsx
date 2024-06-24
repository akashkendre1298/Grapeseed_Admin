import React, { useState, useRef } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonLoading,
  IonImg,
  IonIcon,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { chevronForwardOutline, checkmarkOutline } from "ionicons/icons";
import "./Login.css";
import logo from "../Assets/gapeseed-logo.png";

const Login = () => {
  const history = useHistory();
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    const staticUserData = {
      email: "test@example.com",
      password: "password123",
    };

    setTimeout(() => {
      setIsLoading(false);

      if (
        clientEmail === staticUserData.email &&
        clientPassword === staticUserData.password
      ) {
        setShowAlert(true);
      } else {
        alert("Invalid email or password. Please try again.");
      }
    }, 1000);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="6" sizeLg="4">
              <div className="login-container">
                <IonImg src={logo} className="login-logo" />
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    value={clientEmail}
                    onIonChange={(e) => setClientEmail(e.detail.value)}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    type="password"
                    value={clientPassword}
                    onIonChange={(e) => setClientPassword(e.detail.value)}
                  />
                </IonItem>
                <IonButton
                  expand="block"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <IonIcon slot="start" icon={checkmarkOutline} />
                  ) : (
                    <IonIcon slot="start" icon={chevronForwardOutline} />
                  )}
                  Login
                </IonButton>
              </div>
              {/* <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="email"
                  value={clientEmail}
                  onIonChange={(e) => setClientEmail(e.detail.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  value={clientPassword}
                  onIonChange={(e) => setClientPassword(e.detail.value)}
                />
              </IonItem>
              <IonButton
                expand="block"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <IonIcon slot="start" icon={checkmarkOutline} />
                ) : (
                  <IonIcon slot="start" icon={chevronForwardOutline} />
                )}
                Login
              </IonButton> */}
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonLoading isOpen={isLoading} message="Logging in..." />
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => {
            setShowAlert(false);
            history.push("/dashboard");
          }}
          header="Login successful!"
          message="Welcome to the Dashboard"
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
