import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { headerConstant } from './constant/constants'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FormCreateCourse } from './form-create-course/FormCreateCourse'


export const Header = () => {
    return (
        <div className='my-4 mx-6 border rounded-lg bg-gradient-to-r 
        from-white to-blue-50 drop-shadow-xl'>
            <div className='flex justify-between items-center py-4 px-6'>
                <h1 className='text-indigo-950 font-bold'>
                    {headerConstant.title}
                </h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='bg-violet-900 transition-all cursor-pointer
                    border-violet-50 border-1 rounded-md text-white hover:bg-violet-950'>
                            {headerConstant.btnDialog}
                            <Plus />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{headerConstant.dialogTitle}</DialogTitle>
                            <FormCreateCourse />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
