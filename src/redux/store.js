import { createStore } from "redux";
import reducer from "../redux/reducers/baseReducer";

const saveToLocalStorage = (reduxGlobalState) => {
  //serialization = converting js object to a string
  try {
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = (params) => {
  const serializeState = localStorage.getItem("state");

  if (serializeState === null) {
    return undefined;
  } else {
    return JSON.parse(serializeState); //returns JS object representing local storage
  }
};

export const loadTokenFromLocalStorage = () => {
  return store.getState().token;
};

const persistedState = loadFromLocalStorage();

//initializing redux store
//requires reducer, second arg is DevTools
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
