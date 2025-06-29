import Image from 'next/image'
import { CardsProps } from './CourseCard.type'

export const CourseCard = ({ course }: CardsProps) => {
    const { id, title, price, level, imageUrl, description } = course
    return (
        <div className='relative'>
            <div className='flex flex-col lg:flex-row gap-4 
            items-center justify-between'>
                <div className='flex flex-col lg:flex-row gap-4 items-start'>
                    <Image
                        src={imageUrl || '/default.png'}
                        alt={title}
                        width={150}
                        height={150}
                        className='rounded-md max-w-52' />
                    <p className='text-body'>{title}</p>
                </div>
            </div>
        </div>
    )
}
