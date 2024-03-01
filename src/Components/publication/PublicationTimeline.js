import React, { useEffect, useState } from 'react';
import './publications.css';

const PublicationTimeline = () => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const timeline = document.querySelector('.timeline');
            if (!timeline) return;

            const boundingBox = timeline.getBoundingClientRect();
            const newIsInView = boundingBox.top <= window.innerHeight && boundingBox.bottom >= 0;

            if (newIsInView !== isInView) {
                setIsInView(newIsInView);

                if (newIsInView) {
                    // element is now visible in the viewport
                    const items = document.querySelectorAll('.timeline li');
                    items.forEach((item) => item.classList.add('in-view'));
                    // console.log('surprise homie');
                } else {
                    // element has gone out of viewport
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isInView]); // Include isInView in the dependency array if you use it in the effect

    return (
        <div className="timeline" style={{ backgroundColor: '#484848' }}>
            <ul>
                <li>
                    <time>Aug 2017 - Dec 2017</time>
                    <p>
                        Research project - Mind Your Own Text: Public Data for political Insights. <br /> <br />
                        <a target="_blank" href="https://www.predictiveanalyticsworld.com/patimes/mind-text-public-data-political-insights/9125">Published</a> an article based on the research project on "predictiveanalyticsworld.com".
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default PublicationTimeline;