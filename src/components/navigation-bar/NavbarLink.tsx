"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation";

interface NavBarLinkProps {
    children: React.ReactNode,
    route: string
}

const NavbarLink = ({children, route} : NavBarLinkProps) => {
    const currentPage = usePathname()
    return (
        <Link className={cn(" duration-100",currentPage==route ? " uppercase underline underline-offset-4 text-lg shadow-purple-400" : "")} href={route}>
            {children}
        </Link>
    )
}
export default NavbarLink