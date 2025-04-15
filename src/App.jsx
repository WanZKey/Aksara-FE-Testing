import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProvincePage from './pages/ProvincePage';
import QuizPage from './pages/QuizPage';
import AIRecommendations from './components/AIRecommendations';
import EventListings from './components/EventListings';
import FeedbackForm from './components/FeedbackForm';
import QuizGame from './components/QuizGame';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/province/:id" component={ProvincePage} />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/ai-recommendations" component={AIRecommendations} />
          <Route path="/events" component={EventListings} />
          <Route path="/feedback" component={FeedbackForm} />
          <Route path="/quiz-game" component={QuizGame} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;