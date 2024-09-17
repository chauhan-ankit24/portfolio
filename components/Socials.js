import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookFill,
  RiDribbbleLine,
  RiBehanceLine,
  RiGithubFill,
  RiLinkedinFill
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="relative transform transition-transform duration-300 hover:scale-125 hover:rotate-6 hover:text-orange-500 p-2 rounded-full bg-accent-100 shadow-lg hover:shadow-xl group">
        <RiInstagramLine className="text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-orange-500 text-xs rounded py-1 px-2">
          Instagram
        </span>
        <div className="absolute inset-0 bg-accent opacity-10 rounded-full animate-custom-ping"></div>
      </Link>
      <Link href={''} className="relative transform transition-transform duration-300 hover:scale-125 hover:rotate-6 hover:text-blue-500 p-2 rounded-full bg-accent-100 shadow-lg hover:shadow-xl group">
        <RiFacebookFill className="text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-blue-500 text-xs rounded py-1 px-2">
          Facebook
        </span>
        <div className="absolute inset-0 bg-accent opacity-10 rounded-full animate-custom-ping"></div>
      </Link>

      <Link href={''} className="relative transform transition-transform duration-300 hover:scale-125 hover:rotate-6 hover:text-red-500 p-2 rounded-full bg-accent-100 shadow-lg hover:shadow-xl group">
        <RiYoutubeLine className="text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-red-500 text-xs rounded py-1 px-2">
          YouTube
        </span>
        <div className="absolute inset-0 bg-accent opacity-30 rounded-full animate-custom-ping"></div>
      </Link>

      <Link href={''} className="relative transform transition-transform duration-300 hover:scale-125 hover:rotate-6 hover:text-gray-500 p-2 rounded-full bg-accent-100 shadow-lg hover:shadow-xl group">
        <RiGithubFill className="text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
          Github
        </span>
        <div className="absolute inset-0 bg-accent opacity-30 rounded-full animate-custom-ping"></div>
      </Link>

      <Link href={''} className="relative transform transition-transform duration-300 hover:scale-125 hover:rotate-6 hover:text-blue-500 p-2 rounded-full bg-accent-100 shadow-lg hover:shadow-xl group">
        <RiLinkedinFill className="text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-blue-500 text-xs rounded py-1 px-2">
          LinkedIn
        </span>
        <div className="absolute inset-0 bg-accent opacity-30 rounded-full animate-custom-ping"></div>
      </Link>
    </div>
  );
};

export default Socials;
