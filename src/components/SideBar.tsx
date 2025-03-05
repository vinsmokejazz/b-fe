import { Logo } from "./icons/Logo"
import { Xicon } from "./icons/Xicon"
import { YoutubeIcon } from "./icons/YoutubeIcon"
import { SideBarItems } from "./SideBarItems"

export const SideBar = () => {

  return <div className="w-72 h-screen  fixed left-0 top-0 bg-white ">
    <div className="p-4 ">
      <div className="flex items-center pt-2 pl-2 mb-3">
        <div className="text-purple-600">
          <Logo />
        </div>
        <div className="text-3xl p-2 font-medium "> Brainly</div>
      </div>

      <div className="pl-4 pt-2 ">
        <SideBarItems icon={<Xicon />} text="Twitter" />
        <SideBarItems icon={<YoutubeIcon />} text="Youtube" />
      </div>
    </div>

  </div>

}