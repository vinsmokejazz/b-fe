import { Link } from "react-router-dom";
import { DeleteIcon } from "./icons/DeleteIcon"
import { DocumentIcon } from "./icons/DocumentIcon"
import { ShareIcon } from "./icons/ShareIcon"


interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export const Card = ({ title, link, type }: CardProps) => {

  return <div>
    <div className="bg-white p-4 rounded-md shadow-md border min-h-48 min-w-72 border-gray-200 max-w-72">
      <div className="flex justify-between">

        <div className="flex gap-2">
          <div className="flex items-center text-gray-500">
            <DocumentIcon />
          </div>
          <div className=" flex items-center text-md">{title}</div>
        </div>


        <div className="flex  text-gray-500 gap-3 items-center ">
          <div ><Link to={link} target="_blank">{<ShareIcon/>}</Link></div>
          <div> <DeleteIcon /></div>
         
        </div>

      </div>

      <div className=" pt-3">

        {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")}
          title="YouTube video player" allow="accelerometer; autoplay; 
  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

        {type === "twitter" &&
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>}

      </div>

    </div>

  </div>
}