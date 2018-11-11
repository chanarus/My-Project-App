import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import rootReducer from "./reducers/rootReducer";
import firebaseConfig from "../config/firebaseConfig";

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(...middlewares),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
);

export default store;
