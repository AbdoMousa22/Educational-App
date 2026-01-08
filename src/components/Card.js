export default function Card({title,img,color,bgColor,description}){
    return(
        <div className="card">
           
            <span className="icon" style={{color:color,background:bgColor}}>{img}</span>
            <h2>{title}</h2>
            <span className="line"></span>
            <p>{description}</p>
 

        </div>
    )

}