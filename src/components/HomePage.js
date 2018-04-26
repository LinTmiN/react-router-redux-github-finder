import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => (
  <div>
  	<TextField  
  	   floatingLabelText="输入查找的ID" 
  	   onChange={onChangeUserId}
  	/>
    <Link to={{ 
      pathname: '/result',
      query: { userId: userId }
    }}>
      <RaisedButton label="确认" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>	
)
export default HomePage;