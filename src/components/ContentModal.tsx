import { useRef, useState } from "react"
import { Button } from "./Button"
import { CrossIcon } from "./icons/CrossIcon"
import { InputBox } from "./InputBox"
import axios from "axios"
import { BACKEND_URL } from "../config"
enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}


export const ContentModal = ({ open, onClose }) => {

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
    onClose();
  }




  return <div>
    {open && <div className="w-screen h-screen opacity-60 bg-slate-500 fixed top-0 left-0 flex justify-center ">
      <div className="flex flex-col justify-center">
        <span className="bg-white opacity-100 p-4 rounded-xl">
          <div className="flex justify-end">
            <div onClick={onClose}> <CrossIcon /> </div>

          </div>
          <div>
            <InputBox ref={titleRef} placeholder={"title"} />
            <InputBox ref={linkRef} placeholder={"Link"} />
          </div>

          <div><h1 className="flex justify-center font-semibold p-2">Type:</h1>
            <div className="flex gap-1 justify-center ">
              <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                setType(ContentType.Youtube)
              }} />

              <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                setType(ContentType.Twitter)
              }} />

            </div>


          </div>

          <div className="flex justify-center p-2"><Button onClick={addContent} variant="primary" text="Submit" /></div>

        </span>

      </div>

    </div>
    }

  </div>
}

