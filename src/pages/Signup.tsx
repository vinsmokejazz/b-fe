import { useRef } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export  function Signup(){
   const usernameRef=useRef<HTMLInputElement>(null);
const passwordRef=useRef<HTMLInputElement>(null);
const navigate=useNavigate();


   const handleSignup=async()=>{
      const username=usernameRef.current?.value;
      const password=passwordRef.current?.value;
      
   await axios.post(`${BACKEND_URL}/api/v1/signup`,{
         username,
         password
   })
   navigate("/signin")
   alert("you have signed up!")
};



return <div className="h-screen w-screen  bg-gray-200 flex justify-center items-center">
   <div className="bg-white rounded-xl border border-slate-300 shadow min-w-48 min-h-42 p-6 ">
   <p className="flex justify-center text-2xl font-medium p-2">Sign Up</p>
    <InputBox ref={usernameRef} placeholder="Username"/>
    <InputBox ref={passwordRef} placeholder="Password"/>
    <div className="flex justify-center pt-4">
      <Button variant="primary" text="Sign Up" onClick={handleSignup} fullWidth/></div>
    

   </div>
</div>
}