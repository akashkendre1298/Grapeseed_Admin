import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import AddExecutive from "./pages/AddExecutive";
import ViewExecutive from "./pages/ViewExecutive";
import EnquiryDetails from "./pages/EnquiryDetails";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Reports from "./pages/Reports";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addexecutive" component={AddExecutive} />
          <Route path="/viewexecutive" component={ViewExecutive} />
          <Route path="/enquirydetails" component={EnquiryDetails} />
          <Route path="/reports" component={Reports} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/dashboard">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="addexecutive" href="/addexecutive">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Add Executive</IonLabel>
          </IonTabButton>
          <IonTabButton tab="viewexecutive" href="/viewexecutive">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>View Executive</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="login" href="/login">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Log Out</IonLabel>
          </IonTabButton>
          <IonTabButton tab="reports" href="/reports">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Reports</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  // <IonApp>
  //   <IonReactRouter>
  //     <IonTabs>
  //       <IonRouterOutlet>
  //         <Route exact path="/">
  //           <Redirect to="/login" />
  //         </Route>
  //         <Route exact path="/tab1">
  //           <Tab1 />
  //         </Route>
  //         <Route exact path="/tab2">
  //           <Tab2 />
  //         </Route>
  //         <Route path="/tab3">
  //           <Tab3 />
  //         </Route>
  //         <Route path="/reports">
  //           <Reports />
  //         </Route>
  //         <Route path="/dashboard">
  //           <Dashboard />
  //         </Route>
  //         <Route path="/login">
  //           <Login />
  //         </Route>
  //       </IonRouterOutlet>
  //       <IonTabBar slot="bottom">
  //         <IonTabButton tab="tab1" href="/tab1">
  //           <IonIcon aria-hidden="true" icon={triangle} />
  //           <IonLabel>Tab 1</IonLabel>
  //         </IonTabButton>
  //         <IonTabButton tab="tab2" href="/tab2">
  //           <IonIcon aria-hidden="true" icon={ellipse} />
  //           <IonLabel>Tab 2</IonLabel>
  //         </IonTabButton>
  //         <IonTabButton tab="tab3" href="/tab3">
  //           <IonIcon aria-hidden="true" icon={square} />
  //           <IonLabel>Tab 3</IonLabel>
  //         </IonTabButton>
  //         <IonTabButton tab="reports" href="/reports">
  //           <IonIcon aria-hidden="true" icon={square} />
  //           <IonLabel>Reports</IonLabel>
  //         </IonTabButton>
  //       </IonTabBar>
  //     </IonTabs>
  //   </IonReactRouter>
  // </IonApp>
);

export default App;
