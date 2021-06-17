import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Detail from './components/detail';
import Navigation from './components/navigation';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
