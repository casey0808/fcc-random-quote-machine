import React from 'react'
import NewButton from './NewButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Card, CardText, CardBody } from 'reactstrap';

const QuoteMachine = (props) => (
    <React.Fragment>
            <Card id='quote-box' className="border-info">
                <CardBody>
                    <CardText id='text'>
                        {props.selectedQuote ? props.selectedQuote.quote : ''}
                    </CardText>
                    <CardText id='author'>
                        - {props.selectedQuote ? props.selectedQuote.author : ''}
                    </CardText>
                    <br /><br />
                    <div id="two-buttons">
                        <a href="http://twitter.com/intent/tweet" id="tweet-quote">
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="steelblue" />
                        </a>
                        <NewButton buttonDisplayName="Next Quote" clickHandler={props.nextQuoteClickHandler} />
                    </div>      
                </CardBody>
            </Card>            
    </React.Fragment>
)

export default QuoteMachine;