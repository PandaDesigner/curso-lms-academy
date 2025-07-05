import { Chapter, Course } from '@prisma/client';


export interface ICourseForm {
    course: CourseWithRelations
}

type CourseWithRelations = Course & { chapters: Array<Chapter> }