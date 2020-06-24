import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Posts from './pages/posts';

export default function Routes(){
    return(
        <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Credito}/>
           </Switch>
        
        </BrowserRouter>
    );
}