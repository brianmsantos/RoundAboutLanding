import React from 'react';

const Header = (props) => (
    <div className='header'>
      <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      </div>
    </div>
  );

Header.defaultProps = {
  title: 'Round-About',
  subtitle: 'All the stories you want, when you want.'
};

export default Header;
