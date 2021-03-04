import React from 'react';
import { Router} from "@reach/router";
import { RouteComponentProps } from "@reach/router";
import HomeComponent from '../pages/home.component';
import FirmDetails from '../pages/Firm/FirmDetailsPage'
import ViewFirms from '../pages/Firms/ViewAllFirmsPage'
// import ShareComponent from '../pages/share.component';

let NotFound: React.FC<RouteComponentProps> = () => <div>404</div>
let Home: React.FC<RouteComponentProps> = () => <HomeComponent/>
let Firms: React.FC<RouteComponentProps> = () => <ViewFirms/>
let View: React.FC<RouteComponentProps> = () => <FirmDetails/>
// let Share: React.FC<RouteComponentProps> = () => <ShareComponent/>

export default function CustomRouter():any {
   return(
    <Router>
        <NotFound default />
        <Home path="/home" />
        <Firms path="/firms" />
        <View path="/view" />
        {/* <Share path="/" /> */}
    </Router>
  );
}