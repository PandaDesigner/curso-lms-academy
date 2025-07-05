"use client";
import {ICourseImageProps} from "@/app/(routes)/teacher/[courseId]/components/course-image/CourseImage.type";
import {TitleBlock} from "@/app/(routes)/teacher/[courseId]/components";
import {Constants} from "@/app/(routes)/teacher/[courseId]/constants/constants";
import {FileImage, Pencil} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {UploadButton} from "@/utils/uploadthing";
import axios from "axios";
import {toast} from "sonner";

const CourseImage = ({idCourse, imageCourse}: ICourseImageProps) => {
    const [isEditing, setIsEditings] = useState(false);
    const [images, setImages] = useState(imageCourse);

    const onChangeImage = async (imageUrl:string) => {
        setIsEditings(true);
        try{
            axios.patch(`/api/course/${idCourse}`, {
                imageUrl
            });
            setImages(imageUrl);
        }catch{
            toast.error('Error occured.');
        } finally {
            toast.success("👏 Course image updated successfully. 🚀" );
            setIsEditings(false);
        }
    }

    return (
        <div className="p-4 rounded-lg bg-white drop-shadow-sm h-fit">
            <TitleBlock title={Constants.course_image_title} icon={FileImage}/>
            {
                isEditing
                ?(
                    <div className="bg-stone-200 p-4 mt-2 rounded-lg">
                    <UploadButton
                        endpoint={"imageUploader"}
                        onClientUploadComplete={(res)=>{
                                onChangeImage(res[0].ufsUrl);
                        }}
                        onUploadError={()=>{
                            toast.error('Error uploading image. 🤦🏽');
                        }}
                    />
                    </div>)
                :(<Image
                src={ images || "/default.png" }
                alt="Course Image"
                className="w-full h-full rounded-md"
                width={500}
                height={400}
            />)}
            <Button
                className="w-full mt-4"
                variant="outline"
                size="sm"
                onClick={() => setIsEditings((!isEditing))}
            >
                <Pencil/> Edit Image
            </Button>
        </div>
    )
}
export default CourseImage;