import React, {useState, useEffect} from 'react';

import './Input.css';

import emoji from '../../images/message/emoji.png';
import emoji2 from '../../images/message/emoji2.png';
import voice from '../../images/message/voice.png';
import add from '../../images/message/add.png';
import girl from '../../images/emotion/girl.png';
import boy from '../../images/emotion/boy.png';
import girl_blush from '../../images/emotion/girl_blush.gif';
import boy_blush from '../../images/emotion/boy_blush.gif';
import girl_great from '../../images/emotion/girl_great.gif';
import boy_great from '../../images/emotion/boy_great.gif';
import girl_joy from '../../images/emotion/girl_joy.gif';
import boy_joy from '../../images/emotion/boy_joy.gif';
import girl_sad from '../../images/emotion/girl_sad.gif';
import boy_sad from '../../images/emotion/boy_sad.gif';
import girl_click from '../../images/emotion/girl_click.gif';
import boy_click from '../../images/emotion/boy_click.gif';

import ReactEmoji from 'react-emoji';

const Input = ({ setMessage, sendMessage, message, status, setStatus, gender, emotion, setEmotion}) => {

  let [bottom, setBottom] = useState('18%');
  let [iemoji,setIemoji] = useState(emoji);
  let [avatar,setAvatar] = useState();
  let [justEnter, setJustEnter] = useState(0);

  const mySend = (event) =>{
    setJustEnter(1);
    sendMessage(event);
    setStatus('0');
  }

  const clickHappy = () =>{
    setEmotion('click');
  }

  useEffect(() => {

    if(status=='0')
    {
      setBottom('18%');
      setIemoji(emoji);
      document.getElementById('myEmoji').style.display='none';
    }
    else
    {
      setBottom('90%');
      setIemoji(emoji2);
      document.getElementById('myEmoji').style.display='block';
    }

    if(gender=='男'){
      if(emotion=='blush'){
        setAvatar(boy_blush);
      }
      if(emotion=='great'){
        setAvatar(boy_great);
      }
      if(emotion=='joy'){
        setAvatar(boy_joy);
      }
      if(emotion=='sad'){
        setAvatar(boy_sad);
      }
      if(emotion=='click'){
        setAvatar(boy_click);
      }
      if(emotion==''){
        setAvatar(boy);
      }
    }
    else if(gender=="女"){
      if(emotion=='blush'){
        setAvatar(girl_blush);
      }
      if(emotion=='great'){
        setAvatar(girl_great);
      }
      if(emotion=='joy'){
        setAvatar(girl_joy);
      }
      if(emotion=='sad'){
        setAvatar(girl_sad);
      }
      if(emotion=='click'){
        setAvatar(girl_click);
      }
      if(emotion==''){
        setAvatar(girl);
      }
    }
});

  return(
    <div>
      <form
        className="form"
        style={{paddingBottom:`${bottom}`}}
        >
        <img class="kid" id="kid" onClick={clickHappy} src={avatar}/>
        <img id="voice" src={voice}/>
        <input
          id="input"
          type="text"
          value= {message}
          onChange={({ target: { value } }) => setMessage(value)}
          // onClick={()=>setStatus('0')}
          onKeyPress={(event) => event.key === 'Enter' ? mySend(event): null}
        />
        <img
          id="emoji"
          src={iemoji}
          onClick={()=>{setStatus(1^status);}}
          />
        <img id="add"
          src={add}
          />
          <ul id="myEmoji" style={{display:'none'}}>
            <li>
              <div className="emojiButton" onClick={()=>{setMessage(message+' :) ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(':)')}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+' :( ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(':(')}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+' :D ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(':D')}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+' ;) ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(';)')}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+' :O ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(':O')}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+' :p ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(':p')}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+' :smile: ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(':smile: ')}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+' :@ ');document.getElementById('input').focus();}}>{ReactEmoji.emojify(':@')}</div>
            </li>
            <li>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :$ ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":$")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :'( ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":'(")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :\\ ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":\\")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :[ ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":[")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :-# ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":-#")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :-* ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":-*")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" 8-) ");document.getElementById('input').focus();}}>{ReactEmoji.emojify("8-)")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" O:) ");document.getElementById('input').focus();}}>{ReactEmoji.emojify("O:)")}</div>
            </li>
            <li>
              <div className="emojiButton" onClick={()=>{setMessage(message+" >:) ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(">:)")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" %) ");document.getElementById('input').focus();}}>{ReactEmoji.emojify("%)")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :scream: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":scream:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :heart: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":heart:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :rose: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":rose:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :sunny: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":sunny:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :moon: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":moon:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :cloud: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":cloud:")}</div>
            </li>
            <li>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :golf: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":golf:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :man: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":man:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :woman: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":woman:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :boy: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":boy:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :girl: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":girl:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :ghost: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":ghost: ")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :a: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":a:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :b: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":b:")}</div>
            </li>
            <li>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :100: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":100:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :dog: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":dog:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :cat: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":cat:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :rabbit: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":rabbit:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :mouse: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":mouse:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :tiger: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":tiger:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :horse: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":horse:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :cow: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":cow:")}</div>
            </li>
            <li>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :pig: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":pig:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :dragon: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":dragon:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :dolphin: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":dolphin:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :monkey: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":monkey:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :turtle: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":turtle:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :sheep: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":sheep:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :car: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":car:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :bus: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":bus:")}</div>
            </li>
            <li>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :basketball: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":basketball:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :soccer: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":soccer:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :football: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":football:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :umbrella: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":umbrella:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :phone: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":phone:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :computer: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":computer:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :dollar: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":dollar:")}</div>
              <div className="emojiButton" onClick={()=>{setMessage(message+" :pizza: ");document.getElementById('input').focus();}}>{ReactEmoji.emojify(":pizza:")}</div>
            </li>
          </ul>
      </form>
    </div>
  );
}

export default Input;