import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './accordion.scss';

const Accordion = ({ title, body, initAsExpanded }) => {
    const [isExpanded, setExpanded] = useState(initAsExpanded);
    const accordionBody = React.createRef();

    console.log(initAsExpanded);

    const handleAccordionClick = (e) => {
        if (accordionBody.current) {
            // TODO animation
            //const isExpanding = !isExpanded;
            // if (isExpanding) {
            //     accordionBody.current.classList.add('show');
            // } else {
            //     accordionBody.current.classList.remove('show');
            // }
        }

        setExpanded(!isExpanded);
    };

    const accordionCarret = isExpanded ? faAngleDown : faAngleRight;

    return (
        <div className="accordion">
            <div className="accordion__title">
                <button
                    type="button"
                    className="accordion__button"
                    onClick={handleAccordionClick.bind(this)}
                >
                    <FontAwesomeIcon icon={accordionCarret} />
                    {title}
                </button>
            </div>

            {isExpanded && (
                <div className="accordion__body" ref={accordionBody}>
                    {body}
                </div>
            )}
        </div>
    );
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
    initAsExpanded: PropTypes.bool,
};

Accordion.defaultProps = {
    initAsExpanded: false,
};

export default Accordion;
