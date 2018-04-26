import 'whatwg-fetch';
import { 
	showSpinner , 
	hideSpinner , 
	getGithubInitiate , 
	getGithubSuccess ,
	getGithubFail,
} from '../constants/createActions'
export const getGithub = (userId = 'torvalds') => {
	return (dispatch) => {
		dispatch(getGithubInitiate());
		dispatch(showSpinner());
		fetch('https://api.github.com/users/' + userId)
		.then(function(response){
			return response.json()
		})
		.then(function(json){
			console.log(json)
			dispatch(getGithubSuccess({data:json}));
			dispatch(hideSpinner())
		})
		.catch(function(response){
			dispatch(getGithubFail())
		})
	}
};