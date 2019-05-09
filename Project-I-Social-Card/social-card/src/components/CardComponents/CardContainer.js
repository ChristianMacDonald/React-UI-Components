import React from 'react';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';
import './Card.css';

class CardContainer extends React.Component {
    render() {
        return (
            <div className="card-container">
                <CardBanner />
                <CardContent />
            </div>
        );
    }
}