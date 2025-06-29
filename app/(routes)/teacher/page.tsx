import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { Header, ListCourses } from './components';
import prisma from '@/lib/prisma';

export default async function TeacherPage() {
    const user = await currentUser();
    if (!user) {
        return <p>Not signed in</p>
    }

    const courses = await prisma.course.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <div>
            <Header />
            <ListCourses courses={courses} />
        </div>
    )
}
