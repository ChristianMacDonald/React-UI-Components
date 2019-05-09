import React from 'react';
import './Header.css';

class HeaderTitle extends React.Component {
    render() {
        return (
            <div className="header-title">
                <span className="name">LambdaSchool</span>
                <span className="gray">{"@"}LambdaSchool</span>
                <span className="gray">26 jan</span>
            </div>
        );
    }
}

export default HeaderTitle;