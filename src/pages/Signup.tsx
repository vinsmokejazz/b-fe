import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";



export function Signup(){
return <div className="h-screen w-screen  bg-gray-200 flex justify-center items-center">
   <div className="bg-white rounded-xl border border-slate-300 shadow min-w-48 min-h-42 p-6 ">
    <InputBox placeholder="Username"/>
    <InputBox placeholder="Password"/>
    <div className="flex justify-center pt-4"><Button variant="primary" text="Sign Up" fullWidth/></div>
    

   </div>
</div>
}