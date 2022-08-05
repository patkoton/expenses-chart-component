import React from 'react'
import styled from 'styled-components'

const Balance = () => {
  return (
    <MDiv>
      <BalDiv>
        <TextDiv>
          <p className='p1'><small>My Balance</small></p>
          <p className='p2'>$921.48</p>
        </TextDiv>

        <CirDiv>
          <div className='circ1'></div>
          <div className='circ2'></div>
        </CirDiv>
      </BalDiv>
    </MDiv>
  )
}


const MDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BalDiv = styled.div`
  width: 400px;
  height: 100px;
  background-color:hsl(10, 79%, 65%);
  border-radius: 15px;
  padding-top: 25px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    width: 330px;
}
`;

const TextDiv = styled.div`
  font-family: 'DM Sans', sans-serif;
  padding-left: 20px;
  font-size: 18px;
  letter-spacing: 0.5px;

  .p1 {
    color: hsl(27, 66%, 92%);
    font-weight: 400;
    font-size: small;
  }

  .p2 { 
    color: hsl(33, 100%, 98%);
    font-weight: 700;
    margin-top: 10px;
  }

`;

const CirDiv = styled.div`
  display: flex;
  padding-right: 50px;
  .circ2 {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid hsl(33, 100%, 98%);
    margin-left: -80px;
  }

  .circ1 {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: hsl(25, 47%, 15%);
  }
`;
export default Balance
