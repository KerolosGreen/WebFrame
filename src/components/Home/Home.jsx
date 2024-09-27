import { Link } from 'react-router-dom';
import './Home.css';
const Home = ()=>{
    return(
        <div className="h-[calc(100vh-60px)] w-full bg-[#FFFFF] flex flex-col-reverse md:flex-row lg:flex-row justify-start items-center">

        <div className="flex flex-col justify-center items-start w-full md:w-[40%] lg:w-[40%] h-full pl-2 bg-[#e1dfca] shadow-2xl shadow-slate-500">
        <h1 className="text-[70px] md:text-[100px] lg:text-[100px] font-[800] ml-[20px] bebas-neue-regular">WEB</h1>
        <h1 className="text-[70px] md:text-[100px] lg:text-[100px] mt-[-40px] ml-[20px] font-[800] bebas-neue-regular">FRAME</h1>
        <p className="text-lg font-bold ml-[20px] ">Capture Stunning Website Snapshots Instantly With WebFrame,</p>
        <p className="text-lg font-bold ml-[20px] ">Designed For Precision And Simplicity.</p>
        <Link to={"/start"}>
        <div className="py-2 px-3 border-4 border-black font-bold mt-[40px] ml-[20px] cursor-pointer hover:bg-black hover:text-gray-100 hover:scale-[1.03] transition">
            <h2>Take a Frame</h2>
        </div>
        </Link>
        </div>

        <div className="w-full md:w-[60%] lg:w-[60%] h-full bebas-neue-regular bg-[url('/src\assets\Target.png')] bg-cover z-[-1]">
        </div>

        </div>
    )
}
export default Home;