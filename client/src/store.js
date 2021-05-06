import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory} from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();

const initialState = {}

const middlewares = [sagaMiddleware, routerMiddleware(history)]
const devtools = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__

const composeEnhancer = process.env.NODE_ENV === "production"
    ? compose
    : devtools || compose;           // 배포시 개발자 도구를 삭제 하기위한 코드 

const  store = createStore(
    createRootReducer(history),
    initialState, //웹에 모든 상태를 담고 있는 초기갑ㅅ // 모든 갑을 store에서 다 저장함.
    composeEnhancer(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export default store

