import './menu.css'
import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom'

function Menu() {
    return (
      <span className="Menu">
          <div className='menuLogo'>
             <h1 style={{color: 'white', fontFamily: 'Ysabeau'}}>Manuscript</h1>
          </div>
          <div className='menuList'>
             <ul>
               <Link to="/"><a>Главная</a></Link>
               <Link to="/summary"><a>Конспект</a></Link>
             </ul>
          </div>
      </span>
    );
  }
  
  export default Menu;
  