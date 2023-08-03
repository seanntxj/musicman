"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      {/**
       * className="hidden md:flex" applies flexbox layout to the element when the screen size is at least medium (md) and hides it otherwise (hidden).
        className="flex-col" applies flexbox layout in a column direction, making its children stack vertically.
        className="gap-y-2" adds a vertical gap of 2 units between the children of this flex container.
        className="bg-black" sets the background color of the element to black.
        className="h-full" sets the height of the element to be 100% of its parent's height.
        className="w-[300px]" sets the width of the element to 300 pixels.
        className="p-2" applies padding of 2 units on all sides (top, right, bottom, left).
       */}
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {/* Pass each route item into a SidebarItem, pass the item data as props */}
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        {/* overflow-y-auto = add scroll bar if needed */}
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
