import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './redux/reducers';
import sagas from './redux/sagas';
import App from './containers/App';
import Home from './containers/Home';
import Landing from './containers/Landing';
import * as serviceWorker from './serviceWorker';

const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];
const store = createStore(reducers(history), composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/landing" />}/>
          <Route path="/home" component={Home} key="home" exact />
          <Route path="/landing" component={Landing} key="landing" exact />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();