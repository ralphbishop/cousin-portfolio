import { skillCategories, skillLevels } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  return (
    <section>
      <h1 className="page-title">Skills</h1>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <section
            className="card skill-category"
            key={category.id}
            aria-labelledby={`skills-${category.id}`}
          >
            <h2 id={`skills-${category.id}`} className="section-title">
              {category.title}
            </h2>

            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li className="skill" key={skill.name}>
                  <span className="skill-name">{skill.name}</span>

                  <span className="skill-meta">
                    <span className="skill-level">{skillLevels[skill.level - 1]}</span>
                    <span className="meter" aria-hidden="true">
                      {skillLevels.map((label, index) => (
                        <span key={label} className={index < skill.level ? 'on' : ''} />
                      ))}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}