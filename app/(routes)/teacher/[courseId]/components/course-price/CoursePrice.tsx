'use client';
import { TitleBlock } from '../title-block';
import {ICoursePrice} from "@/app/(routes)/teacher/[courseId]/components/course-price/CoursePrice.type";
import {Constants, course_price_item} from "@/app/(routes)/teacher/[courseId]/constants/constants";
import {DollarSign, Edit3Icon} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {useCallback, useState} from "react";
import axios from "axios";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";

const CoursePrice = ({courseId, priceCourse}:ICoursePrice) => {
    const [price, setPrice] = useState<string | undefined>( priceCourse || "Free" );

    const onChangePrice = useCallback(async ( ) => {
        try {
            await axios.patch(`/api/course/${courseId}`,{
                price
            });
            setPrice(price);
            toast.success('Successfully updated the price 🚀');
        } catch (error) {
            console.log(error);
            toast.error('🙅 Error while updating course price');
        }
    },[courseId, price]);

    return (
        <div className="p-4 rounded-lg bg-white drop-shadow-sm h-fit">
            <TitleBlock title={Constants.course_price_title} icon={DollarSign}  />
            <Select onValueChange={setPrice} defaultValue={price} >
                <SelectTrigger className="w-full" >
                    <SelectValue placeholder={Constants.course_price_trigger} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{Constants.course_price_trigger}</SelectLabel>
                        {course_price_item.map((item, index) => (
                            <SelectItem key={`key-${index}`} value={item.value}>{item.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button className="mt-4 w-full" variant="outline" disabled={!price} onClick={onChangePrice} ><Edit3Icon/> {Constants.course_price_button}</Button>
        </div>
    )
};

export default CoursePrice;
