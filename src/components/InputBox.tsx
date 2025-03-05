export const InputBox=({ onChange, placeholder }: { onChange?: () => void, placeholder: string }) =>{

  return <div>
    <input type="text" className="px-4 py-2 border rounded m-2" placeholder={placeholder} onChange={onChange}></input>
  </div>
}