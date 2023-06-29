function Navbar() {
    const a_style="no-underline text-white transition ease-in-out duration-500 hover:text-[#FFE600]"
    return (
        <div className=" grid grid-col-4  gap-4 fixed top-0  pt-3 " style={{width:"100%"}}>
            
                
            <div class="grid grid-cols-4 gap-4 text-white w-max" style={{width:"100%"}}>
                <div class="col-span-3 text-white" >
                    
                    <ul className="flex justify-evenly ">
                                        <li>
                                            <a href='https://tailwindcss.com/docs/text-color' className={a_style}>Home</a>
                                        </li>
                                        <li>
                                            <a href='https://tailwindcss.com/docs/text-color' className={a_style}>Search</a>
                                        </li>
                                        <li>
                                            <a  href='https://tailwindcss.com/docs/text-color'className={a_style}>Attractions</a>
                                        </li>
                                        <li>
                                            <a href='https://tailwindcss.com/docs/text-color' className={a_style}>Rewards</a>
                                            </li>
                    </ul>
                </div>
                
                
                <div className="text-white" >
                    <ul className=" flex justify-evenly">
                            <li >
                                <a href='https://tailwindcss.com/docs/text-color' className="rounded-md border-yellow-400 text-white">Sign Up</a>
                            </li>
                            <li>
                                <a href='https://tailwindcss.com/docs/text-color' className=" rounded-md border-yellow-400 text-white">Login</a>
                            </li>
                        </ul>

                </div>
            </div>
                
            
            

        </div>
    )


}

export default Navbar;


                 
