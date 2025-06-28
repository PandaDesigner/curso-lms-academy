import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { Header } from './components';

export default async function TeacherPage() {
    const user = await currentUser();
    if (!user) {
        return <p>Not signed in</p>
    }
    return (
        <div>
            <Header />
        </div>
    )
}
