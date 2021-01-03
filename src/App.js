import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar'; 
import { withStyles} from '@material-ui/core/styles';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { Power } from 'react-bootstrap-icons';

import './App.css';
import MyScreen from './MyScreen';

const styles = theme => ({
  buttonPadding: {    
    padding: '30px',   
  },
});

function App() {
  return (
    <div className="App">
      <AppBar className="mrg" position="static">  
        <Toolbar>  
          <div style={{ 'paddingLeft': "600px" }}>Moto Smart</div>  
        </Toolbar>  
      </AppBar>
      <header>
          {/* <MyScreen className="classes.buttonPadding"/> */}
          <EmojiObjectsIcon color="primary" style={{padding: '30px'}}/>
          <Power style={{padding: '30px'}} />
          text
      </header>
    </div>
  );
} 

export default withStyles(styles)(App);
