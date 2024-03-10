import React from 'react';

class SocialMediaList extends React.Component {
  render() {
    return (
      <div>
        <h2>Social Media</h2>
        <ul>
          {this.props.socialMedias.map((socialMedia, index) => (
            <li key={index}><a href={socialMedia}>{socialMedia}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SocialMediaList;
