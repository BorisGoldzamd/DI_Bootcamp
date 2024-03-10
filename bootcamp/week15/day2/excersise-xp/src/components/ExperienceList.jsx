import React from 'react';

class ExperienceList extends React.Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {this.props.experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.companyName}</h3>
            <p>Position: {experience.roles[0].title}</p>
            <p>Location: {experience.roles[0].location}</p>
            <p>Description: {experience.roles[0].description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceList;
