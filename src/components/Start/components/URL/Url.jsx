const Url = ({url,seturl})=>{

    const handle_change_url = (event)=>{
        seturl(event.target.value)
    }
    
    return(
        <div className="flex items-center justify-between w-[94%] md:w-[500px] lg:w-[500px] m-1">
            <label htmlFor="web_url" className="text-lg font-semibold">Website Url</label>
            <input onChange={handle_change_url} type="url" id="web_url" placeholder="URL : https://www.google.com" className="bg-gray-50 border font-semibold border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[60%] p-2.5"/>
        </div>
    )
}
export default Url;