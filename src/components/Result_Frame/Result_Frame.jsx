import { Link } from "react-router-dom";

const Result_Frame = ({imgurl,mobileview})=>{
    return(
        <div className="flex justify-center items-center flex-col w-full min-h-[calc(100vh-60px)] bg-[#e1dfca] p-4">
            <img className={`${mobileview?'max-w-[98%] md:max-w-[400px] lg:max-w-[450px]':'max-w-[98%] md:max-w-[800px] lg:max-w-[850px]'} m-4 overflow-auto`} src={imgurl}/>
            <Link to={imgurl}  target="_blank" className="px-4 py-2 bg-black text-white rounded m-2" download>Download</Link>
        </div>
    )
}
export default Result_Frame;