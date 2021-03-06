import React, {Component} from "react";
import {NavBar, Flex, InputItem, Button} from 'antd-mobile';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
import remark from '../images/message/remark.png';
import thumb from '../images/message/thumb.png';
import plus from '../images/message/plus.png';
import group1 from '../images/group1.jpg';
import Friend from './Friend';

// import './login.css';

var num = 1;
export default class ResetPwd extends Component{
    constructor(){
        super();
        this.state = {
            plusdisplay:'none',
            friendisplay:'none'
          }
    }
    
    onClick3 = ()=>{
        if(num == 1){
            this.setState({ plusdisplay:'block' });
            num = num+1;
        }else{
            this.setState({ plusdisplay:'none' });
            num = num-1;
        }
    }

    componentDidMount(){
        if(this.props.id=='111'){
            this.setState({ friendisplay:'block' });
        }
        // if(this.state.status==0) document.getElementById('dialog').style.display='none';
        // else document.getElementById('dialog').style.display='block';
    }

    render(){
        return <div style={{width:'100%', height:'100%', position:'relative', backgroundColor:'white'}}>
        <NavBar 
                style={{backgroundColor:'#fc9d9a',color:'white'}}
                >消息
        </NavBar>
        <Flex direction="column" justify="center" align="center" style={{paddingTop:'6%'}}>
            <form style={{paddingLeft:'3%', width:'100%'}}>
                <ul style={{paddingLeft:'0', color:'black'}}>
                    <Link to={"/remark/"+this.props.id}><li style={{position:'relative', marginBottom:'2%', lineHeight:'30px', fontSize:'18px', color:'black'}}>
                        <img src={remark} width="16%" style={{borderRadius:'100%', marginLeft:'0%'}}/>
                        <div style={{width:'80%', marginLeft:'4%', borderBottom:'solid 1px #cccccc', display:'inline-block', fontSize:'18px', paddingLeft:'2%'}}>
                            评论
                            <p style={{color:'#a8a8a8', float:'right', marginRight:'3%', fontSize:'22px'}}>></p>
                        </div>
                    </li></Link>
                    <Link to={"/like/"+this.props.id}><li style={{position:'relative', marginBottom:'4%', lineHeight:'30px', fontSize:'18px', color:'black'}}>
                        <img src={thumb} width="16%" style={{borderRadius:'100%', marginLeft:'0%'}}/>
                        <div style={{width:'80%', marginLeft:'4%', borderBottom:'solid 1px #cccccc', display:'inline-block', fontSize:'18px', paddingLeft:'2%'}}>
                            赞
                            <p style={{color:'#a8a8a8', float:'right', marginRight:'3%', fontSize:'22px'}}>></p>
                        </div>
                    </li></Link>
                    <Link to={"/chat?name="+this.props.id+"&room=111?123"} style={{display:this.state.friendisplay}}>
                        <Friend userId='123' lastWord='大家好哈哈哈哈 :D  :D  :D ' date='6-11'/>
                    </Link>
                    <Link to={"/chat?name="+this.props.id+"&room=111?122"}  style={{display:this.state.friendisplay}}>
                        <Friend userId='122' lastWord='啊啦啦啦啦 :D >:) ' date='6-10'/>
                    </Link>
                    <Link to={"/chat?name="+this.props.id+"&room=group0"}>
                        <Friend userId='20190076' lastWord='好滴，冲冲冲! :100: ' date='6-10' />
                    </Link>
                    <Link to={"/chat?name="+this.props.id+"&room=111?20190070"}  style={{display:this.state.friendisplay}}>
                        <Friend userId='20190070' lastWord='OKKK' date='6-5' />
                    </Link>
                    <a>
                        <img onClick={this.onClick3} src={plus} style={{width:'35px',float:'right',position:'absolute',bottom:'15px',right:'15px'}} key="plus"/>
                    </a>
                    <ul id='dialog' style={{display:this.state.plusdisplay ,float:'right', position:'absolute',width:'120px',height:'90px', bottom:'55px',right:'15px', backgroundImage:"url(" + require("../images/message/dialogNew.png") + ")",backgroundSize:' 100%'}}>
                        <li style={{lineHeight:'8px', color:'#333333', marginTop:'17px', marginBottom:'3px', textAlign:'center', borderBottom:'solid 2px #cccccc'}}>
                            <p>新建群聊</p>
                        </li>
                       <li style={{lineHeight:'10px', color:'#333333', marginTop:'8px', marginBottom:'10px', textAlign:'center',}}>
                            <p>添加群聊</p>
                        </li>
                        
                    </ul>
                    
                </ul>
                {/* <Flex direction="column" justify="center" align="center">
                    <Link to="/login"><Button style={{marginTop:'7%' ,backgroundColor:'#fc9d9a', width:'90%', color:'white', fontSize:'15px'}}>重新登录</Button></Link>
                </Flex> */}
            </form>
              
        </Flex>
        
    </div>
    }
}