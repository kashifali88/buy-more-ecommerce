

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
<div className="">
    <p className="text-4xl font-bold text-blue-600 tracking-tight">
  buymore
</p>
    <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt architecto quo quaerat consequatur harum commodi. Laudantium, see mequenta and centa ardues</p>
</div>
<div>
    <p className="text-xl font-md mb-5">COMPANY</p>
    <ul className="flex flex-col text-gray-600 gap-1">
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
    </ul>
</div>
<div>
    <p className="text-xl font-md mb-5">GET IN TOUCH</p>
    <ul className="flex flex-col text-gray-600 gap-1">
        <li>+1-213-352-5858</li>
        <li>contact@buymore.com</li>
       
    </ul>
</div>
  </div>
  <div>
    <hr />
    <p className="py-5 text-center text-sm ">Copright 2025@ buymore.com - All Right Reserved.</p>
  </div>
    </div>
  )
}

export default Footer