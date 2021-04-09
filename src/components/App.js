import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './Main';
import { Invoice } from './Invoice';
import './App.scss';

const App = () => {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/create" component={Invoice} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
