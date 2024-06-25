import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import logo from "../Assets/gapeseed-logo.png";
import "./Reports.css";

const Reports = () => {
  const [expandedEnquiry, setExpandedEnquiry] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiryData, setEnquiryData] = useState([]);

  const toggleDetails = (index) => {
    setExpandedEnquiry((prev) => (prev === index ? null : index));
  };

  const filterEnquiries = () => {
    return enquiryData.filter((enquiry) => {
      const customerName = (enquiry.name || "").toLowerCase();
      const executiveName = (enquiry.executiveName || "").toLowerCase();
      return (
        customerName.includes(searchQuery.toLowerCase()) ||
        executiveName.includes(searchQuery.toLowerCase())
      );
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://executive-grapeseed.onrender.com/api/enquiry"
      );
      const data = await response.json();
      setEnquiryData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const lastIndex = filterEnquiries().length - 1;

  return (
    <IonPage>
      <IonContent className="container">
        <IonGrid>
          <IonRow className="header">
            <IonCol>
              <IonImg src={logo} className="login-logo" />
              <h2 className="title">Reports</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  className="search-bar"
                  placeholder="Search by Customer"
                  value={searchQuery}
                  onIonChange={(e) => setSearchQuery(e.detail.value)}
                  style={{ textAlign: "center" }}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonList>
            {filterEnquiries().map((enquiry, index) => (
              <IonItem
                key={index}
                className={index === lastIndex ? "lastItem" : ""}
              >
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonLabel>Customer Name:</IonLabel>
                      <p>{enquiry.name}</p>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonButton onClick={() => toggleDetails(index)}>
                        {expandedEnquiry === index ? "View Less" : "View More"}
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  {expandedEnquiry === index && (
                    <>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Pan Card:</IonLabel>
                          <p>{enquiry.Pan_Card}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Adhar Card:</IonLabel>
                          <p>{enquiry.Adhar_Card}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Cancelled Cheque:</IonLabel>
                          <p>{enquiry.Cancelled_cheque}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Image:</IonLabel>
                          <p>{enquiry.uploaded_image}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Contact:</IonLabel>
                          <p>{enquiry.mobile_nu}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Alternative Mobile:</IonLabel>
                          <p>{enquiry.Alternative_Mobile}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Mother Name:</IonLabel>
                          <p>{enquiry.Mother_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Email:</IonLabel>
                          <p>{enquiry.Email}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Last Education:</IonLabel>
                          <p>{enquiry.Last_Education}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Married Status:</IonLabel>
                          <p>{enquiry.Married_Status}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Nominee Name:</IonLabel>
                          <p>{enquiry.Nominee_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Nominee DOB:</IonLabel>
                          <p>{enquiry.Nominee_DOB}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Nominee Relationship:</IonLabel>
                          <p>{enquiry.Nominee_Ralationship}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Company Name:</IonLabel>
                          <p>{enquiry.Company_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Annual Income:</IonLabel>
                          <p>{enquiry.Annual_Income}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Industry Name:</IonLabel>
                          <p>{enquiry.Industry_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Height:</IonLabel>
                          <p>{enquiry.Height}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Weight:</IonLabel>
                          <p>{enquiry.Weight}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Life Cover:</IonLabel>
                          <p>{enquiry.Life_Cover}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>Medical History:</IonLabel>
                          <p>{enquiry.medical_History}</p>
                        </IonCol>
                      </IonRow>
                    </>
                  )}
                </IonGrid>
              </IonItem>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Reports;
