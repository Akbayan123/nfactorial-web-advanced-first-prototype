import React from 'react'
import {useState} from 'react'
import './summary.css'
import lettersToImages from './array'


function Summary() {

  const textInput = React.createRef();
  const [image, setImage] = useState([]);

   function showText() {
      let text = textInput.current.value;
      let letters = text.split('');
      for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        let a = {
          src: lettersToImages[letter]
        };
        image.push(a);
        setImage([...image])
      }
      console.log(image)
   }

    return (
       <>
        <div className='summaryContent'>
          <div className='text'>
            <textarea ref={textInput}  
                placeholder="Введите текст ..." 
                autoFocus="">
            </textarea>
            <button 
                onClick={showText}
                className='sum-button'>
                Перевести в рукопись
            </button>
          </div>
          <div className='text'>
            <div className='img'>
              {image.map((item) => (
                <img className='summaryImg' src={item.src}/>
              ))}
            </div>
            <button className='sum-button'>Скачать в формате PDF</button>
          </div>
        </div>
        <div className='footer'>
          <p>Manuscript</p>
          <h3 style={{color: 'white', fontFamily: 'Ysabeau'}}>info@manuscript.com</h3>
          <h3 style={{color: 'white', fontFamily: 'Ysabeau'}}>© Manuscript, 2023.</h3>
       </div>
       </>
    )
  }

export default Summary;