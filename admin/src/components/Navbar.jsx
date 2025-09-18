
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
          <span className="text-4xl font-bold text-blue-600 tracking-tight">
  buymore
<p className="text-xs font-[20px] text-gray-600 tracking-tight" >ADMIN PANEL</p>
</span>
        <button onClick={()=>setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm ">Logout</button>
    </div>
  )
}

export default Navbar