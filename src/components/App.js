import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './Main';
import { Invoice } from './Invoice';
import './App.scss';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/create" component={Invoice} />
            </Switch>
        </Router>
    );
}

export default App;
