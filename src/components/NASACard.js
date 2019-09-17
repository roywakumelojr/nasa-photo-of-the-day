import React from "react";
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: orange;
  color: white;
  width: 600px;
`;
const APODImage = styled.img`
  width: 100%;
  object-fit: scale;
  flex-shrink: 2;
`;

const Credits = styled.p`
font-family: ariel;
Width: 100%;
box-sizing: border-box;
padding: 0 20px 0;
color: #0F52BA;
font-size: 25px;
`;

const Explan = styled.p`
font-family: ariel;
Width: 100%;
color: black;
font-size: 16px;
box-sizing: border-box;
padding: 0 20px;
`;

const NASACard = props => {
  return (
    <Card key={props.id}>
      <h2>{props.title}</h2>
      <APODImage alt="IC 1805: The Heart Nebula" src={props.image} />
      <Credits>Date: {props.date}<br></br>Copyright: {props.copyright}</Credits>
      <Explan>{props.explanation}</Explan>
    </Card>
  );
};

export default NASACard;