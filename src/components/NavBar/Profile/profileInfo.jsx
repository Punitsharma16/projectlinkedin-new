import { Link, useNavigate } from "react-router-dom"
import { HomeProfile } from "../home/HomeProfile"
import { ProfileImage } from "../Assets/profileImage"
import { userInfo } from "../../utils/config"
import style from './profile.module.css'
import { ProfileImageLogo } from "./ProfileImageLogo"
import { useContext } from "react"
import { helpModalContext } from "../../../App"

export const ProfileInfo = ()=>{
    const {setHelpModal} = useContext(helpModalContext);
    const navigate = useNavigate();
    const data = userInfo();
    const {name,email} = data;

    const logOutBtn = ()=>{
        sessionStorage.clear();
        navigate('/login');
    }
    return(
        <main>
            <section>
                <div className={style.ImageNameContiner} >
                <ProfileImageLogo/>
                <div>
                    <span style={{fontSize:'18px',fontWeight:'500'}}>{name}</span><br /><span style={{fontSize:'12px'}}>Full Stack Developer || React.js || Node.js</span>
                </div>
                </div>
                <button onClick={()=>navigate('/profile')} className={style.viewProfileBtn}>View Profile</button>
            </section>
            <hr />
            <section className={style.accountBox}>
                <p style={{fontWeight:'500'}}>Account</p>
                <Link to='/premium'><span>Try Premium for free</span></Link><br />
                <Link><p>Setting and Privacy</p></Link>
                <Link><span onClick={()=>setHelpModal(true)}>Help</span></Link>
            </section>
            <hr />
            <section>
                <p style={{fontWeight:'500'}}>Manage</p>
                <Link to='/recent-activity/all'>Post & Activity</Link>
            </section>
            <hr />
            <button onClick={logOutBtn} className={style.signOut}>Sign Out</button>
        </main>
        
    )
}