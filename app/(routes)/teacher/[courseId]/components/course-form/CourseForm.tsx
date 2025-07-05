'use client';
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import axios from "axios";

import { Cog } from "lucide-react";
import { TitleBlock } from "../title-block";
import { ICourseForm } from "./CourseForm.type";
import { useCallback } from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema } from "./CourseForm.form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Constants} from "@/app/(routes)/teacher/[courseId]/constants/constants";

import {toast} from "sonner";

export default function CourseForm({ course }: ICourseForm) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: course.title || '',
            slug: course.slug || '',
            description: course.description || '',
            category: course.category || '',
            level: course.level || ''
        }
    });

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
        try{
            axios.patch(`/api/course/${course.id}`, {
                title: values.title,
                slug: values.slug,
                description: values.description,
                category: values.category,
                level: values.level,
            })
        } catch (error) {
            console.log(error);
            toast.error(`${error}`);
        } finally {
            toast.success('update course successfully 🥳');
        }
        }, [course.id])


    return (
        <div className='p-6 bg-white rounded-lg shadow-md'>
            <TitleBlock title='Configuration of course' icon={Cog}/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{Constants.course_title}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="title" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='slug'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{Constants.course_slug}</FormLabel>
                                    <FormControl>
                                        <Input placeholder='title-slug' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Unique URL identifier for this course.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{Constants.course_category}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className='w-full'>
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder='Select Category for course'/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='m@example.com'>
                                                m@example.com
                                            </SelectItem>
                                            <SelectItem value='m@google.com'>
                                                m@google.com
                                            </SelectItem>
                                            <SelectItem value='m@support.com'>
                                                m@support.com
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='level'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{Constants.course_level}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className='w-full'>
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder='Level Select'/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='Beginner'>
                                                Beginner
                                            </SelectItem>
                                            <SelectItem value='Intermediate'>
                                                Intermediate
                                            </SelectItem>
                                            <SelectItem value='Advanced'>
                                                Advanced
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='description'
                            render={({field}) => (
                                <FormItem className='col-span-2'>
                                    <FormLabel>{Constants.course_description}</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder='Add the course description here.'
                                            className='resize-none'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Here you can add course descriptions.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type='submit'>{Constants.button_title}</Button>
                </form>
            </Form>
        </div>
    );
}
