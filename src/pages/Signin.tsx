import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";



export function SignIn(){
return <div className="h-screen w-screen  bg-gray-200 flex justify-center items-center">
   <div className="bg-white rounded-xl border border-slate-300 shadow min-w-48 min-h-42 p-6 ">
      <p className="flex justify-center text-2xl font-medium p-2">Sign In</p>
    <InputBox placeholder="Username"/>
    <InputBox placeholder="Password"/>
    <div className="flex justify-center pt-4"><Button variant="primary" text="Sign In" fullWidth/></div>
    
    <div className="flex ">
      <p className="text-md pr-2">Don't have an account</p> 
      <Link className="font-semibold" to="/signup">Sign Up here</Link>
    </div>

   </div>
</div>
}