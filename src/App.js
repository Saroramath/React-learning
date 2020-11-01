
import './App.css';
import Counter from './components/counter';
import Nav from './components/nav';
import {BrowserRouter, Route, Navlink, Link, Switch} from "react-router-dom"
import Ask from './ask';
function App() {
  return (
    <div className="App">
      
      <Nav/>
    
         
          <BrowserRouter basename="/React-learning/">
            <Route exact path = "/" component = {Counter} />
            <Route path = "/ask" component = {Ask}/>


          
          </BrowserRouter>
          
        
    </div>
  );
}

export default App;
