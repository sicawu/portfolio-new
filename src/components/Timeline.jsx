import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { PiTreePalmDuotone } from "react-icons/pi"


function Timeline() {
    return (
        <VerticalTimeline
        lineColor={'#d4e4df'}
        style={ Object }
        >
                          
            <VerticalTimelineElement
                className="text-2xl"
                contentStyle={{ background: '#D4E4DF'}}
                contentArrowStyle={{ borderRight: '7px solid #D4E4DF ' }}
                iconStyle={{ background: '#BACDC7', color: '#ffff' }}
                icon={<PiTreePalmDuotone />}
            >
                <h3 className="">Web Development Bootcamp</h3>
                <h4 className="">Ironhack, remote</h4>
                <p>
                Full-time bootcamp (9 weeks) in Web Development. Focus: Javascript (ES6), React, Node.js, MongoDB, ExpressJS, HTML & CSS.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="text-2xl"
                contentStyle={{ background: '#D4E4DF'}}
                contentArrowStyle={{ borderRight: '7px solid #D4E4DF ' }}
                iconStyle={{ background: '#BACDC7', color: '#fff' }}
                icon={<PiTreePalmDuotone />}
            >
                <h3 className="">Web Development Bootcamp</h3>
                <h4 className="">Ironhack, remote</h4>
                <p>
                Full-time bootcamp (9 weeks) in Web Development. Focus: Javascript (ES6), React, Node.js, MongoDB, ExpressJS, HTML & CSS.                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline