import React from 'react';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';
import './Card.css';

class CardContainer extends React.Component {
    render() {
        return (
            <a className="card-container-anchor" href="https://www.reactjs.org">
                <div className="card-container">
                    <CardBanner />
                    <CardContent />
                </div>
            </a>
        );
    }
}

export default CardContainer;