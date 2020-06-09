import React, { FC } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import { Store, CombinedState } from 'redux';
import { RootState } from '../utils/interfaces';
import { Actions } from '../utils/actionTypes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

type Props = {
  store: Store<CombinedState<RootState>, Actions>;
};

const Root: FC<Props> = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);

export default Root;
