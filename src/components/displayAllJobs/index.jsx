
import { Link } from 'react-router-dom';
import './index.css';

const DisplayAllJobs = (props) => {

    const { job } = props;


    

    return (
      <div className='job-list-cont'>
     
     <Link to = {`/jobs/${job.id}`}>
            <div className='card-cont'>
                <ul>
                    <div className='upper-cont'>

                        <div>
                            <img src={job.company_logo_url} alt="company-logo" width={"70px"} />
                        </div>


                        <div>
                                <h5>{job.title}</h5>

                                <div>

                                    <div className='icon-cont'>
                                    <i className="fa-solid fa-star mt-1" style={{color :"#FFD43B"}}></i>
                                    <h5>{job.rating}</h5> 
                                    </div>

                                </div>
                        </div>

                    </div>


                    <div className='upper-second-cont'>
    
                            <div className='location-jobtype-cont'> 

                                    <div className='icon-cont'> 
                                        <i className="fa-solid fa-location-dot mt-1"></i>
                                        <p>{job.location}</p>

                                    </div>
                                    
                                    <div className='icon-cont'>
                                        <i className="fa-solid fa-briefcase mt-1"></i>
                                        <p>{job.employment_type}</p>

                                    </div>
                                    
                            </div>

                            <div>
                                <h5>{job.package_per_annum}</h5>
                            </div>
                    </div>
                    
                    <hr width="100%" size="3" />


                    <div className='description-cont'>
                        <h5>Description</h5>
                        <p>{job.job_description}</p>
                   </div>

                </ul>

            </div>
            </Link>

      </div>
    );
};

export default DisplayAllJobs;
