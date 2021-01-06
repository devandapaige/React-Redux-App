import axios from "axios";
export const ERROR = "error";
export const SUCCESS = "success";
export const LOADING = "loading";
//thunk - function in a function:
export const getCharacters = () => (dispatch) => {
  //this is going to begin loading and retrieving the data with our API call.
  dispatch({ type: LOADING });
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => {
      console.log(res);
      //this means - If the data is able to be accessed, we will consider that the "success" and the information we want will travel in the payload:
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ERROR, payload: err.message });
    });
};
