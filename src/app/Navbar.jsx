import { LogOut, Moon, PanelLeftIcon, Settings, User } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button.jsx";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar.jsx";
import { ModeToggle } from "./MyComponents/changeMode";
import { SidebarTrigger } from "../components/ui/sidebar.jsx";
function Navbar() {
  return (
    <div className="flex justify-between mr-3 ml-3">
      <SidebarTrigger>
        <PanelLeftIcon/>
      </SidebarTrigger>
      <div className="flex-center-row gap-2">
        <Link href="/">DashBoard</Link>
        <ModeToggle/>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Setting
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
