import StarIcon from '@mui/icons-material/Star';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
export default function SingleCourse ({id,img,department,title,rating,description,sales,price,discount,duration,lessons}){

    return (
        <>
           <div className="course">
            <span className="sale">{sales}</span>
            <img src={img} alt={title}/>
            <div className="content">
                <div className="course-field">
                    <p className="department">{department}</p>
                    <p className="rating"> 
                     <StarIcon/>
                     {rating}
                    </p>
                </div>
                <h3>{title}</h3>
                <p className='description'>{description}</p>
                <p className='sales'>{sales} Sale</p>
                <p className='price'>
                    <del>{price}</del>
                    <span className='text-secondary'>{discount}</span>
                </p>
                <div className='course-info'>
                    <p> 
                        <AccessAlarmsIcon/>
                        {duration}
                    </p>
                    <p>
                        <ImportContactsIcon/>
                        {lessons}
                    </p>
                </div>
                <a href='#' className='btn-learn'>Learn More</a>

            </div>
           </div>
        </>
    )
}
