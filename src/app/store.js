import { configureStore } from '@reduxjs/toolkit';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import counterReducer from '../features/counter/counterSlice';
import {SaveSlice}from '../features/counter/counterSlice';

export const {clicked} = SaveSlice.actions;// rertieve buttonclick action

/*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/ 
const store= configureStore({
  reducer: {
    save: SaveSlice.reducer,
  },
});
/*const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(SaveSlice.reducer,composedEnhancer);*/

export default store;
 