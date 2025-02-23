import './index.css';

const SimilarJobs = (props)=>{

    const {similarJobs} = props;


    return(
        <>
      
        <ul className='similarjob-ul-cont'>

            {similarJobs.map(job=>(
              <li className='similarjob-li-card' key={job.id}>

                <div className="job-header">

                <div className='logo-title-rating'>
                    
                    <div>
                        <img src={job.company_logo_url} alt={job.title} className="company-logo" />
                    </div>
                    
                      <div className="job-title-rating">
                                <h5>{job.title}</h5>
                                <span><i className="fa-solid fa-star mt-1" style={{color :"#FFD43B"}}></i>{job.rating}</span>
                       </div>

                </div>

                
                <div className="location-employment">
                    <div style={{display : 'flex',gap : "20px"}}>
                    <span> <i className="fa-solid fa-location-dot mt-1"></i>{job.location}</span>
                    <span> <i className="fa-solid fa-briefcase mt-1"></i>{job.employment_type}</span>
                    </div>
                </div>

            </div>

            <div className="job-description">
                <h6>Description</h6>
                <p style={{fontSize : "15px"}}>{job.job_description}</p>
            </div>


              </li>  
            ))}
        </ul>
        </>
    )
}


export default SimilarJobs;