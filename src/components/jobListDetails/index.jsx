import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../header';
import SimilarJobs from '../similarJobs';
import './index.css';
import FilterSection from '../filterSection';

const JobListDetails = () => {

  const [allValues, setValues] = useState({
    jobDetailsArr: {}
  })

  const { id } = useParams();
  const token = Cookies.get("jwtToken");

  useEffect(() => {

    const fetchJobItemDetails = async () => {

      const api = `https://apis.ccbp.in/jobs/${id}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        if (response.ok) {
          setValues({ ...allValues, jobDetailsArr: data });
          console.log(allValues.jobDetailsArr);
        } else {
          console.error('Failed to fetch jobs:', data.error_msg);
        }
      }

      catch (error) {
        console.log('Error:', error);
      }

    }

    fetchJobItemDetails();
  }, [id, token, allValues]);

  const { job_details: jobDetails, similar_jobs: similarJobs } = allValues.jobDetailsArr;

  return (

    <>
      <Header />

      <div className='jobItemDetails-main-cont'>

        {jobDetails && (
          <div className='jobDetails-card'>

            <div className="job-header">

                <div className='logo-title-rating'>
                    
                    <div>
                        <img src={jobDetails.company_logo_url} alt={jobDetails.title} className="company-logo" />
                    </div>
                    
                      <div className="job-title-rating">
                                <h5>{jobDetails.title}</h5>
                                <span><i className="fa-solid fa-star mt-1" style={{color :"#FFD43B"}}></i>{jobDetails.rating}</span>
                       </div>

                </div>

                
                <div className="location-employment">
                    <div style={{display : 'flex',gap : "20px"}}>
                    <span> <i className="fa-solid fa-location-dot mt-1"></i>{jobDetails.location}</span>
                    <span> <i className="fa-solid fa-briefcase mt-1"></i>{jobDetails.employment_type}</span>
                    </div>

                    <div>
                    <p className="package">{jobDetails.package_per_annum}</p>
                    </div>
                </div>

            </div>
            <hr />

            {/* Job Description */}
            <div className="job-description">
              <div className='description-header'>
                    <h5>Description</h5>
                    <a href={jobDetails.company_website_url} className="visit-link" target="_blank" rel="noopener noreferrer">
                    <span> Visit <i className="fas fa-external-link-alt"></i></span>
                    </a>

            </div>
              <p>{jobDetails.job_description}</p>
            </div>

            {/* Skills */}
            <div className="skills">
              <h5>Skills</h5>
              <ul className="skills-list">
                {jobDetails.skills.map(skill => (
                  <li className='skills-list-item' key={skill.name}>
                    <img src={skill.image_url} alt={skill.name} className="skill-icon"/>
                    <p className='mt-1'>{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>

        
            <div className="life-at-company">
              <h5>Life at Company</h5>
                  <div className='life-at-company-content'>
                    <div className='p-cont'>
                      <p>{jobDetails.life_at_company.description}</p>
                      </div>
                      <img src={jobDetails.life_at_company.image_url} alt="Life at company" className="life-at-company-img" />
                  </div>
            </div>

           
          </div>
        )}

        <div className='similar-jobs-main-cont'>
          <>
           <h4>Similar Jobs</h4>
           {similarJobs && <SimilarJobs similarJobs={similarJobs} />}
           </>
        </div>

      </div>

    </>
  )
};

export default JobListDetails;
