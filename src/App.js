import './App.css';
import {Hero, Content, Header, Service, Footer} from './components'

function App() {
  return (
    <div className="App mx-5 mt-5 relative">
      <div className="absolute">

      </div>
      <div className="px-5 pt-5 md:px-20 md:pt-20">
        <Header/>
        <div className="mt-20">
          <Hero/>
        </div>
        <div className="mt-20">
          <Content/>
        </div>
        <div className="mt-20">
          <Service/>
        </div>
      </div>
      <div className="mt-5">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
