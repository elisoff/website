import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { getResumeFilePdfLink } from '../api';

import Accordion from './Accordion';

import './resume.scss';

const Resume = () => {
    const handleDownloadClick = () => {
        getResumeFilePdfLink().then((pdfLink) => window.open(pdfLink));
    };

    return (
        <div className="resume">
            <Accordion
                title="My resume"
                body={
                    <>
                        <div className="resume__container">
                            <div className="resume__iframe">
                                <iframe
                                    title="Elis Offerni's Resume"
                                    width="800px"
                                    height="100%"
                                    src="https://docs.google.com/document/d/e/2PACX-1vQzPPN8K9j6TvigrHb0-UBqeyBJ6R1fZnobXIVZ0M-LMTiFRCkF6hg7WSsvHoS7pR8YDhnC082RDpnt/pub?embedded=true"
                                ></iframe>
                            </div>
                        </div>
                        <button
                            className="resume__download-button"
                            type="button"
                            onClick={handleDownloadClick}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            Download
                        </button>
                    </>
                }
            />
        </div>
    );
};

export default Resume;
