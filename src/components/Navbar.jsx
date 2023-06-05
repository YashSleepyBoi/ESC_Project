function Navbar() {
    
    return (
        <div className=" grid grid-col-4  gap-4 mt-0 p-auto">
            <div className="col-span-3 ">
                <ul className="flex justify-evenly ">
                    <li>
                        <a href='https://tailwindcss.com/docs/text-color' className="no-underline text-white ">Home</a>
                    </li>
                    <li>
                        <a href='https://tailwindcss.com/docs/text-color' className="no-underline text-white">Search</a>
                    </li>
                    <li>
                        <a  href='https://tailwindcss.com/docs/text-color'className="no-underline text-white">Attractions</a>
                    </li>
                    <li>
                        <a href='https://tailwindcss.com/docs/text-color' className="no-underline text-white">Rewards</a>
                        </li>
                 </ul>
            </div>
            
            
            <div className="..." >
                <ul className=" flex justify-around ">
                        <li>
                            <a href='https://tailwindcss.com/docs/text-color' className=" rounded-md border-yellow-400 text-white">Sign Up</a>
                        </li>
                        <li>
                            <a href='https://tailwindcss.com/docs/text-color' className=" rounded-md border-yellow-400 text-white">Login</a>
                        </li>
                    </ul>
            </div>
                
                
            
            

        </div>
    )


}

export default Navbar;
