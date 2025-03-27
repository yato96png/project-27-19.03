import React from 'react';
import about from '../data/about.json';

const About = () => {
  return (
    <div>
      <h2>О создателе</h2>
      <p><strong>Имя:</strong> {about.name}</p>
      <p><strong>Биография:</strong> {about.bio}</p>
      <p><strong>Email:</strong> {about.email}</p>
    </div>
  );
};

export default About;
