import { courseData } from "../data";
import Course from "./SingleCourse.js";

import SectionHeader from "./SectionHeader";

export default function Courses(){
    return(
        <>
         <header className="courses">
            <div className="container">
                <SectionHeader title="Make Online Education Acessible"
                  description="Education is the most powerful tool to unlock
                  potential ignite curlosity,and shape a brighter future. At our platform, We
                  believe in making learning accessible, engaging, and transformative,
                  empowering students to achieve their dreams and build the skills they 
                  need for success in an ever-changing world."
                />
                <div className="courses-container">
                    {courseData.map((course)=>{
                       const {id,img,department,title,rating,description,sales,price,discount,duration,lessons}=course;
                       return (
                        <>
                          <Course key={id} img={img} department={department}  title={title} rating={rating} description={description} sales={sales} price={price} discount={discount} duration={duration} lessons={lessons}/>
                        </>
                       )
                    })}
                </div>
            </div>
         </header>
        </>
    )
}