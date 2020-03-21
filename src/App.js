import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from './components/Table';
import Pie from './components/Pie';
import Scatter from './components/Scatter';
import NavBar from './components/NavBar';
import { data as loadedData } from './data';

const App = () => {
  const data = React.useMemo(() => loadedData, []);
  return (
    <>
      <CssBaseline />
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route path='/pie'>
              <Pie data={data} />
            </Route>
            <Route path='/scatter'>
              <Scatter data={data} />
            </Route>
            <Route path='/'>
              <Table data={data} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
