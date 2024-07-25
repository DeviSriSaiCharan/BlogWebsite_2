import { Button } from "@mui/material"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function Navbar(): JSX.Element{

    const [auth, setAuth] = useState<boolean>(false);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token) setAuth(true);
    })

    return (
        <nav className="h-20 flex px-16 items-center justify-between shadow-sm">
            <div>
                <Button variant="text">Search</Button>
            </div>
            <div>
                <h1 className="text-2xl font-medium">Blog</h1>
            </div>
            <div>
                {
                    !auth ?  <Button variant="outlined"><Link to='/signUp'>SIGN UP</Link></Button>
                         :  <div className="w-12 h-12 font-semibold text-2xl border border-black rounded-full flex items-center justify-center">C</div>
                }
                
            </div>
        </nav>
    )
}