import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Views
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import UserProfile from './views/User/UserProfile';
import EditUserProfile from './views/User/EditUserProfile';
import ProjectList from './views/Project/ProjectList';
import ProjectDetail from './views/Project/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Here you can add a common Navbar or Header component if needed */}
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/:id" component={UserProfile} />
          <Route path="/edit-user/:id" component={EditUserProfile} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/project/:id" component={ProjectDetail} />
          {/* Additional Routes for other views */}
          <Route component={NotFound} />
        </Routes>
        {/* Here you can add a common Footer component if needed */}
      </div>
    </Router>
  );
}

export default App;
