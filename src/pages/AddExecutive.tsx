import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonText,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
} from "@ionic/react";
import logo from "../Assets/gapeseed-logo.png";
import "./ExecutiveForm.css";

const AddExecutive = () => {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPanCard, setClientPanCard] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [showToast, setShowToast] = useState(false);

  const addExecutive = async () => {
    const executiveData = {
      clientName,
      clientPhone,
      clientAddress,
      clientPanCard,
      clientEmail,
      clientPassword,
    };

    try {
      const response = await fetch(
        "https://grapeseed-executive.onrender.com/api/clients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(executiveData),
        }
      );

      if (response.ok) {
        setShowToast(true);
        setClientName("");
        setClientPhone("");
        setClientAddress("");
        setClientPanCard("");
        setClientEmail("");
        setClientPassword("");
      } else {
        console.error("Failed to add executive");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div className="header">
          <IonImg src={logo} className="login-logo" />
          <IonText className="title">Add Executive</IonText>
        </div>
        <section className="all-inputs-for-add-executive">
          <IonItem style={{ border: "1px solid grey" }}>
            <IonInput
              placeholder="Full Name"
              value={clientName}
              onIonChange={(e) => setClientName(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem style={{ border: "1px solid grey" }}>
            <IonInput
              value={clientPhone}
              onIonChange={(e) => setClientPhone(e.detail.value)}
              type="tel"
              placeholder="Phone Number"
            />
          </IonItem>
          <IonItem style={{ border: "1px solid grey" }}>
            <IonInput
              value={clientEmail}
              onIonChange={(e) => setClientEmail(e.detail.value)}
              type="email"
              placeholder="Email"
            />
          </IonItem>
          <IonItem style={{ border: "1px solid grey" }}>
            {/* <IonLabel position="floating">Password</IonLabel> */}
            <IonInput
              value={clientPassword}
              onIonChange={(e) => setClientPassword(e.detail.value)}
              type="password"
              placeholder="Password"
            />
          </IonItem>
          <IonItem style={{ border: "1px solid grey" }}>
            {/* <IonLabel position="floating">PAN Card</IonLabel> */}
            <IonInput
              value={clientPanCard}
              onIonChange={(e) => setClientPanCard(e.detail.value)}
              placeholder="PAN Card"
            />
          </IonItem>
          <IonItem style={{ border: "1px solid grey" }}>
            {/* <IonLabel position="floating">Address</IonLabel> */}
            <IonInput
              value={clientAddress}
              onIonChange={(e) => setClientAddress(e.detail.value)}
              placeholder="Address"
            />
          </IonItem>
        </section>
        <IonButton
          expand="full"
          color="dark"
          onClick={addExecutive}
          style={{ padding: "1em 0" }}
        >
          Add Executive
        </IonButton>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Executive added successfully"
          duration={2000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default AddExecutive;
