import './App.css';
import Wrapper from './UI/Wrapper/Wrapper';
import { RecoilRoot } from 'recoil';
import List from './Components/List/List';
import Menu from './Components/Menu/Menu';


const App = () => {
  return(
    <RecoilRoot>
          <Wrapper>
            <Menu />
            <List />
          </Wrapper>
    </RecoilRoot>
   
  )
}

export default App;
