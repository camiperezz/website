import React from 'react';

const divStyle = {
    color:'red'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>This section contains information about me</p>
                </main>
            </div>
        )
    }
}



export default About;