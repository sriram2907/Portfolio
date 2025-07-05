import React from 'react';
import styled from 'styled-components';

const Switch = ({ darkMode, toggleDark }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input
          className="toggle"
          type="checkbox"
          checked={darkMode}
          onChange={toggleDark}
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .switch {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
    position: relative;
    width: 50px;
    height: 20px;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color);
    transition: 0.3s;
  }

  .slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(30px);
  }
`;

export default Switch;
