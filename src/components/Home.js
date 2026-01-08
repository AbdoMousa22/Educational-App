import { cardData } from "../data";
import Card from "./Card";

export default function Home(){
    return(
        <>
          <section id="home">
            <div className="container">
                <div className="home-header">
                    <span>Join Us</span>
                    <h1>Best Learining Opportunities</h1>
                    <p>We know ho w large objects will act, but things on a small scale
                        just do not act that way.
                    </p>
                    <a href="#" className="btn btn-red">
                        Get Quote Now
                    </a>
                    <a href="#" className="btn btn-transparent">
                        Learn More
                    </a>
                </div>
                <div className="card-container">
                    {cardData.map((card)=>{
                       const {id,title,color,description,img,bgColor}=card;
                        return(
                            <Card key={id} title={title} color={color} description={description} img={img} bgColor={bgColor} />
                        )
                    })}

                </div>
            </div>
          </section>
        </>
    )
}