import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";

export const GridIconsFooter = () => {
  return (
    
    <div className="flex gap-5 text-[40px] pt-5 leading-10 text-white">
    <FaFacebookF className="bg-green-variant rounded-full px-2.5 py-2.5" />
    <FaTwitter className="bg-green-variant rounded-full px-2.5 py-2.5" />
    <TiSocialLinkedin className="bg-green-variant rounded-full px-2 py-2" />
    <RiInstagramFill className="bg-green-variant rounded-full px-2.5 py-2" />
</div>
  )
}
