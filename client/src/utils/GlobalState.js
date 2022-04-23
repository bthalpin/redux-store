import React from 'react';
import { Provider } from 'react-redux';

// Import redux store created and pass it to StoreProvider
import store from './store';

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
};
