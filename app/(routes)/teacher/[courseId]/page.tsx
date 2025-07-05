import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import HeaderCourse from './components/header-course/HeaderCourse';
import CourseForm from './components/course-form/CourseForm';
import CourseImage from "@/app/(routes)/teacher/[courseId]/components/course-image/CourseImage";
import CoursePrice from "@/app/(routes)/teacher/[courseId]/components/course-price/CoursePrice";
import ChapterBlock from "@/app/(routes)/teacher/[courseId]/components/chapters-block/ChaptersBlock";


interface Props {
    params: {
        courseId: string
    }
}

export default async function CourseDetailPage({ params }: Props) {
    const { courseId } = await params;
    const { userId } = await auth();
    if (!userId) return (
        <div className='flex-1 flex items-center justify-center'>
            <p>Unauthorized</p>
        </div>
    );

    const course = await prisma.course.findUnique({
        where: {
            id: courseId,
            userId
        },
        include: {
            chapters: true
        }
    });

    if (!course) {
        return (
            <div className='flex-1 flex items-center justify-center'>
                <p>Course not found</p>
            </div>
        );
    }

    return (
        <div className='m-6'>
            <HeaderCourse idCourse={course.id} isPublished={course.isPublished} />
            <CourseForm course={course} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-6'>
                <CourseImage idCourse={course.id} imageCourse={course.imageUrl}/>
                <CoursePrice courseId={course.id} priceCourse={course.price} />
            </div>
            <ChapterBlock />
        </div>
    )
};
