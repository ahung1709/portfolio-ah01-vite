import React from 'react';

import SkillCategoryCard from '../../components/SkillCategoryCard/SkillCategoryCard';
import SkillCard from '../../components/SkillCard/SkillCard';

import { skillsData } from '../../data/skillsData';

import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section className='skills-section' id='skills'>
      <h2 className='section-title'>Skills</h2>

      <div className='skills-grid'>
        {skillsData.map((category) => (
          <SkillCategoryCard
            key={category.title}
            title={category.title}
            icon={category.icon}
          >
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.label}
                label={skill.label}
                icon={skill.icon}
              />
            ))}
          </SkillCategoryCard>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
