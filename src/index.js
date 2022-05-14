import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Register from './Register'
ReactDOM.render(
  <React.StrictMode>
    <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
const routing=(
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/Register" element ={<Register/>}/>
        </Routes>
      </div>
    </Router>
)
ReactDOM.render(routing,document.getElementById('root'))
reportWebVitals();
