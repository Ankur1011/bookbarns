import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_REVIEW_SAVE_REQUEST, PRODUCT_REVIEW_SAVE_SUCCESS, PRODUCT_REVIEW_SAVE_FAIL } from "../constants/productConstants";
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL,
    PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL,
    PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL } from "../constants/productConstants";


const listProducts = (
  category = '',
  searchKeyword = '',
  sortOrder = ''
) =>async (dispatch) => {
    try{
        dispatch({type: PRODUCT_LIST_REQUEST}); 
        const {data} = await axios.get(
          '/api/products?category=' +
            category +
            '&searchKeyword=' +
            searchKeyword +
            '&sortOrder=' +
            sortOrder);

        //Once we get data from server we dispatch the status as Success : Returns Data from Server localhost : 5000
        dispatch({type: PRODUCT_LIST_SUCCESS,payload: data}); 
    }
    catch(error){
        //If we couldnt load any data we will direct it to fail status
        dispatch({type: PRODUCT_LIST_FAIL,payload: error.message}); 
    }
}

//accept parameter product_id
const detailsProduct = (productId)  => async (dispatch) => {
    try{
        //payload is selected prodcut id 
        dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId});

        //get data from server using axios: that sets the api URL
        const {data} = await axios.get("/api/products/" + productId);

        //render the action : Dispatch
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});
    }
    catch(error){
        
        dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.message});
    } 
}


const saveProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
      const {userSignin: { userInfo },} = getState();
      if (!product._id) {
        const { data } = await axios.post('/api/products', product, {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await axios.put(
          '/api/products/' + product._id,
          product,
          {
            headers: {
              Authorization: 'Bearer ' + userInfo.token,
            },
          }
        );
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
  };


  const deleteProdcut = (productId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      const { data } = await axios.delete('/api/products/' + productId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
  };



  const saveProductReview = (productId, review) => async (dispatch, getState) => {
    try {
      const {
        userSignin: {
          userInfo: { token },
        },
      } = getState();
      dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST, payload: review });
      const { data } = await axios.post(
        `/api/products/${productId}/reviews`,
        review,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
    } catch (error) {
      // report error
      dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
    }
  };



export { listProducts, detailsProduct, saveProduct, deleteProdcut, saveProductReview }