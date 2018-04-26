import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import store from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer'
injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router>
        <MuiThemeProvider>
          <Main />
         
             <Switch>
              <Route path='/result' component = { ResultPageContainer } />
               <Route path='/' component = {HomePageContainer} />

             </Switch>  
            
        </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
