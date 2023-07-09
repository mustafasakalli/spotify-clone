"use client";

import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { BiHome, BiSearch } from "react-icons/bi"
import Box from "./Box";

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            icon: BiHome,
            label: "Home",
            active: pathname !== "/search",
            href: "/"
        },
        {
            icon: BiSearch,
            label: "Search",
            active: pathname === "/search",
            href: "/search"
        }
    ], []);

    return (
    <div className="flex h-full">
        <div 
            className="
                hidden 
                md:flex 
                flex-col 
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2">
            <Box>
                "Sidebar navigator"
            </Box>
            <Box className="overflow-y-auto h-full">
                "Song Library"
            </Box>
        </div>
    </div>
  )
}

export default Sidebar;