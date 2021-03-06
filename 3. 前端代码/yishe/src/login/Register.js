import React, {Component} from "react";
import fanhui from '../images/fanhui_1.png';
import { NavBar, WingBlank, Flex, InputItem, Button, Picker} from 'antd-mobile';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
import camera from '../images/camera.png';
import phone from '../images/phone.png';
import doc from '../images/doc.png';
import lock from '../images/lock_grey.png';
import userName from '../images/userName.png';
import male from '../images/male.png';
import female from '../images/female.png';
import city from '../images/city.png';
import CitySelector from './CitySelector';
import {Consumer} from '../context';

import './login.css';
import { userInfo } from "os";
import Avatar from './Avatar';

export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            url:'http://47.98.163.228:8082/register',
            userPho:'',
            userPwd:'',
            userName:'',
            userSex:'女',
            userCity:'',
            userProvince:'',
            userId:'',
            picData:''
            
        }
    }
    

    componentDidUpdate(){
        if(this.state.userSex=='男'){
            document.getElementById('malePic').style.display='inline-block';
            document.getElementById('femalePic').style.display='none';
        }
        if(this.state.userSex=='女'){
            document.getElementById('malePic').style.display='none';
            document.getElementById('femalePic').style.display='inline-block';
        }
    }

    // hrefChange(str){
    //     var h=window.location.href;
    //     var index = h.lastIndexOf("\/");  
    //     window.location.href = h.substring(0, index+1)+str;
    // }

    render(){
        return(
            <Consumer>
                {
                (data)=>{return <div style={{width:'100%',height:'100%', position:'relative', backgroundColor:'white'}}>
                <NavBar 
                        style={{backgroundColor:'#fc9d9a',color:'white'}}
                        leftContent={[
                            // <a onClick={()=>{this.hrefChange('login')}}><img src={fanhui} style={{width:'25%'}} key="fan"/></a>
                            <Link to="/login"><img src={fanhui} style={{width:'25%'}} key="fan"/></Link>
                        ]}
                        >注册
                </NavBar>

                <Flex id='inforError' class="judge2" direction="column" justify="center" align="center" style={{display:'none', paddingTop:'40%'}}>
                        <p> 请将信息填写完整！</p>
                        <Button onClick={()=>{document.getElementById('inforError').style.display='none';}} style={{marginTop:'50%', marginLeft:'15%', color:'white', fontSize:'90%', fontWeight:'bold', width:'70%', height:'16%', backgroundColor:'rgb(36,217,238)', border:'solid 1px blue'}}>返 回</Button>
                </Flex>

                <Flex id='avatarError' class="judge2" direction="column" justify="center" align="center" style={{display:'none', paddingTop:'40%'}}>
                        <p> 请先添加头像！</p>
                        <Button onClick={()=>{document.getElementById('avatarError').style.display='none';}} style={{marginTop:'50%', marginLeft:'15%', color:'white', fontSize:'90%', fontWeight:'bold', width:'70%', height:'16%', backgroundColor:'rgb(36,217,238)', border:'solid 1px blue'}}>返 回</Button>
                </Flex>

                <Flex id='phoneError' class="judge2" direction="column" justify="center" align="center" style={{display:'none', paddingTop:'40%', fontSize:'25px'}}>
                        <p> 请输入正确格式的手机号！</p>
                        <Button onClick={()=>{document.getElementById('phoneError').style.display='none';}} style={{marginTop:'30%', marginLeft:'15%', color:'white', fontSize:'90%', fontWeight:'bold', width:'70%', height:'16%', backgroundColor:'rgb(36,217,238)', border:'solid 1px blue'}}>返 回</Button>
                </Flex>

                <Flex id='pwdError' class="judge2" direction="column" justify="center" align="center" style={{display:'none', paddingTop:'40%', fontSize:'25px'}}>
                        <p> 请输入正确长度的密码！</p>
                        <Button onClick={()=>{document.getElementById('pwdError').style.display='none';}} style={{marginTop:'30%', marginLeft:'15%', color:'white', fontSize:'90%', fontWeight:'bold', width:'70%', height:'16%', backgroundColor:'rgb(36,217,238)', border:'solid 1px blue'}}>返 回</Button>
                </Flex>

                <Flex id='judgeR' class="judge2" direction="column" justify="center" align="center" style={{display:'none'}}>
                        <p>&nbsp;&nbsp;注册成功！</p>
                        <p>您的用户ID是:{this.state.userId}</p>
                        <Link to="/login"><Button style={{marginTop:'20%', marginLeft:'15%', color:'white', fontSize:'90%', fontWeight:'bold', width:'70%', height:'16%', backgroundColor:'rgb(36,217,238)', border:'solid 1px blue'}}>去 登 录</Button></Link>
                </Flex>
                <Flex direction="column" justify="center" align="center" style={{paddingTop:'5%'}}>
                    <div id="camera_div">
                        <Avatar />
                        {/* <img src={camera} width="50%" style={{position:'absolute', left:'24%', top:'15%'}}/>
                        <p style={{position:'absolute', top:'62%', left:'21%', color:'#a8a8a8'}}>添加头像</p> */}
                    </div>
                    <div id='register_info'>
                        <form id='step1'>
                        <ul id='register_input1'>
                            <li><InputItem className='register_input2' placeholder='用户名' maxLength='7' onChange={(e)=>this.setState({userName:e})}/></li>
                            <CitySelector />
                            <li>
                                <img id='femalePic' src={female} width="14%" style={{marginLeft:'15%'}}/><img id='malePic' src={male} width="14%" style={{marginLeft:'15%', display:'none'}}/><p style={{marginLeft:'10%', display:'inline-block', fontSize:'18px', color:'#a8a8a8'}}>性别</p>
                                <select id="sexSelect" name="sex" onChange={()=>{var sex = document.getElementById('sexSelect'); this.setState({userSex:sex.value})}}>
                                    <option value="女" selected>女</option>
                                    <option value="男">男</option>
                                </select>  
                            </li>
                        </ul>
                            <Flex direction="column" justify="center" align="center">
                                <Button onClick={()=>{
                                    console.log('注册传来的data'+data.userProvince)
                                    this.setState({userCity: data.userCity, picData:data.picData,userProvince:data.userProvince});
                                    if(this.state.userName=='' || data.userCity=='' || data.userCity=='请选择'){
                                        document.getElementById('inforError').style.display='block';
                                    }
                                    else if(data.picData=='' || data.picData==undefined){
                                        document.getElementById('avatarError').style.display='block';
                                    }
                                    else{
                                        document.getElementById('step1').style.display='none';
                                        document.getElementById('step2').style.display='block';}
                                    }} style={{textAlign:'center', backgroundColor:'#fc9d9a', color:'white', width:'80%', marginTop:'5%'}}>下 一 步</Button>
                            </Flex>
                        </form>
                        <form id='step2' style={{display:'none'}}>
                        <ul id='register_input2'>
                            <li><img src={phone} width="14%" /><InputItem className='register_input' placeholder='手机号码' type='phone' onChange={(e)=>this.setState({userPho:e})}/></li>
                            {/* <li style={{position:'relative'}}><img src={doc} width="14%"/><InputItem className='register_input' placeholder='验证码' type='number' maxLength='6'/><Button style={{position:'absolute', right:'0', top:'0',  backgroundColor:'#fc9d9a', width:'35%', color:'white'}}>发送验证码</Button></li> */}
                            <li><img src={lock} width="14%"/><InputItem className='register_input' placeholder='密码(长度应在6-16位)' type='password' maxLength='16' onChange={(e)=>this.setState({userPwd:e})}/></li>
                        </ul>
                            <Flex direction="column" justify="center" align="center">
                                <Button onClick={()=>{
                                    var date=new Date();
                                    
                                    var month=date.getMonth()+1;
                                    // var day=date.getDate();
                                    // var time=''+year+month+day;
                                    // console.log(time);
                                    if(this.state.userPho.length!=13)
                                        document.getElementById('phoneError').style.display='block';
                                    else if(this.state.userPwd.length<6)
                                        document.getElementById('pwdError').style.display='block';
                                    else
                                        document.getElementById('judgeR').style.display='block';
                                    fetch("http://47.98.163.228:8082/register", {
                                    method: 'post', 
                                    "Access-Control-Allow-Origin" : "*",
                                    "Access-Control-Allow-Credentials" : true,
                                    // credentials: 'include',
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    },
                                    body: JSON.stringify({userPho:this.state.userPho, 
                                        userPwd:this.state.userPwd, userName:this.state.userName,
                                        userSex:this.state.userSex, userCity:this.state.userCity,
                                        userProvince:this.state.userProvince, 
                                        picData:this.state.picData, userTime:month})
                                  })
                                    .then(res=>res.json())
                                    .then(res=>{
                                        {   
                                            this.setState({userId:res[0]});
                                        }
                                    });
                                }}
                                style={{textAlign:'center', backgroundColor:'#fc9d9a', color:'white', width:'80%', marginTop:'5%'}}>立 即 注 册</Button>
                                <p style={{marginTop:'8%', }}>注册代表您同意<a style={{color:'#fc9d9a'}}>《用户协议》</a></p>
                            </Flex>
                        </form>
                    </div>
                </Flex>
            </div>
        }
    }
        </Consumer>
        )
    }
}