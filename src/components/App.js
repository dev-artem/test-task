import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Main } from './Main';
import { Invoice } from './Invoice';
import { store } from '../state';
import './App.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/create" component={Invoice} />
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
};

export default App;
