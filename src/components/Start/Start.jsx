import { useState } from "react";
import Mobile from "./components/Mobile/Mobile.";
import Fullpage from "./components/Fullpage/Fullpage";
import MobileSelect from "./components/MobileSelect/MobileSelect";
import PcResolution from "./components/PcResolution/PcResolution";
import Url from "./components/URL/Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Start = ({setimgurl,setmobileview,mobileview})=>{
    
    const [fullpage,setfullpage]=useState(false);
    const [url,seturl]=useState("");
    const [pcres,setpcres]=useState("1920x1080");
    const [mob_device,setmob_device]=useState('iPhone 13 Pro Max');
    const [takingframe,settakingframe]=useState(false);
    const navigate = useNavigate();

    const Take_frame_req = ()=>{
        settakingframe(true)
        const pc_width = pcres.split('x')[0];
        const pc_height = pcres.split('x')[1];
        // console.log(mobileview,fullpage,url,pc_height,pc_width,mob_device);
        axios.post('/api/screenshot',
                {
                    "url": url,
                    "screen_width": pc_width,
                    "screen_height": pc_height,
                    "ismobile": mobileview,
                    "fullpage": fullpage,
                    "mobile_device": mob_device
                }
        ).then((res)=>{
            if(res.data.status == 200){
            setimgurl(res.data.image);
            settakingframe(false);
            navigate('/Frame',);
            }else if(res.data.status == 400){
                settakingframe(false); 
                console.log("Error occured");
            }
            
        })
    }


    return(
        <>
        {takingframe&&(
            <div className="absolute flex flex-col justify-center items-center top-0 left-0 min-h-[100vh] w-full backdrop-blur-md z-[2] transition-all"><img src="/webframeloading-2.gif" alt="" width={"80px"}/><h3 className="text-lg font-bold">Taking Your Frame</h3></div>
        )}
        <div className="flex flex-col items-center justify-start md:justify-center lg:justify-center w-full min-h-[calc(100vh-60px)] bg-[#e1dfca] px-2 py-2 z-[10]">
            <img className="md:absolute md:left-[-100px] w-[70%] md:w-[40%] lg:[350px] z-[1]" src="/Mobiles.png"/>
            <h3 className="font-bold text-3xl m-4">Take a Frame Now</h3>
            <Url url={url} seturl={seturl}/>
            {mobileview?<MobileSelect mob_device={mob_device} setmob_device={setmob_device} />:<PcResolution pcres={pcres} setpcres={setpcres} />}
            <Mobile mobileview={mobileview} setmobileview={setmobileview}/>
            <Fullpage fullpage={fullpage} setfullpage={setfullpage}/>
            <button className="px-4 py-2 bg-black text-white rounded m-3" onClick={Take_frame_req}>Take a Frame</button>
        </div>
        </>
    )
}
export default Start;
