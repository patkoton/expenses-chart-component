import Balance from './components/Balance';
import Spending from './components/Spending'; 
import './index.css';
import styled from 'styled-components';

function App() {
  return (
    <MainDiv>
      <Balance />
      <Spending />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  margin-top: 55px;
  vertical-align: middle;

  @media only screen and (max-width: 375px) {
    margin-top: 40px;
  }
`;

export default App;
