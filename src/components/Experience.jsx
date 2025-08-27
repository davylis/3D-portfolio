import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { textVariant } from '../utils/motion';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { experiences } from '../constants';
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import  SectionWrapper  from '../hoc/SectionWrapper'


// eslint-disable-next-line react-refresh/only-export-components
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7 px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg }}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img
      src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
      </div>
  }
   >
  </VerticalTimelineElement>
)

// eslint-disable-next-line react-refresh/only-export-components
const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

       <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience, "work");
