import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../content/content.css'


export default function Content() {
    return (
      <div className="layout">
            <div className="navbar">
                <p className="navbar-title">Kembali</p>
                <div className="right-item">
                    <p className="right-item-name">Halo, Hasymi</p>
                    <div className="user-initial">
                        <p>H</p>
                    </div>
                </div>
            </div>
            <div className="content-center video">
                <iframe width="806" height="453" src="https://www.youtube.com/embed/2bVnn0_cn0k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className="content-center video-title">HTML : Apa itu HTML ?</p>
            <div className="content-center margin-desc video-desc">
            </div>
            <p className="content-center margin-desc content-width video-desc-detail">
                Materi ini membahas tentang apa itu HTML , termasuk pengertian dan bagaimana cara 
                mengimplementasikan HTML. Beberapa tujuan yang ingin dicapai dalam video ini adalah :
            </p>
            <ol className="content-center margin-desc content-width video-desc-detail">
                <li>
                    Memahami apa itu HTML ?
                </li>
                <li>
                    Mengetahui cara mengimplementasikan HTML dalam pembuatan website
                </li>
            </ol>
           
            <div className="footer"></div>
      </div>
    );
  }