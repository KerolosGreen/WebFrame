import { NavLink } from "react-router-dom";
import './navbar.css';
const Navbar =()=>{
    return(
        <nav className="flex justify-between items-center w-full h-[60px] text-white border-slate-700 px-[10px] md:px-[20px] lg:px-[40px] bg-[#2E2E2E]">

                <div className="flex justify-center items-center text-[12px] md:text-[16px] lg:text-[16px]">
                    <svg width="50" height="25">
                    <rect width="50" height="25" fill="none" stroke="white" strokeWidth="8" />
                    </svg>
                    <h4 className="font-bold ml-2">WEB FRAME</h4>  
                </div>

                <ul className="flex font-semibold items-center justify-center">
                    <NavLink to="/" className="text-[12px] md:text-[16px] lg:text-[16px] m-1 px-3 py-2 border-b-[2px] border-transparent hover:border-b-[2px] hover:border-white cursor-pointer transition">Home</NavLink>
                    <NavLink to="/start" className="text-[12px] md:text-[16px] lg:text-[16px] m-1 px-3 py-2 border-b-[2px] border-transparent hover:border-b-[2px] hover:border-white cursor-pointer transition">Start</NavLink>
                    <NavLink to="/About" className="text-[12px] md:text-[16px] lg:text-[16px] m-1 px-3 py-2 border-b-[2px] border-transparent hover:border-b-[2px] hover:border-white cursor-pointer transition">About</NavLink>
                </ul>

                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="45" height="45" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
        </nav>
    )
}
export default Navbar;