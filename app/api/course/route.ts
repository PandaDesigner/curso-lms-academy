import prisma from "@/lib/prisma";
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const { courseName, slug } = await req.json();

        if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        const existing = await prisma.course.findUnique({
            where: {
                slug
            }
        });

        if (existing) {
            return new NextResponse("Course already exists", { status: 400 });

        }

        const course = await prisma.course.create({
            data: {
                userId,
                title: courseName,
                slug
            }
        });

        return NextResponse.json(course)
    } catch (error) {
        console.log("[COURSE_CREATE]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

