import './App.css';
import Header from './components/header';
import Profile from './components/profile';
import Payment from './components/payment';
import Paydrop from './components/paydrop';
import AddTrip from './components/add-trip';
import Content from './components/front-content';
import IncomeTrip from './components/income-trip';
import DetailTour from './components/detail-tour';
import AdminApprove from './components/admin-approve';
import PaymentPending from './components/payment-pending';
import ListTransaction from './components/list-transaction';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className="App">
              <Header/>
              <Content/>
            </div>
          </Route>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/paydrop' component={Paydrop}/>
          <Route exect path='/add-trip' component={AddTrip}/>
          <Route exect path='/payment/:id/:props' component={Payment}/>
          <Route exact path='/detail/:id' component={DetailTour}/>
          <Route exect path='/incoming-trip' component ={IncomeTrip}/>
          <Route exect path='/admin-approve/:props' component={AdminApprove}/>
          <Route exect path='/list-transaction' component={ListTransaction}/>
          <Route exect path='/payment-pending/:id/:props' component={PaymentPending}/>
          
        </Switch>
      </Router>

  );
}

export default App;
