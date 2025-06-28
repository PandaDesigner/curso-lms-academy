import { CONSTANTS } from '@/components/Shared'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div
            className='flex flex-col items-center 
        justify-center h-screen text-center'>
            <p className='text-8xl font-bold'>404</p>
            <p>{CONSTANTS.notFound}</p>
            <Button asChild>
                <Link href="/" className='mt-4'>
                    {CONSTANTS.btnWelcome}
                </Link>
            </Button>
        </div>
    )
}
