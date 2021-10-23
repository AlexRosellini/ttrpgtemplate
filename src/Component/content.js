import React, { useState } from 'react';


const types = [
    {
        name: 'test',
        description: 'test'
    },
    {
        name: 'test2',
        description: 'test2'
    },
]

function TabGroup() {
  const [active, setActive] = useState();
  return (
    <>
      <div>
        {types.map(type => (
          <button
            key={type.name}
            active={active === type.name}
            onClick={() => setActive(type.name)}
          >
            {type.name}
          </button>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}

export default TabGroup;