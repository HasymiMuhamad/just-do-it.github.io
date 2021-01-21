import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../sidebar/sidebar.css'
import htmlImage from '../../../assets/images/html.png'


export default function Sidebar() {
    return (
      <div>
          <div className="sidebar">
            <p className="sidebar-title">Hastech Academy</p>
            <div>
                <div className="sub-title">FRONTEND</div>
            </div>
            <div className="sidebar-content">
                <div className="item">
                    {/* <div className="item-image"></div> */}
                    <img src={htmlImage} className="item-image"/>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div><div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div><div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div><div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div><div className="item">
                    <div className="item-image"></div>
                    <div className="item-tagline">
                        <p className="item-title">HTML : Apa itu HTML ?</p>
                        <p className="item-sub-title">Mempelajari HTML dari awal</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }