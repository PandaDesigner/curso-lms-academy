import { SidebarMenuItem, SidebarMenuButton, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { LucideProps } from 'lucide-react'
import Link from 'next/link'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface Props {
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    isCollapsed: boolean,
    variant?: "default" | "sub"
}

export const MenuItemSidebar = ({
    title,
    url,
    icon: Icon,
    isCollapsed,
    variant = "default"
}: Props) => {

    if (variant === "default") {
        return (
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href={url}>
                        <div className='p-1 rounded-lg 
                                    text-white bg-indigo-400'>
                            <Icon className='w-4 h-4' />
                        </div>
                        {
                            isCollapsed &&
                            <span className='tracking-wide'>{title}</span>
                        }
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        )
    }
    if (variant === "sub") {
        return (
            <SidebarMenuSubItem key={title}>
                <SidebarMenuSubButton asChild>
                    <Link href={url}>
                        <div className='p-1 rounded-lg
                                    text-white bg-slate-400'>
                            <Icon className='w-4 h-4' />
                        </div>
                        {
                            isCollapsed &&
                            <span className='tracking-wide'>{title}</span>
                        }
                    </Link>
                </SidebarMenuSubButton>

            </SidebarMenuSubItem>
        )
    }
}
