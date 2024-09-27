const PcResolution = ({pcres,setpcres})=>{
    const hande_select_pcres=(event)=>{
        setpcres(event.target.value)
    }
    return(
        <div className="flex justify-between items-center w-[94%] md:w-[500px] lg:w-[500px] m-1">
            <label htmlFor="web_url" className="text-lg font-semibold">Resolution</label>
            <select id="countries" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5" onChange={hande_select_pcres}>
            <option defaultValue disabled>Choose a Resolution</option>
            <option value="1920x1080">1920 x 1080</option>
            <option value="1366×768">1366 × 768</option>
            <option value="1280×1024">1280 × 1024</option>
            <option value="1440×900">1440 × 900</option>
            </select>
        </div>
    )
}
export default PcResolution;