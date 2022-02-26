import {
  applyMiddleware,
  compose,
  createStore,
  Store as ReduxStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers, { initialState } from "./rootReducer";
export * from "./actions";
export type Store = ReduxStore<typeof initialState>;

const configureStore = (state = initialState) => {
  const middlewares = [thunkMiddleware];
  const store = createStore(
    reducers,
    state,
    compose(applyMiddleware(...middlewares))
  );
  return store;
};

const store = configureStore();
export type RootState = ReturnType<typeof store.getState>;
export { store };
