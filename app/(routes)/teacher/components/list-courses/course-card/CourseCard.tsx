import Image from 'next/image'
import { CardsProps } from './CourseCard.type'
import { ChartNoAxesColumn, DollarSign } from 'lucide-react'
import { Actions } from './action'

export const CourseCard = ({ course }: CardsProps) => {
    const { id, title, price, level, imageUrl, description, isPublished } = course
    return (
        <div className='relative'>
            <div className='flex flex-col lg:flex-row gap-4 
            items-center justify-between'>
                <div className='flex flex-col lg:flex-row gap-4 items-center md:items-start w-full'>
                    <Image
                        src={imageUrl || '/default.png'}
                        alt={title}
                        width={150}
                        height={150}
                        className='rounded-md max-w-52' />
                    <div className='w-full'>
                        <div className='flex items-center justify-center md:justify-start gap-2 w-full'>
                            <h2 className='text-xl font-medium lg:font-bold text-center 
                            lg:text-start'>{title}</h2>
                            {isPublished
                                ? <span className='inline-block 
                                bg-emerald-100 text-emerald-600 text-xs font-medium 
                                px-2 py-1 rounded-md mt-1'>Publish</span>
                                : <span className='inline-block 
                                bg-gray-100 text-gray-600 text-xs font-medium 
                                px-2 py-1 rounded-md mt-1'>Unpublish</span>
                            }
                        </div>
                        {
                            description && <p className='w-full max-w-lg text-sm 
                        text-gray-400 line-clamp-1 '>{description}</p>
                        }
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex gap-1 items-center 
                            text-sm mt-2'>
                                <DollarSign className='w-4 h-4 text-gray-400' />
                                <span className='text-sm text-gray-400'>{'price: '}
                                    <span className='text-gray-500 font-semibold'>
                                        {price || 0}
                                    </span>
                                </span>
                            </div>
                            <div className='flex gap-1 items-center 
                            text-sm mt-2'>
                                <ChartNoAxesColumn className='w-4 h-4 text-gray-400' />
                                <span className='text-sm text-gray-400'>{'Level: '}
                                    <span className='text-gray-500'>
                                        {level || ' Beginner'}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Actions courseId={id} />
            </div>
        </div>
    )
}
