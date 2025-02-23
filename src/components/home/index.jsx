import { Link } from 'react-router-dom';
import Header from '../header';
import './index.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className='home-cont'>
                <div className='home-content'>
                    <h1 className='home-heading'>Discover Your Perfect Career Path</h1>
                    <p>
                        Millions of job seekers are searching for roles, salary insights, and company reviews.
                        Discover the career that aligns with your goals and ambitions. Your journey starts here.
                    </p>
                    <Link to="/jobs">
                        <button className='btn'>Start Your Search</button>
                    </Link>
                    <br /><br />
                    <p>Let us guide you to the opportunities that will define your future success.</p>
                </div>
            </div>
        </>
    );
};

export default Home;
