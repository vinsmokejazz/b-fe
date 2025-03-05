import { ReactElement } from "react";

export const SideBarItems = ({ icon, text }: {
  text: string;
  icon: ReactElement;
}) => {

  return <div className="flex p-2 cursor-pointer hover:bg-gray-200 rounded-xl transition-all duration-70 ">

    <div className="pr-2 ">{icon}</div>
    <div className="text-gray-700 flex font-medium ">{text}</div>

  </div>

}