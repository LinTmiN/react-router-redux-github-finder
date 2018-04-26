import React from 'react';
import { Link } from 'react-router-dom';
import { Card,CardActions,CardHeader,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import  RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
const GithubBox =(props) =>(
	<div>
	 <Card>
	 	<CardHeader 
	 	   title={props.data.get('name')}
           subtitle={props.userId}
           avatar={props.data.get('avatar_url')}
	 	/>
	 	<CardText>
	 		Followers:{props.data.get('followers')}
	 	</CardText>
	 	<CardText>
	 		Following:{props.data.get('following')}
	 	</CardText>
	 	<CardActions>
	 		<Link to='/'>
	 		   <RaisedButton label='返回' icon={<ActionHome/>} secondary={true} />
	 		</Link>
	 	</CardActions>
	 </Card>
	</div>
)
export default GithubBox