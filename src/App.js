import React from 'react';

import './App.css';
import ChatPage from './ChatPage';

import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';



function App() {


  
  return (
    <div>

      <Router>
        <Switch>



         <Route path="/chatpage">
           <ChatPage />
           </Route>
         <Route path="/"  component={ChatPage}   />




        </Switch>
        
        
        
        
        
        </Router> 






     
    </div>
  );
}

export default App;
