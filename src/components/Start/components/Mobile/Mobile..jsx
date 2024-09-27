import { useEffect, useState } from "react";
// import './Mobile.css';

const Mobile = ({mobileview,setmobileview})=>{
    useEffect(
        ()=>{
    document.addEventListener('readystatechange',()=>{
            if (document.readyState === 'complete') {
                handle_selection_label();
            }
        })
    handle_selection_label();
        },[mobileview]
    )
   
    

    const handle_selection_label = ()=>{
        if(mobileview){
            document.getElementById('yes-mobile').checked = true;
            document.getElementsByClassName('yes-mob')[0].classList.add("checked");
            document.getElementsByClassName('no-mob')[0].classList.remove("checked");
        }else{
            document.getElementById('no-mobile').checked = true;
            document.getElementsByClassName('no-mob')[0].classList.add("checked");
            document.getElementsByClassName('yes-mob')[0].classList.remove("checked");
        }
    }

    const handle_change_yesMobile = ()=>{
        setmobileview(true);
    }

    const handle_change_noMobile = ()=>{
        setmobileview(false);
    }
    
    return(
        <div className="flex w-[94%] md:w-[500px] lg:w-[500px] justify-between items-center mob transition-all">
        <h4 className="font-semibold text-lg">Mobile Screen ?</h4>
        <div className="flex">
        <input type="radio" className="hidden" id="yes-mobile" name="yes_mob" onClick={handle_change_yesMobile}/>
        <label htmlFor="yes-mobile"  className="yes-mob py-1 px-5 rounded m-1 border bg-gray-200 border-gray-300 focus:bg-black focus:text-white transition cursor-pointer">Yes</label> 
        <input type="radio" className="hidden" id="no-mobile" name="yes_mob" onClick={handle_change_noMobile}/>
        <label htmlFor="no-mobile"  className="no-mob py-1 px-5 rounded m-1 bg-gray-200 border border-gray-300 focus:bg-black focus:text-white transition cursor-pointer">No</label> 
        </div>
        </div>
    )
}   
export default Mobile;