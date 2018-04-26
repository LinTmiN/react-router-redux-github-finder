import { 
	SHOW_SPINNER , 
	HIDE_SPINNER , 
	GET_GITHUB_INITIATE , 
	GET_GITHUB_SUCCESS ,
	GET_GITHUB_FAIL,
	CHANGE_USER_ID,
} from './actionsTypes';
import { createAction } from 'redux-actions';
export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);
export const getGithubInitiate = createAction(GET_GITHUB_INITIATE);
export const getGithubSuccess = createAction(GET_GITHUB_SUCCESS);
export const getGithubFail = createAction(GET_GITHUB_FAIL);
export const changeUserId = createAction(CHANGE_USER_ID);

