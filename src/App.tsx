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
      <IonRouterOutlet>
        <Route exact path="/login" component={Login} />
        <Redirect exact from="/" to="/login" />
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
            {/* <IonTabButton tab="login" href="/login">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Log Out</IonLabel>
          </IonTabButton> */}
            <IonTabButton tab="reports" href="/reports">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Reports</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
