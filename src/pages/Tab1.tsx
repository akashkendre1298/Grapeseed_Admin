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
        <IonItem>
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput
            value={clientName}
            onIonChange={(e) => setClientName(e.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Phone Number</IonLabel>
          <IonInput
            value={clientPhone}
            onIonChange={(e) => setClientPhone(e.detail.value)}
            type="tel"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={clientEmail}
            onIonChange={(e) => setClientEmail(e.detail.value)}
            type="email"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            value={clientPassword}
            onIonChange={(e) => setClientPassword(e.detail.value)}
            type="password"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">PAN Card</IonLabel>
          <IonInput
            value={clientPanCard}
            onIonChange={(e) => setClientPanCard(e.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Address</IonLabel>
          <IonInput
            value={clientAddress}
            onIonChange={(e) => setClientAddress(e.detail.value)}
          />
        </IonItem>
        <IonButton expand="full" color="dark" onClick={addExecutive}>
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
