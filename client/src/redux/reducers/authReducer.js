import { NULL } from 'node-sass'
import { CLEAR_ERROR_FAILURE, CLEAR_ERROR_REQUEST, CLEAR_ERROR_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types'

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: "",
    userId:"",
    userName:"",
    userRole:"",
    errorMsg:"",
    successMsg:"",
}

const authreducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state, //... 은 얕은 복사를 의미함
                errorMsg:"",
                isLoading: true 
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token) // 이해가 잘 안감..
            return{
                ...state, //얕은 복사를 하는 이유 re+act // 다시작동한다 // 기존것과 바뀐것을 비교하여 새로 바뀐것만 반영함
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                userId: action.payload.user.userId,
                userRole : action.payload.user.role,
                errorMsg:""
            }

        case LOGIN_FAILURE:
            localStorage.removeItem("token")
            return{
                ...state, //얕은 복사를 하는 이유 re+act // 다시작동한다 // 기존것과 바뀐것을 비교하여 새로 바뀐것만 반영함
                ...action.payload,
               token : null,
               user : null,
               userId: null,
               isAuthenticated: false,
               isLoading : false,
               userRole: null,
               errorMsg: action.payload.data.msg
            }
        case CLEAR_ERROR_REQUEST:
            return{
                ...state,
                ERRORmSG: null,
            }
        case CLEAR_ERROR_SUCCESS:
            return{
                ...state,
                ERRORmSG: null,
            }
        case CLEAR_ERROR_FAILURE:
            return{
                ...state,
                ERRORmSG: null,
            }
        default:
            return state
    }
}
export default authreducer