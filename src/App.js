import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
// import { Breakpoint } from 'react-socks';
import Typing from 'react-typing-animation';

// Components
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';

// Burger Menu
// import { Burger } from './components/burger-menu/burger'
// import { Menu } from './components/burger-menu/menu'

// Styling
import './App.css';
// import Logo from './images/Morris.png'

function App() {

  // const [open, setOpen] = useState(false)

  return (
    <>
    <div className="logo-whatever">
      <Typing speed={300}>
        <p className="preheader">hi</p>
        <Typing.Delay ms={1000} />
        <Typing.Speed ms={50} />
        <h1>
        I'm Maycie Morris
        </h1>
        <Typing.Delay ms={800} />
        <p className="subheader">it's nice to meet you :)</p>
      </Typing>
      {/* <img className="logo" src= { Logo } /> */}
    </div>
      {/* <div className="burger">
        <Burger open = { open } setOpen = { setOpen } />
        <Menu open = { open } setOpen = { setOpen } />
      </div> */}
        <div className='nav'>
            <Link className="home-link" to='/'>Home</Link>
            <Link className="portfolio-link" to='/portfolio'>Portfolio</Link>
        </div>
      <div>
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route exact path='/portfolio'> <Portfolio /> </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;