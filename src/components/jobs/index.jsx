import Header from '../header'; 
import Cookies from 'js-cookie';
import { useEffect, useState, lazy, Suspense } from 'react';
import FilterSection from '../filterSection';
import './index.css';

const DisplayAllJobs = lazy(() => import('../displayAllJobs'));

const Jobs = () => {
    const [allValues, setValues] = useState({
        jobArr: [] ,
        empType : [],
        salaryRange : "",
        userSearch : ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAllJobs = async () => {
            setLoading(true); // Start loading
            const jwtToken = Cookies.get('jwtToken');
            const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.salaryRange}&search=${allValues.userSearch}`;

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            };

            try {
                const response = await fetch(api, options);
                const data = await response.json();

                if (response.ok) {
                    setValues({ ...allValues, jobArr: data.jobs }); 
                } else {
                    console.error('Failed to fetch jobs:', data.error_msg);
                    setValues({ ...allValues, jobArr: [] });
                }
            } catch (error) {
                console.log('Error:', error);
                setValues({ ...allValues, jobArr: [] });
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchAllJobs(); 
    }, [allValues.userSearch, allValues.empType, allValues.salaryRange]); 

    const onChangeUser = (e) => {
        if (e.key === "Enter") {
            setValues({ ...allValues, userSearch: e.target.value });
        }
    }

    const onChangeEmpTyp = (value, isChecked) => {
        if (isChecked) {
            setValues({...allValues, empType : [...allValues.empType, value]}); 
        } else {
            setValues({...allValues, empType : allValues.empType.filter(each => each !== value )});
        }
    }

    const onChangeSalaryRange = (value) => {
        setValues({...allValues, salaryRange : value });
    }

    return (
        <>
            <Header/>
            <div className='job-filter-main-cont container-fluid'>
                <div className='row'>
                    <div className='col-4 filter-cont'>
                        <FilterSection empTypeFunction={onChangeEmpTyp} salaryRangeFunction={onChangeSalaryRange}/>
                    </div>
                    <div className='col-6 job-display-cont'>
                        <div className='search-cont'>
                            <input onKeyUp={onChangeUser} type="search" className='form-control w-50' placeholder='Search' />
                            <button className='btn' style={{width: "70px", backgroundColor: "#042e58", borderRadius: "4px"}}>
                                <i className="fa-solid fa-magnifying-glass" style={{color: "white"}}></i> 
                            </button>
                        </div>

                        {loading ? (
                                <div className="loader-container">
                                <i class="fa-solid fa-spinner fa-spin-pulse" style={{color : "#243f6b"}}></i>
                            </div>
                        ) : allValues.jobArr.length === 0 ? (
                            <div className='no-results-message'>
                                <img src="
                                " alt="not-found" width={"400px"}/>
                                <h4 className='msg'>No Jobs Found</h4>
                                <p className='msg'>We could not find any job. Try another filters.</p>
                            </div>
                        ) : (
                            
                                <ul className='job-list-cont'>
                                    {allValues.jobArr.map(each => <DisplayAllJobs job={each} key={each.id} />)}
                                </ul>
                        )}
                    </div>
                </div>      
            </div>
        </>
    );
}

export default Jobs;
