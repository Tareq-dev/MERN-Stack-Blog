import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Articles from './pages/Articles';
import Navbar from './components/Navbar';

// Components


function App() {
  return (
    <Router>
    <Navbar />
    <div className="max-w-screen-md mx-auto pt-20">
      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/articles-list" component={ArticlesList} />
      <Route  path="/articles/:name" component={Articles} />
      
    </div>
    </Router>
  );
}

export default App;
