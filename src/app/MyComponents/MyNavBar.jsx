import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { navLinks } from '../constant/Links'
function MyNavBar() {
    return (
        <div className='overflow-hidden container flex justify-between items-center'>
            <div className='mb-4 text-3xl font-bold'>Logo</div>
            <NavigationMenu>
                <NavigationMenuList>
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.id}>
                            <NavigationMenuLink asChild>
                                <Link href={link.id}>{link.title}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                    
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default MyNavBar