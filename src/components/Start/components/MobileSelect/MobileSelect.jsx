const MobileSelect = ({mob_device,setmob_device})=>{
    const hande_select_mobdevice=(event)=>{
        setmob_device(event.target.value)
    }
    return(
        <div className="flex justify-between items-center w-[94%] md:w-[500px] lg:w-[500px] m-1">
            <label htmlFor="web_url" className="text-lg font-semibold">Mobile</label>
            <select id="countries" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5" onChange={hande_select_mobdevice}>
            <option defaultValue disabled>Choose A mobile</option>
            <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
            <option value="iPhone 13 Pro">iPhone 13 Pro</option>
            <option value="iPhone 13">iPhone 13</option>
            <option value="iPhone 13 Mini landscape">iPhone 13 Mini (Landscape)</option>
            <option value="iPhone 13 Mini">iPhone 13 Mini</option>
            <option value="iPhone 13 Pro Max landscape">iPhone 13 Pro Max (Landscape)</option>
            <option value="iPhone 13 Pro landscape">iPhone 13 Pro (Landscape)</option>
            <option value="iPhone 13 landscape">iPhone 13 (Landscape)</option>
            <option value="iPhone 12 Mini landscape">iPhone 12 Mini (Landscape)</option>
            <option value="iPhone 12 Mini">iPhone 12 Mini</option>
            <option value="iPhone 12 Pro Max landscape">iPhone 12 Pro Max landscape</option>
            <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
            <option value="iPhone 12 Pro landscape">iPhone 12 Pro landscape</option>
            <option value="iPhone 12 Pro">iPhone 12 Pro</option>
            <option value="iPhone 12 landscape">iPhone 12 landscape</option>
            <option value="iPhone 12">iPhone 12</option>
            <option value="iPhone 11 Pro Max landscape">iPhone 11 Pro Max landscape</option>
            <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
            <option value="iPhone 11 Pro landscape">iPhone 11 Pro landscape</option>
            <option value="iPhone 11 Pro">iPhone 11 Pro</option>
            <option value="iPhone 11 landscape">iPhone 11 landscape</option>
            <option value="iPhone 11">iPhone 11</option>
            <option value="iPhone XR landscape">iPhone XR landscape</option>
            <option value="iPhone XR">iPhone XR</option>
            <option value="iPhone X landscape">iPhone X landscape</option>
            <option value="iPhone X">iPhone X</option>
            <option value="iPhone SE landscape">iPhone SE landscape</option>
            <option value="iPhone SE">iPhone SE</option>
            <option value="iPhone 8 Plus landscape">iPhone 8 Plus landscape</option>
            <option value="iPhone 8 Plus">iPhone 8 Plus</option>
            <option value="iPhone 8 landscape">iPhone 8 landscape</option>
            <option value="iPhone 8">iPhone 8</option>
            <option value="iPhone 7 Plus landscape">iPhone 7 Plus landscape</option>
            <option value="iPhone 7 Plus">iPhone 7 Plus</option>
            <option value="iPhone 7 landscape">iPhone 7 landscape</option>
            <option value="iPhone 7">iPhone 7</option>
            <option value="iPhone 6 Plus landscape">iPhone 6 Plus landscape</option>
            <option value="iPhone 6 Plus">iPhone 6 Plus</option>
            <option value="iPhone 6 landscape">iPhone 6 landscape</option>
            <option value="iPhone 6">iPhone 6</option>
            <option value="iPhone 5 landscape">iPhone 5 landscape</option>
            <option value="iPhone 5">iPhone 5</option>
            </select>
        </div>
    )
}
export default MobileSelect;