'use client';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuSub, useSidebar } from '@/components/ui/sidebar'
import Link from 'next/link';
import { routes, routesTeachers } from './AppSidebar.data';
import { MenuItemSidebar } from '.';
import Image from 'next/image';
import { CONSTANTS } from '@/components/Shared';


export const AppSidebar = () => {
    const { state } = useSidebar()
    return (
        <Sidebar collapsible='icon'>
            <SidebarContent className='bg-white'>
                <SidebarHeader>
                    <Link href='/' className='flex flex-row gap-1 items-center' >
                        <Image
                            src={'/logo.png'}
                            alt={'logo Academy'}
                            height={35}
                            width={35}
                        />
                        {state === "expanded" &&
                            <span className='text-xl 
                            font-semibold 
                            text-slate-700 
                            tracking-wide'>
                                {CONSTANTS.app_title}
                            </span>}
                    </Link>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel>{CONSTANTS.platform}</SidebarGroupLabel>
                    <SidebarMenu className='space-y-2'>
                        {
                            routes.map((routes) => (
                                <MenuItemSidebar
                                    key={routes.title}
                                    {...routes}
                                    isCollapsed={state === "expanded"}
                                    variant='default'
                                />
                            ))
                        }
                    </SidebarMenu>
                    <SidebarMenu className='mt-4'>
                        <SidebarGroupLabel>{CONSTANTS.teachers}</SidebarGroupLabel>
                        <SidebarMenuItem>
                            <SidebarMenuSub>
                                {
                                    routesTeachers.map((route) => (
                                        <MenuItemSidebar
                                            key={route.title}
                                            {...route}
                                            isCollapsed={state === "expanded"}
                                            variant='sub'
                                        />
                                    ))
                                }
                            </SidebarMenuSub>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

