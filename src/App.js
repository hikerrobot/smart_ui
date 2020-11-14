import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  

import './App.css';
import MyScreen from './MyScreen';

function App() {
  return (
    <div className="App">
      <AppBar className="mrg" position="static">  
        <Toolbar>  
          <div style={{ 'paddingLeft': "600px" }}>Moto Smart</div>  
        </Toolbar>  
      </AppBar>  
      <header className="App-header">
          <MyScreen />
      </header>
    </div>
  );
}

export default App;
