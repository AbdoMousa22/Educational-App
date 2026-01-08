import { rateingData } from "../data";
import SectionHeader from "./SectionHeader";
import SingleReview from './SingleReview';

export default function Reviews(){
    return(
        <>
                  <header className="reviews">
                     <div className="container">
                         <SectionHeader title="Make Online Education Acessible"
                           description="Education is the most powerful tool to unlock
                           potential ignite curlosity,and shape a brighter future. At our platform, We
                           believe in making learning accessible, engaging, and transformative,
                           empowering students to achieve their dreams and build the skills they 
                           need for success in an ever-changing world."
                         />
                         <div className="rateing">
                            {rateingData.map((rate)=>{
                                const {id,description,img,job,name,stars}=rate;
                                return ( 
                                        <>
                                            <SingleReview key={id} description={description} img={img} job={job} name={name} stars={stars}/>
                                        </>
                                      )
                            })}
                         </div>
                       
                     </div>
                  </header>
        </>
    )
}