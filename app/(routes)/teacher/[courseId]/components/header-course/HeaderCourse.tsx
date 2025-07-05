'use client';
import { useState } from 'react';
import { IHeaderCourseProps } from './HeaderCourse.type';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, MoveLeft, Trash } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

export default function HeaderCourse({ idCourse, isPublished }: IHeaderCourseProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const onPublish = async (state: boolean) => {
        setIsLoading(true);
        try {
            await axios.patch(`/api/course/${idCourse}`, {
                isPublished: state
            });
            state
                ? toast.success('Course published successfully 🚀')
                : toast.success('Course unpublished successfully 👀');
        } catch (error) {
            console.error('Error updating course:', error);
            toast.error('Ups something went wrong while updating the course 😢');
        } finally {
            setIsLoading(false);
            router.refresh();
        }
    };

    const onDelete = async () => {
        setIsLoading(true);
        try {
            await axios.delete(`/api/course/${idCourse}`);
            toast.success('Course deleted successfully 🗑️');
        } catch (error) {
            console.error('Error deleting course:', error);
        } finally {
            router.push('/teacher');
            setIsLoading(false);
            toast.success('Redirecting to all courses...');
        }
    };

    return (
        <div>
            <div className='mb-4'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2'>
                    <Button onClick={() => router.push('/teacher')}>
                        <MoveLeft className='w-4 h-4' />
                        Back to all courses
                    </Button>
                    <div className='flex items-center gap-2'>
                        {isPublished
                            ? <Button
                                variant="outline"
                                onClick={onPublish.bind(null, false)}>Published <EyeOff /></Button>
                            : <Button
                                disabled={isLoading}
                                onClick={onPublish.bind(null, true)}
                            >Unpublished <Eye /></Button>
                        }
                        <Button
                            disabled={isLoading}
                            onClick={onDelete}
                            variant="destructive"
                        >
                            <Trash />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

