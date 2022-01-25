import axios from "axios";
import URI from "urijs";
import { GET_USER, USER_ERROR } from "./types";

export const getData = (data) => async (dispatch) => {
    try {
        // const url = URI("http://localhost:3001/users").query({
        //     login, password
        // });

        // console.log(url);
        const res = await axios.get("http://localhost:3001/users");
        dispatch({
            type: GET_USER,
            payload: res
        });

    }
    catch (e) {
        dispatch({
            type: USER_ERROR,
            payload: console.log(e)
        })
    }
}