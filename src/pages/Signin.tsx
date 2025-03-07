import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";



export function SignIn(){
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const navigate=useNavigate();

  async function handleSignin(){
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;

    const response=await axios.post(`${BACKEND_URL}/api/v1/signin`,{
      username,
      password
    })
    const jwt = response.data.token;
    localStorage.setItem("token",jwt);
    navigate("/dashboard")
  }




return <div className="h-screen w-screen  bg-gray-200 flex justify-center items-center">
   <div className="bg-white rounded-xl border border-slate-300 shadow min-w-48 min-h-42 p-6 ">
      <p className="flex justify-center text-2xl font-medium p-2">Sign In</p>
    <InputBox placeholder="Username"/>
    <InputBox placeholder="Password"/>
    <div className="flex justify-center pt-4">
      <Button variant="primary" text="Sign In" onClick={handleSignin} fullWidth/></div>
    
    <div className="flex ">
      <p className="text-md pr-2">Don't have an account</p> 
      <Link className="font-semibold" to="/signup">Sign Up here</Link>
    </div>

   </div>
</div>
}