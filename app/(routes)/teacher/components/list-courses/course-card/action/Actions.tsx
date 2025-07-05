'use client';
import { useRouter } from 'next/navigation';
import { Edit, Trash } from 'lucide-react'
import { ActionsProps } from './Actions.type'
import { Button } from '@/components/ui/button'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import axios from 'axios';
import { toast } from 'sonner';

export const Actions = ({ courseId }: ActionsProps) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/teacher/${courseId}`);
    }
    const handleDelete = () => {
        try {
            axios.delete(`/api/course/${courseId}`);
            toast.success('Course deleted successfully');

        } catch (error) {
            console.log('[HANDEL_ERROR]:', error)
        } finally {
            router.refresh();
        }
    }

    return (
        <div
            className='flex flex-col items-center gap-2 w-full lg:max-w-42'>
            <Button
                onClick={handleEdit}
                className='w-full bg-violet-900 hover:bg-violet-950 cursor-pointer'>
                Edit <Edit className='w-4 h-4' />
            </Button>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className='w-full text-red-500 border-red-500 
                    hover:bg-red-100 hover:text-red-500 cursor-pointer'>
                        Delete <Trash className='w-4 h-4' />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. It will permanently delete
                            your course and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
