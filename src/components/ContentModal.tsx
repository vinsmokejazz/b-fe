import { Button } from "./Button"
import { CrossIcon } from "./icons/CrossIcon"
import { InputBox } from "./InputBox"

export const ContentModal = ({ open, onClose }) => {

  return <div>
    {open && <div className="w-screen h-screen opacity-60 bg-slate-500 fixed top-0 left-0 flex justify-center ">
      <div className="flex flex-col justify-center">
        <span className="bg-white opacity-100 p-4 rounded-xl">
          <div className="flex justify-end">
            <div onClick={onClose}> <CrossIcon /> </div>

          </div>
          <div>
            <InputBox placeholder={"title"} />
            <InputBox placeholder={"Link"} />
          </div>

          <div className="flex justify-center p-2"><Button variant="primary" text="Submit" /></div>

        </span>

      </div>

    </div>
    }

  </div>
}

