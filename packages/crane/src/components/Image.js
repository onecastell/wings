/* eslint-disable max-len */

import React, { useState } from 'react';
import styled from 'styled-components';
import { getContrastColor } from '../lib/utils';
import { Info } from './icons';
import { Caption } from './atoms';

const StyledFigure = styled.figure`
  position: relative;
  max-width: 100%;
  display: block;
  width: auto;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 700px) {
    &.offGridLeft,
    &.left {
      float: left;
      max-width: 50%;
      margin-right: 20px;
    }
    &.offGridRight,
    &.right {
      float: right;
      max-width: 50%;
      margin-left: 20px;
    }
  }
  @media screen and (min-width: 900px) {
    &.half {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
    &.large {
      width: 100%;
    }
    &.screenWidth {
      width: 100vw;
      max-width: initial;
      margin-left: 50%;
      transform: translateX(-50vw);
    }
    &.offGridWider {
      width: 140%;
      max-width: 100vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    &.offGridLeft {
      float: left;
      max-width: 50%;
      margin-right: 20px;
      margin-left: -20%;
    }
    &.offGridRight {
      float: right;
      max-width: 50%;
      margin-left: 20px;
      margin-right: -20%;
    }
  }
`;

const Figcaption = styled(Caption)`
  background-color: rgb(255, 255, 255, 0.4);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  border-radius: ${({ theme }) => theme.imageBorderRadius};
  box-shadow: ${({ theme }) => theme.imageShadow};
`;

const InfoP = styled.p`
  position: relative;
  margin-top: 0;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    transition: all 0.2s ease-in-out;
    stroke: #000;
    stroke-width: 2;
    fill: none;
  }
`;

const InfoButton = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
  z-index: 3;
  svg {
    fill: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.primaryColor,
      colors: { light: theme.textColor, dark: theme.textColorDark },
    })};
    width: 100%;
    height: 100%;
  }
`;

export default ({ author, caption, copyright, type = 'default', url }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <StyledFigure className={`${type}`}>
      <StyledImage src={url} />
      {showInfo ? (
        <Figcaption>
          {caption ? <InfoP>{caption}</InfoP> : null}
          {author ? <InfoP>author: {author}</InfoP> : null}
          {copyright ? <InfoP>copyright: {copyright}</InfoP> : null}
        </Figcaption>
      ) : null}
      {author || caption || copyright ? (
        <InfoButton onClick={() => setShowInfo(!showInfo)}>
          <Info />
        </InfoButton>
      ) : null}
    </StyledFigure>
  );
};
