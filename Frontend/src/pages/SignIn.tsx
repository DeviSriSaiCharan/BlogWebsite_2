import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import {RiArrowLeftSLine} from '@remixicon/react';
import axios from "axios";
import { FormEvent, useState } from "react";

export default function SignIn():JSX.Element{

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate: NavigateFunction = useNavigate();

    async function handleSignin(e: FormEvent){
        e.preventDefault();
        try{
            const {data} = await axios.post('http://localhost:3000/api/auth/signIn', {
                email: email,
                password: password
            })

            if(data.success){
                localStorage.setItem('token', data.token);
                navigate('/');
            }
            else{
                alert(data.message);
            }
        }
        catch(err: any){
            // console.log(err);
            if(err.response.status == 400){
                alert(err.response.data.message);
            }
            else{
                alert('Something went wrong');
            }
            
        }
    }

    return (
        <div className="w-full h-screen flex">
            <div className="absolute left-0 top-0 p-4 text-2xl text-white">
                <h1 className="font-fino px-2">Blog Website.</h1>
            </div>
            <div className="absolute bottom-0 left-0 p-4 text-xl">
                <Link className="flex items-center font-fino  text-sm tracking-widest text-white" to='/Home' >
                    <RiArrowLeftSLine/>Home
                </Link>
            </div>
            <div className="w-1/2 h-full bg-blue-950">

            </div>
            <div className="absolute px-6 py-10 w-2/6 left-[33%] top-[12%] rounded-2xl h-3/4 drop-shadow-lg bg-white">
                <h1 className="font-fino text-center mb-10 font-semibold text-gray-400 text-2xl">SIGN UP</h1>
                <form onSubmit={handleSignin} className="flex flex-col gap-10 justify-between h-96">
                    <div className="input-div">
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-div">
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-full shadow-lg font-semibold bg-blue-950 rounded-full px-4 py-3 text-white">Sign in</button>
                    <p className="text-center text-blue-950 text-base">Already have an account? <Link className="underline font-semibold" to='/signIn'>Sign in</Link></p>
                </form>
            </div>
            <div className="w-1/2 h-full">

            </div>
        </div>
    )
}