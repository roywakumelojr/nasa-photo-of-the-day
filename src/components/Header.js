import React from "react";
import styled from "styled-components"

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #0F52BA;
  width: 600px;
`;

const Header = props => {
  return (
    <div className="header">
      <HeaderText>NASA Astronomy Picture of the Day.</HeaderText>
    </div>
  );
};

export default Header;