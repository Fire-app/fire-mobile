import { createStore } from 'redux';
import notificationReducer from './reducers/notificationReducer';

const notificationStore = createStore(notificationReducer);

export default notificationStore;
