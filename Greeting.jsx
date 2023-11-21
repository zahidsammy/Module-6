import React from 'react';

const Greeting = ({ name, children }) => {
  
  const greetingName = name ? name : 'World';

  return (
    <div>
      <p>Hello {greetingName}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Greeting;
