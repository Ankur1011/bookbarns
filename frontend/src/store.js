import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productReviewSaveReducer} from './reducer/productReducers';
import {cartReducer } from './reducer/cartReducer';
import {OrderCreateReducer, OrderDetailsReducer, OrderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer} from './reducer/orderReducer';
import Cookie from 'js-cookie'
import {userSigninReducer,userRegisterReducer, userUpdateReducer} from './reducer/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

//create an empty object
const initialState = {cart:{cartItems,shipping:{},payment:{}},userSignin: { userInfo } };

//create a Reducer : It is a function to get an action and state and return a new state
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    orderCreate:OrderCreateReducer,
    orderDetails:OrderDetailsReducer,
    orderPay: OrderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    productReviewSave: productReviewSaveReducer
})

//
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//thunk allows to runs Asyn action in redux
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;