import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route, Navlink, Link, Switch} from "react-router-dom"

class Nav extends Component {
    render(){
        return <div>
        <nav>  
         <ul>
         <li class="crumb"><a href = "/React-learning/">Home</a> </li>
         <li class="crumb"><a href = "/React-learning/ask">Ask the community</a></li>
        <li class="crumb"><a href = "/React-learning/postissue">Post an issue</a></li>   
         </ul>   
           
          </nav> </div>;
    }


}
export default Nav