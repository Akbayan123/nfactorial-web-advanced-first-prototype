import React,{useState} from 'react'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import img1 from './image/1.jpg'
import img2 from './image/2.jpg'
import img3 from './image/3.jpg'
import './content.css'

function Precis() {
    return (
        <h1>This is Precis Page</h1>
    )
}

function Content() {
    return (
        <Router>
            <span>
            <div className='frame'>
               <div className='frame1-1'>
                   <img src={img1}/>
                   <h1 style={{color: 'white', fontFamily: 'Ysabeau'}}>Вставляй нужный текст</h1>
                   <p>Вводи любой текст, который нужно перевести в рукописный вид.</p>
               </div>
                <div className='frame1-2'>
                   <img src={img2} />
                   <h1 style={{color: 'white', fontFamily: 'Ysabeau'}}>Выбирай любой шрифт</h1>
                   <p>Выбирай понравившийся шрифт применяй к своему тексту.</p>
               </div>
            </div>
            <div className='frame'>
               <div className='frame2-1'>
                   <img src={img3} />
                   <h1 style={{color: 'white', fontFamily: 'Ysabeau'}}>Сохраняй свой конспект</h1>
                   <p>Скачивай изображения либо pdf файл своего текста в виде рукописного конспекта.</p>
                   <Link to="/precis"><button>Создать конспект</button></Link>
                   <p>Manuscript</p>
                   <h3 style={{color: 'white', fontFamily: 'Ysabeau'}}>info@manuscript.com</h3>
                   <h3 style={{color: 'white', fontFamily: 'Ysabeau'}}>© Manuscript, 2023.</h3>
               </div>
            </div>
        </span>
        </Router>
    
    )
}

export default Content;