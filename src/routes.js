import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Credito from './pages/Credito';

export default function Routes(){
    return(
        <BrowserRouter>
           <Switch>
               <Route path="/credito" exact component={Credito}/>
           </Switch>
        
        </BrowserRouter>
    );
}