import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import reportWebVitals from './reportWebVitals'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/apropos'>
          <Apropos />
        </Route>
        <Route path='/logement/:logementId'>
          <Logement />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
