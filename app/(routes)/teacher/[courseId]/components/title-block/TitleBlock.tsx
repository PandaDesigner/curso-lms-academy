import { TitleBlockProps } from './TitleBlock.type'

export const TitleBlock = ({ title, icon: Icon }: TitleBlockProps) => {
    return (
        <div className='flex items-center mb-6 gap-1'>
            <div className="p-2 rounded-full bg-indigo-500 text-white">
                <Icon className='h-5 w-5 text-white' />
            </div>
            <h3 className='text-xl font-semibold'>{title}</h3>
        </div>
    )
}
