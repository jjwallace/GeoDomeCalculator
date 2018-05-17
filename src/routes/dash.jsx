import Dashboard from 'views/Dashboard/Dashboard.jsx';
import GeoDomeKit from 'views/Dashboard/GeoDomeKit.jsx';

import DomeInfo from 'views/Dashboard/DomeInfo.jsx';
import DomeCalculator from 'views/Dashboard/DomeCalculator.jsx'


;
import Buttons from 'views/Components/Buttons.jsx';
import GridSystem from 'views/Components/GridSystem.jsx';
import Panels from 'views/Components/Panels.jsx';
import SweetAlert from 'views/Components/SweetAlertPage.jsx';
import Notifications from 'views/Components/Notifications.jsx';
import Icons from 'views/Components/Icons.jsx';
import Typography from 'views/Components/Typography.jsx';
import RegularForms from 'views/Forms/RegularForms.jsx';
import ExtendedForms from 'views/Forms/ExtendedForms.jsx';
import ValidationForms from 'views/Forms/ValidationForms.jsx';
import Wizard from 'views/Forms/Wizard/Wizard.jsx';
import RegularTables from 'views/Tables/RegularTables.jsx';
import ExtendedTables from 'views/Tables/ExtendedTables.jsx';
import DataTables from 'views/Tables/DataTables.jsx';
import GoogleMaps from 'views/Maps/GoogleMaps.jsx';
import FullScreenMap from 'views/Maps/FullScreenMap.jsx';
import VectorMap from 'views/Maps/VectorMap.jsx';
import Charts from 'views/Charts/Charts.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import UserPage from 'views/Pages/UserPage.jsx';

import pagesRoutes from './pages.jsx';

var pages = [{ path: "/pages/user-page", name: "User Page", mini: "UP", component: UserPage }].concat(pagesRoutes);

var dashRoutes = [
  
  { path: "/dashboard", name: "Dashboard", icon: "pe-7s-note2", component: Dashboard },
  { path: "/calculator", name: "Calculator", icon: "pe-7s-graph", component: DomeCalculator },
  
  { path: "/geodomeinfo", name: "Dome Info", icon: "pe-7s-map-marker", component: DomeInfo },
  { collapse: true, path: "/forms", name: "More", state: "openForms", icon: "pe-7s-note2", views:[
     { path: "/geodomekit", name: "Geo-Dome Kit", icon: "pe-7s-plugin", component: GeoDomeKit },
  ]},
  
  { redirect: true, path: "/", pathTo: "/calculator", name: "DomeCalculator" }
];
export default dashRoutes;
