import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './accordion.scss';

const Accordion = ({ title, body, initAsExpanded }) => {
    const [isExpanded, setExpanded] = useState(initAsExpanded);
    const accordionBody = React.createRef();

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

    useEffect(() => {
        setExpanded(initAsExpanded);

    }, [initAsExpanded])

    const accordionCarret = isExpanded ? faAngleDown : faAngleRight;

    return (
        <section className="accordion">
          
            <h1
                className=" accordion__title"
                onClick={handleAccordionClick.bind(this)}
            >
                <FontAwesomeIcon icon={accordionCarret} />
                {title}
            </h1>
            
            {isExpanded && (
                <div className="accordion__body animated fadeIn fast" ref={accordionBody}>
                    {body}
                </div>
            )}
        </section>
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
