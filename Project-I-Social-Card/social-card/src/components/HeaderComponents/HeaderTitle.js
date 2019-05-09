import React from 'react';
import './Header.css';

class HeaderTitle extends React.Component {
    render() {
        return (
            <div>
                <span>LambdaSchool</span>
                <span>{"@"}LambdaSchool</span>
                <span>26 jan</span>
            </div>
        );
    }
}