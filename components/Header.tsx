"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import CustomButton from "./CustomButton";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        `h-fit
        bg-gradient-to-b
        from-gray-700
        p-6`,
        className
      )}
    >
      {/* Nav controls */}
      <div className="w-full mb-4 flex items-center justify-between">
        {/* Back and forward buttons, only showing on Desktop */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        {/* Sign up and Log In buttons */}
        <div className="flex md:hidden gap-x-2 items-center">
          <CustomButton className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black size={20}" />
          </CustomButton>
          <CustomButton className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black size={20}" />
          </CustomButton>
        </div>
        {/* Home and Search buttons, only showing on Mobile view */}
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <CustomButton
                className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
              >
                Sign up
              </CustomButton>
            </div>
            <div>
              <CustomButton className="bg-white px-6 py-2">Log in</CustomButton>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
