

import { NavbarComp } from './components';
import { MainRoute } from './config';
import './style/App.scss';

function App() {
  return (
    <div className="App min-h-screen bg-[#F5F5F5] ">
      <NavbarComp />
      <div className='pt-[60px] lg:pt-16 pb-9'>

        <MainRoute />
      </div>

    </div>
  );
}

export default App;
