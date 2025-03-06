interface InputProps{
  placeholder: string;
  ref?:any;
}


export const InputBox=({ ref, placeholder }: InputProps) =>{

  return <div>
    <input type="text" className="px-4 py-2 border rounded m-2" ref={ref} placeholder={placeholder} ></input>
  </div>
}