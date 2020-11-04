import "./Login.css";
import React from "react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserDataSource from '../Main/ProductionApi';

export default function Login() {

  return (
    <div className="Login">
      <div className="Login-form">
        <h1>Login</h1>
        <input value="email" /><br/>
        <input value="password" /><br/>
        
        <Link to='/:user_id/'>
          <button id="submit" variant="contained" >submit</button>
        </Link>
        
      </div>
    </div>
  );
}