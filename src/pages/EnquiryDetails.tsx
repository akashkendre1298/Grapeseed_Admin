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
  IonCard,
  IonCardContent,
  IonText,
} from "@ionic/react";
import logo from "../Assets/gapeseed-logo.png";
import "./EnquiryDetails.css";

const EnquiryDetails = () => {
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
      <IonContent className="container ion-padding">
        <IonGrid>
          <IonRow className="header">
            <IonCol>
              <IonImg src={logo} className="login-logo" />
              <h2 className="title">Enquiry Details</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonItem> */}
              <IonInput
                fill="outline"
                className="search-bar"
                placeholder="Search by Customer or Executive Name"
                value={searchQuery}
                onIonChange={(e) => setSearchQuery(e.detail.value)}
                style={{ textAlign: "center" }}
              />
              {/* </IonItem> */}
            </IonCol>
          </IonRow>
          {/* <IonList>
            {filterEnquiries().map((enquiry, index) => (
              <IonItem
                key={index}
                style={{ margin: "1em 0" }}
                className={index === lastIndex ? "lastItem" : ""}
              >
                <IonGrid
                  style={{ backgroundColor: "white", borderRadius: "3px" }}
                >
                  <IonRow>
                    <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                      <IonLabel className="label">Customer Name:</IonLabel>
                      <section
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>{enquiry.name}</p>
                        <IonButton onClick={() => toggleDetails(index)}>
                          {expandedEnquiry === index
                            ? "View Less"
                            : "View More"}
                        </IonButton>
                      </section>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}></IonCol>
                  </IonRow>
                  {expandedEnquiry === index && (
                    <>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Pan Card:</IonLabel>
                          <p>{enquiry.Pan_Card}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Adhar Card:</IonLabel>
                          <p>{enquiry.Adhar_Card}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Cancelled Cheque:</IonLabel>
                          <p>{enquiry.Cancelled_cheque}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Image:</IonLabel>
                          <p>{enquiry.uploaded_image}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Contact:</IonLabel>
                          <p>{enquiry.mobile_nu}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Alternative Mobile:</IonLabel>
                          <p>{enquiry.Alternative_Mobile}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Mother Name:</IonLabel>
                          <p>{enquiry.Mother_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Email:</IonLabel>
                          <p>{enquiry.Email}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Last Education:</IonLabel>
                          <p>{enquiry.Last_Education}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Married Status:</IonLabel>
                          <p>{enquiry.Married_Status}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Nominee Name:</IonLabel>
                          <p>{enquiry.Nominee_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Nominee DOB:</IonLabel>
                          <p>{enquiry.Nominee_DOB}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Nominee Relationship:</IonLabel>
                          <p>{enquiry.Nominee_Ralationship}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Company Name:</IonLabel>
                          <p>{enquiry.Company_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Annual Income:</IonLabel>
                          <p>{enquiry.Annual_Income}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Industry Name:</IonLabel>
                          <p>{enquiry.Industry_Name}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Height:</IonLabel>
                          <p>{enquiry.Height}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Weight:</IonLabel>
                          <p>{enquiry.Weight}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Life Cover:</IonLabel>
                          <p>{enquiry.Life_Cover}</p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol  style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                          <IonLabel className="label">Medical History:</IonLabel>
                          <p>{enquiry.medical_History}</p>
                        </IonCol>
                      </IonRow>
                    </>
                  )}
                </IonGrid>
              </IonItem>
            ))}
          </IonList> */}

          {filterEnquiries().map((enquiry, index) => (
            <IonCard
              key={index}
              style={{ margin: "1em 0" }}
              className={`enquirydetails ${
                index === lastIndex ? "lastItem" : ""
              }`}
            >
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <IonLabel
                      style={{
                        color: "black",
                      }}
                    >
                      Customer Name:
                    </IonLabel>
                    <section
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontSize: "1.1rem" }}>{enquiry.name}</p>
                      <IonButton onClick={() => toggleDetails(index)}>
                        {expandedEnquiry === index ? "View Less" : "View More"}
                      </IonButton>
                    </section>
                  </IonCol>
                </IonRow>

                {expandedEnquiry === index && (
                  <>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Pan Card:</IonLabel>
                        <IonText className="value">{enquiry.Pan_Card}</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Adhar Card:</IonLabel>
                        <p>{enquiry.Adhar_Card}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Cancelled Cheque:</IonLabel>
                        <p>{enquiry.Cancelled_cheque}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Image:</IonLabel>
                        <p>{enquiry.uploaded_image}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Contact:</IonLabel>
                        <p>{enquiry.mobile_nu}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">
                          Alternative Mobile:
                        </IonLabel>
                        <p>{enquiry.Alternative_Mobile}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Mother Name:</IonLabel>
                        <p>{enquiry.Mother_Name}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Email:</IonLabel>
                        <p>{enquiry.Email}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Last Education:</IonLabel>
                        <p>{enquiry.Last_Education}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Married Status:</IonLabel>
                        <p>{enquiry.Married_Status}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Nominee Name:</IonLabel>
                        <p>{enquiry.Nominee_Name}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Nominee DOB:</IonLabel>
                        <p>{enquiry.Nominee_DOB}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">
                          Nominee Relationship:
                        </IonLabel>
                        <p>{enquiry.Nominee_Ralationship}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Company Name:</IonLabel>
                        <p>{enquiry.Company_Name}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Annual Income:</IonLabel>
                        <p>{enquiry.Annual_Income}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Industry Name:</IonLabel>
                        <p>{enquiry.Industry_Name}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Height:</IonLabel>
                        <p>{enquiry.Height}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Weight:</IonLabel>
                        <p>{enquiry.Weight}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Life Cover:</IonLabel>
                        <p>{enquiry.Life_Cover}</p>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IonLabel className="label">Medical History:</IonLabel>
                        <p>{enquiry.medical_History}</p>
                      </IonCol>
                    </IonRow>
                  </>
                )}
              </IonCardContent>
            </IonCard>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EnquiryDetails;
