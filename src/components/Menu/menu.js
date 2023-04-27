import './menu.css'

function Menu() {
    return (
      <span className="Menu">
          <div className='menuLogo'>
             <h1 style={{color: 'white', fontFamily: 'Ysabeau'}}>Manuscript</h1>
          </div>
          <div className='menuList'>
             <ul>
               <a>Главная</a>
               <a>Конспект</a>
               <a>История</a>
               <a>Инструкция</a>
             </ul>
          </div>
      </span>
    );
  }
  
  export default Menu;
  