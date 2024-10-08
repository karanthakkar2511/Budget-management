
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './InfoCard.css' 

function InfoCard({ title, value, linkText, linkTo }) {
  return (
    <Card className="left-center info-card">
      <Card.Body>
        <Card.Title className="info-card-title">{title}</Card.Title>
        <Card.Text className="info-card-value">{value}</Card.Text>
        {linkText && linkTo && ( 
          <Card.Link as={Link} to={linkTo}>
            {linkText}
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
