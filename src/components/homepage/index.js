import React from 'react';
import Navbar from '../navbar';
import '../../css/homepage.css';

class Homepage extends React.Component {
    render() {
        return(
            <div className='homepage-container-div'>
                <Navbar />
            </div>
        )
    }
}

export default Homepage;