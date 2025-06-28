"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { BellRing, Search } from 'lucide-react'
import { CONSTANTS } from '../constants';

export const Navbar = () => {
    return (
        <div className='flex justify-between p-4 border-b bg-white h-16'>
            <SidebarTrigger />
            <div className='flex gap-2 items-center'>
                <div className='flex w-full mx-w-sm items-center border-gray-300 
            rounded-lg px-2.5 py-0.5'>
                    <Search className='w-6 h-6 border-0 mr-2' />
                    <Input
                        type='search'
                        placeholder={CONSTANTS.search}
                        className='border-0 shadow-none w-full' />
                </div>
                <Button variant="outline">
                    <BellRing />
                </Button>
                <SignedOut />
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}
