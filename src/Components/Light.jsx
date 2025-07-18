import React from 'react';
import styled from 'styled-components';

const Checkbox = () => {
  return (
    <StyledWrapper>
      <label className="container">
        <div className="simple-text">Click me!</div>
        <input defaultChecked="checked" type="checkbox" />
        <div className="checkmark" />
        <div className="torch">
          <div className="head">
            <div className="face top">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="face left">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="face right">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="stick">
            <div className="side side-left">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="side side-right">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  .simple-text {
    position: absolute;
    bottom: -40px;
    width: 120px;
    text-align: center;
    color: white;
    font-size: 16pt;
    font-weight: 800;
    font-family: monospace;
  }

  .torch {
    display: flex;
    justify-content: center;
    height: 150px;
  }

  .head,
  .stick {
    position: absolute;
    width: 30px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg) rotateY(45deg);
  }

  .stick {
    position: relative;
    height: 120px;
  }

  .face {
    position: absolute;
    transform-style: preserve-3d;
    width: 30px;
    height: 30px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    background-color: #000000;
  }

  .top {
    transform: rotateX(90deg) translateZ(15px);
  }

  .left {
    transform: rotateY(-90deg) translateZ(15px);
  }

  .right {
    transform: rotateY(0deg) translateZ(15px);
  }

  .top div,
  .left div,
  .right div {
    width: 102%;
    height: 102%;
  }

  .top div:nth-child(1),
  .left div:nth-child(3),
  .right div:nth-child(3) {
    background-color: #ffff9760;
  }

  .top div:nth-child(2),
  .left div:nth-child(1),
  .right div:nth-child(1) {
    background-color: #ffd80060;
  }

  .top div:nth-child(3),
  .left div:nth-child(4),
  .right div:nth-child(4) {
    background-color: #ffffff60;
  }

  .top div:nth-child(4),
  .left div:nth-child(2),
  .right div:nth-child(2) {
    background-color: #ff8f0060;
  }

  .side {
    position: absolute;
    width: 30px;
    height: 120px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(8, 12.5%);
    cursor: pointer;
    translate: 0 12px;
  }

  .side-left {
    transform: rotateY(-90deg) translateZ(15px) translateY(8px);
  }

  .side-right {
    transform: rotateY(0deg) translateZ(15px) translateY(8px);
  }

  .side-left div,
  .side-right div {
    width: 103%;
    height: 103%;
  }

  .side div:nth-child(1) {
    background-color: #443622;
  }

  .side div:nth-child(2),
  .side div:nth-child(2) {
    background-color: #2e2517;
  }

  .side div:nth-child(3),
  .side div:nth-child(5) {
    background-color: #4b3b23;
  }

  .side div:nth-child(4),
  .side div:nth-child(10) {
    background-color: #251e12;
  }

  .side div:nth-child(6) {
    background-color: #292115;
  }

  .side div:nth-child(7) {
    background-color: #4b3c26;
  }

  .side div:nth-child(8) {
    background-color: #292115;
  }

  .side div:nth-child(9) {
    background-color: #4b3a21;
  }

  .side div:nth-child(11),
  .side div:nth-child(15) {
    background-color: #3d311d;
  }

  .side div:nth-child(12) {
    background-color: #2c2315;
  }

  .side div:nth-child(13) {
    background-color: #493a22;
  }

  .side div:nth-child(14) {
    background-color: #2b2114;
  }

  .side div:nth-child(16) {
    background-color: #271e10;
  }

  .container input:checked ~ .torch .face {
    filter: drop-shadow(0px 0px 2px rgb(255, 255, 255))
      drop-shadow(0px 0px 10px rgba(255, 237, 156, 0.7))
      drop-shadow(0px 0px 25px rgba(255, 227, 101, 0.4));
  }

  .container input:checked ~ .torch .top div:nth-child(1),
  .container input:checked ~ .torch .left div:nth-child(3),
  .container input:checked ~ .torch .right div:nth-child(3) {
    background-color: #ffff97;
  }

  .container input:checked ~ .torch .top div:nth-child(2),
  .container input:checked ~ .torch .left div:nth-child(1),
  .container input:checked ~ .torch .right div:nth-child(1) {
    background-color: #ffd800;
  }

  .container input:checked ~ .torch .top div:nth-child(3),
  .container input:checked ~ .torch .left div:nth-child(4),
  .container input:checked ~ .torch .right div:nth-child(4) {
    background-color: #ffffff;
  }

  .container input:checked ~ .torch .top div:nth-child(4),
  .container input:checked ~ .torch .left div:nth-child(2),
  .container input:checked ~ .torch .right div:nth-child(2) {
    background-color: #ff8f00;
  }

  .container input:checked ~ .torch .side div:nth-child(1) {
    background-color: #7c623e;
  }

  .container input:checked ~ .torch .side div:nth-child(2),
  .container input:checked ~ .torch .side div:nth-child(2) {
    background-color: #4c3d26;
  }

  .container input:checked ~ .torch .side div:nth-child(3),
  .container input:checked ~ .torch .side div:nth-child(5) {
    background-color: #937344;
  }

  .container input:checked ~ .torch .side div:nth-child(4),
  .container input:checked ~ .torch .side div:nth-child(10) {
    background-color: #3c2f1c;
  }

  .container input:checked ~ .torch .side div:nth-child(6) {
    background-color: #423522;
  }

  .container input:checked ~ .torch .side div:nth-child(7) {
    background-color: #9f7f50;
  }

  .container input:checked ~ .torch .side div:nth-child(8) {
    background-color: #403320;
  }

  .container input:checked ~ .torch .side div:nth-child(9) {
    background-color: #977748;
  }

  .container input:checked ~ .torch .side div:nth-child(11),
  .container input:checked ~ .torch .side div:nth-child(15) {
    background-color: #675231;
  }

  .container input:checked ~ .torch .side div:nth-child(12) {
    background-color: #3d301d;
  }

  .container input:checked ~ .torch .side div:nth-child(13) {
    background-color: #987849;
  }

  .container input:checked ~ .torch .side div:nth-child(14) {
    background-color: #3b2e1b;
  }

  .container input:checked ~ .torch .side div:nth-child(16) {
    background-color: #372a17;
  }`;

export default Checkbox;
