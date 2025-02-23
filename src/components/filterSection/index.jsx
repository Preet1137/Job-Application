import React from 'react';
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import './index.css';


const empTypeList = [
    {
        label: 'Full Time',
        empTypeId: 'FULLTIME',
    },

    {
        label: 'Part Time',
        empTypeId: 'PARTTIME',
    },

    {
        label: 'Freelance',
        empTypeId: 'FREELANCE',
    },

    {
        label: 'Internship',
        empTypeId: 'INTERNSHIP',
    }
]

const salaryRangeList = [
    {
        label: '10 LPA and above',
        salaryRangeId: '1000000',
    },

    {
        label: '20 LPA and above',
        salaryRangeId: '2000000',
    },

    {
        label: '30 LPA and above',
        salaryRangeId: '3000000',
    },

    {
        label: '40 LPA and above',
        salaryRangeId: '4000000',
    }
]

const FilterSection = (props) => {

    const {empTypeFunction} = props;
    const {salaryRangeFunction} = props;

    const[allValues, setValues] = useState({

        profile : {}

    });

    const jwtToken = Cookies.get('jwtToken');

    const userProfile = async ()=>{

        const api  = "https://apis.ccbp.in/profile";

        const options = {
            method: 'GET',
            headers : {
                Authorization : `Bearer ${jwtToken}`
            }
          }

          try {

            const response = await fetch(api,options);
            const data = await response.json();
            
            if(response.ok === true){
                setValues ({...allValues, profile : data.profile_details});
            }
            
          } catch (error) {
            console.log(error);
            
          }
        
    }

    useEffect(()=>{
        userProfile();
    },[]);




    const renderEmpTypeList = ()=>{

        const onChangeEmpType = (e) =>{
            empTypeFunction(e.target.value, e.target.checked);

        }



        return empTypeList.map(each=>{
            return (
                <li key={each.empTypeId}>
                    <label htmlFor={each.empTypeId}>
                    <input onChange={onChangeEmpType} type="checkbox" value={each.empTypeId} id={each.empTypeId} />{each.label}
                    </label>
                </li>
            )
        })
    }


    const renderEmpType = ()=>(

        <>
        <h3>Types of Employment</h3>
        <ul className='checkbox-group'>{renderEmpTypeList()}</ul>
        </>


    )




    const renderSalaryRangeList =()=>{

        const onChangeSalaryRange = (e)=> {
            salaryRangeFunction(e.target.value)

        }

        return salaryRangeList.map(each=>{
            return (
                <li key={each.salaryRangeId}>
                    <label htmlFor={each.salaryRangeId}>
                    <input onChange={onChangeSalaryRange} type="radio" value={each.salaryRangeId} id={each.salaryRangeId} name='salary ranges' />{each.label}
                    </label>
                </li>
            )
        })

    }

    const renderSalaryRange = ()=>(

        <>
        <h3>Salary Range</h3>
        <ul className='checkbox-group'>{renderSalaryRangeList()}</ul>
        </>
    )




    const renderUserProfile = ()=>(

        <div className='profile-cont'>

                    <ul className='ul-profile'>
                    <img src = {allValues.profile.profile_image_url} alt="profile-icon"/>

                    <h2 className='mt-2'>{allValues.profile.name}</h2>

                    <h5 className='mt-3'>{allValues.profile.short_bio}</h5>
                    </ul>
              </div>


    )



    return (
        <>
        
            {renderUserProfile()}

                <div className="filter-section">
                    {renderEmpType()}
                    {renderSalaryRange()}
                </div>

        
        </>
    );
}

export default FilterSection;
