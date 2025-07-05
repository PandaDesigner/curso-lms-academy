import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

interface Params {
    params: {
        courseId: string
    }
}

export async function DELETE(req: Request, { params }: Params) {
    try {
        const { userId } = await auth();
        if (!userId) return new NextResponse("Unauthorized", { status: 401 });
        const { courseId } = await params;

        const course = await prisma.course.delete({
            where: {
                id: courseId,
                userId
            }
        })

        return NextResponse.json(course);
    } catch (error) {
        console.log("[COURSE_DELETE]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }

};

export async function PATCH(req: Request, { params }: Params) {
    try {
        const { userId } = await auth();
        const { courseId } = await params;
        const values = await req.json();

        if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        const course = await prisma.course.update({
            where: {
                id: courseId,
                userId: userId
            },
            data: {
                ...values,
            }
        });

        if (!course) return new NextResponse("Course not found", { status: 404 });

        return NextResponse.json(course);

    } catch (error) {
        console.log("[COURSE_UPDATE]", error);
        return new NextResponse("Internal Server Error", { status: 500 });

    }
}