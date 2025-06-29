import { CourseCard } from './course-card'
import { ListCoursesProps } from './ListCourses.type'

export const ListCourses = (props: ListCoursesProps) => {
    const { courses } = props

    if (courses.length === 0) return (
        <div className='h-64 flex flex-col justify-center items-center bg-white 
        my-4 mx-6 drop-shadow-2xl rounded-2xl'>
            <p>
                No courses found 😥
            </p>
        </div>
    )

    return (
        <div className='flex flex-col justify-center items-center bg-white 
        my-4 mx-6 drop-shadow-2xl rounded-2xl p-4'>
            <h2 className='text-2xl font-bold w-full mb-4'>
                Courses
            </h2>
            <div className='w-full flex flex-col'>
                {courses.map((course) => (
                    <div key={course.id} className='w-full flex flex-col mb-4'>
                        <CourseCard course={course} />
                        <div className='border-t border-stone-200 w-full mt-4' />
                    </div>
                ))}
            </div>
        </div>
    )
}
