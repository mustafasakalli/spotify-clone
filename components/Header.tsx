"use client"

import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from "react-icons/rx"
import { RxCaretRight } from "react-icons/rx"


interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className}) => {
  
    
    const handleLogout = () => {
        //logout logic
    }
  
    return (
    <div className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-emerald-600
        p-6

    `, className)}>
        
        <div className="w-full mb-4 flex items-center justify-between">
            <div className="hidden md:flex gap-x-2 items-center">
                <button className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-60
                    transition
                    ">
                        <RxCaretLeft size={26} />
                </button>
                <button className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-60
                    transition
                    ">
                        <RxCaretRight size={26} />
                </button>
            </div>  
        </div>
        
    </div>
  )
}
