import './index.css';

const NotFound = ()=>{


    return(

        <div className='main-cont'>

                <div className='not-found-cont'>

                    <img src="../src/assets/error-img.png" alt="error image"/>

                    <p>The page you are looking for does not exist. Please check the URL and try again.</p>
                    <p>Return to the <a href="/">homepage</a>.</p>


                </div>

        </div>
    )
}

export default NotFound;