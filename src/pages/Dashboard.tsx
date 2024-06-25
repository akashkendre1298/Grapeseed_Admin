import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonFooter,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { home, exit, settings } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import logo from "../Assets/gapeseed-logo.png";

const CustomCard = ({ title, subtitle, content, onClick }) => (
  <IonCard button onClick={onClick} className="card-for-dashboard">
    <IonCardHeader>
      <IonCardTitle>{title}</IonCardTitle>
      {subtitle && <IonCardSubtitle>{subtitle}</IonCardSubtitle>}
    </IonCardHeader>
    {content && <IonCardContent>{content}</IonCardContent>}
  </IonCard>
);

const Dashboard = () => {
  const history = useHistory();

  const handleCardClick = (path) => {
    history.push(path);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonImg src={logo} className="dashboard-logo" />
        <IonGrid>
          <IonRow>
            <IonCol>
              <CustomCard
                title="Add Executive"
                onClick={() => handleCardClick("/addexecutive")}
              />
            </IonCol>
            <IonCol>
              <CustomCard
                title="View Executive"
                onClick={() => handleCardClick("/viewexecutive")}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <CustomCard
                title="Enquiry Details"
                onClick={() => handleCardClick("/enquirydetails")}
              />
            </IonCol>
            <IonCol>
              <CustomCard
                title="Reports"
                onClick={() => handleCardClick("/reports")}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
