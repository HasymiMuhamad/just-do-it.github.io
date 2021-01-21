import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../home/home.css'
import bannerImg from '../assets/images/bannerImg.svg'



export default function Home() {
    return (
      <div>
        <div className="navbar-top">
          <p className="navbar-title-home">Hastech Academy</p>
          <div className="right-component">
            <div className="login-text">Login</div>
            <div className="icon-initial">H</div>
          </div>
        </div>
        <div className="row-content">
          <div className="sidebar-left">
          </div>
          <div className="content-home" style={{overflowY:'scroll'}}>
            <div className="carousel-up" style={{display: 'flex',flexDirection:'row'}}>
              <p style={{
                marginTop: '0px',
                marginBottom: '0px',
                paddingTop: '50px',
                paddingLeft: '50px',
                fontSize: '56px',
                color: '#223547',
                wordBreak: 'break-word',
                width: '395px',
                fontWeight: '500'
              }}>Online Coding Bootcamp.</p>
              <img src={bannerImg} style={{width: '231px', marginLeft: '224px'}}/>
            </div>
            <div className="content-item">
              <div className="row-content-item">
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
              </div>
              <div className="row-content-item">
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
              </div>
              <div className="row-content-item">
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
              </div>
              <div className="row-content-item">
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
              </div>
              <div className="row-content-item">
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
                <div className="item-course"></div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    )
  }