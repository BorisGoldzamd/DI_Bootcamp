import React from 'react';

class SkillList extends React.Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {this.props.skills.map((skillArea, index) => (
          <div key={index}>
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, index) => (
                <li key={index}>
                  {skill.Name} {skill.Hot ? '(Hot)' : ''}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillList;
