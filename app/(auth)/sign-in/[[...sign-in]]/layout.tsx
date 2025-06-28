import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function AuthLayout({ children }: Props) {
    return (
        <div className='w-full h-screen'>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='absolute top-0 left-0 h-full w-full
            bg-gradient-to-r from-indigo-400 to-indigo-700 z-[-1]'/>
                {children}
            </div>
        </div>

    )
}

export default AuthLayout