import './App.css';
import Header from './components/header';
import Content from './components/front-content';
import DetailTour from './components/detail-tour';
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
        <Route exact path='/detail/:id' component={DetailTour}/>
      </Switch>
    </Router>

  );
}

export default App;
