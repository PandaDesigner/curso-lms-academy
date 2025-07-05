'use client';
import z from 'zod';
import { formSchema } from './FormCreateCourse.form';
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { formTeacher, headerConstant } from '../constant/constants';
import { toast } from 'sonner';
import { useState } from 'react';



export const FormCreateCourse = () => {
    const router = useRouter();
    const [isLoading, setIsloading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseName: "",
            slug: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsloading(true)
            const response = await axios.post('/api/course', values);
            toast('Course created successfully 🎉');
            form.reset();
            router.push(`/teacher/${response.data.id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            toast.error('Error creating course 😢');
        } finally {
            setIsloading(false)
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{formTeacher.courseLabel}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={formTeacher.coursePlaceholder}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                {formTeacher.courseDescription}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{formTeacher.slugLabel}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={formTeacher.slugPlaceholder}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                {formTeacher.slugDescription}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    className='bg-violet-900 transition-all
                    border-violet-50 border-1 rounded-md text-white hover:bg-violet-950 cursor-pointer'
                >
                    {headerConstant.submitBtn}
                </Button>
            </form>
        </Form>
    )
}
