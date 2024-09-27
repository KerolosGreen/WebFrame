import { useEffect } from "react";

const Fullpage = ({fullpage,setfullpage})=>{

    useEffect(
        ()=>{
    document.addEventListener('readystatechange',()=>{
            if (document.readyState === 'complete') {
                handle_selection_label_fullpage();
            }
        })
        handle_selection_label_fullpage();
        },[fullpage]
    )
   
    

    const handle_selection_label_fullpage = ()=>{
        if(fullpage){
            document.getElementById('yes-fullpage').checked = true;
            document.getElementsByClassName('yes-full')[0].classList.add("checked");
            document.getElementsByClassName('no-full')[0].classList.remove("checked");
        }else{
            document.getElementById('no-fullpage').checked = true;
            document.getElementsByClassName('no-full')[0].classList.add("checked");
            document.getElementsByClassName('yes-full')[0].classList.remove("checked");
        }
    }

    const handle_change_yesFull = ()=>{
        setfullpage(true);
    }

    const handle_change_noFull = ()=>{
        setfullpage(false);
    }
    return(
        <div className="flex w-[94%] md:w-[500px] lg:w-[500px] justify-between items-center mob">
        <h4 className="font-semibold text-lg">Full Page ?</h4>
        <div className="flex">
        <input type="radio" className="hidden" id="yes-fullpage" name="yes_full" onClick={handle_change_yesFull}/>
        <label htmlFor="yes-fullpage"  className="yes-full py-1 px-5 rounded m-1 border bg-gray-200 border-gray-300 focus:bg-black focus:text-white transition cursor-pointer">Yes</label> 
        <input type="radio" className="hidden" id="no-fullpage" name="yes_full" onClick={handle_change_noFull}/>
        <label htmlFor="no-fullpage"  className="no-full py-1 px-5 rounded m-1 bg-gray-200 border border-gray-300 focus:bg-black focus:text-white transition cursor-pointer">No</label> 
        </div>
        </div>
    )
}
export default Fullpage;