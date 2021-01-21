import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sidebar from '../component/DetailComponent/sidebar/sidebar'
import Content from '../component/DetailComponent/content/content'


export default function Detail() {
    return (
      <div>
          <Sidebar/>
          <Content/>
      </div>
    );
  }