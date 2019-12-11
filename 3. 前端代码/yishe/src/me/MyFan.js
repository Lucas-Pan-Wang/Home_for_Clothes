import React, { Component } from 'react'
import { Collapse } from 'antd';
import {Link} from 'react-router-dom';
import { NavBar,Grid } from 'antd-mobile';

import Back from '../images/返回 (1).png';
import yonghu from '../images/yonghu.png';
import chengshi from '../images/chengshi.png';
import xingbie from '../images/xingbie.png';
import jianjie from '../images/jianjie.png';
import shoucang from '../images/收藏.png';
import pinglun from '../images/评论.png';
import dianzan from '../images/点赞.png';

const { Panel } = Collapse;
export default class MyFan extends Component {
    constructor(){
        super();
        this.state={
            care:[],
            users:[]
        }
    }
    componentWillMount(){
        console.log(this.props.match.params.id);
        fetch("http://47.98.163.228:8086/care?careId="+this.props.match.params.id)
        .then(res=>res.json())
        .then(res=>{
            var result = [];
            console.log(res);
            for(var k=0;k<res.length;k++){
                console.log(res[k].userId)
                fetch("http://47.98.163.228:8086/users?userId="+res[k].userId)
                .then(value=>value.json())
                .then(value=>{
                    for(var i=0;i<value.length;i++){
                        var j = value[i].userPic.indexOf('/');
                        value[i].userPic = "http://47.98.163.228:8086"+value[i].userPic.substr(j);
                    }
                    result.push(...value);
                    this.setState({
                        care:result
                    },()=>{
                        console.log(this.state.care);
                    })
                });
            }
        })
    }
    myCareArticle = (id,event)=>{
        fetch("http://47.98.163.228:8086/article?userId="+id)
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                var j = res[i].userPic.indexOf('/');
                res[i].userPic = "http://47.98.163.228:8086"+res[i].userPic.substr(j);
                for(var j=0;j<res[i].cimg.length;j++){
                    res[i].cimg[j] = "http://47.98.163.228:8086"+res[i].cimg[j];
                }
            }
            this.setState({
                users:res
            })
            this.forceUpdate();
        });
    }
    //修改时间
    standardTime = (time) => {
        var date = new Date();
        var nowDate = [date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()];
        var myDate = time.split(/[ /:]/);
        var timeDate = [];
        var str = ['年前','月前','天前','小时前','分钟前','秒前']
        for(var i=0;i<6;i++){
          timeDate[i] = nowDate[i] - Number(myDate[i]);
        }
        for(var j=0;j<5;j++){
          if(timeDate[j] > 1){
            return timeDate[j]+str[j];
          }else if(timeDate[j] === 1){
            if(timeDate[j+1] >= 0){
              return timeDate[j]+str[j];
            }else{
              if(j === 0){
                timeDate[j+1] = timeDate[j+1]+12;
              }else if(j === 1){
                timeDate[j+1] = timeDate[j+1]+30;
              }else if(j === 2){
                timeDate[j+1] = timeDate[j+1]+24;
              }else{
                timeDate[j+1] = timeDate[j+1]+60;
              }
              return timeDate[j+1]+str[j+1];
            }
          }
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    leftContent={
                        <Link to={"/gerentab/"+this.props.match.params.id}><img src={Back} style={{ width: '30px', height: "30px" }} key="fan"/></Link>
                    }
                style={{backgroundColor:'rgb(252, 157, 154)'}}>粉丝</NavBar>
                <Collapse bordered={true} accordion>
                {
                    this.state.care.map((item)=>(
                        <Panel key={item.userId} header={
                        <div style={{height:'60px'}}>
                            <div style={{float:'left',marginRight:'15px'}}><img src={item.userPic} alt='' style={{width:'50px',height:'50px',borderRadius:'10px'}}/></div>
                            <div style={{float:'left',fontSize:'18px'}}>
                                <p>{item.userName}</p>
                                <p style={{color:'#888',fontSize:'16px',marginBottom:'0'}}>{"简介: "+item.userIntro}</p>
                            </div>
                        </div>
                        }>
                            <ul className='careUser'>
                                <li><img src={yonghu}/>{"用户："+item.userName+"（"+item.userPho+")"}</li>
                                <li><img src={xingbie}/>{"性别："+item.userSex}</li>
                                <li><img src={chengshi}/>{"城市："+item.userCity}</li>
                                <li onClick={this.myCareArticle.bind(this,item.userId)}><Collapse bordered={false} style={{padding:"0",margin:"0"}}>
                                <Panel header={<div><img src={jianjie} style={{width:'25px',marginRight:"15px"}}/>发帖</div>} key="1">
                                    {this.state.users.map((it)=>(<div className="article" key={it.articleId}>
                                        <div className='artUser'>
                                            <img className='userImg' src={it.userPic} alt=""/>
                                            <span className='userName'>{it.userName}</span>
                                        </div>
                                        <div className="artDetail">
                                            {it.content}
                                            <Grid square
                                            data={it.cimg}
                                            columnNum="3"
                                            renderItem={dataItem => (
                                                <img src={dataItem} style={{ width:'100%'}} alt="" />
                                            )}
                                            />
                                        </div>
                                        <ul className="artState">
                                            <li><span>{this.standardTime(it.time)}</span></li>
                                            <li><Link to={"/shequarticle/"+it.articleId+"&"+this.props.match.params.id}><img src={`${pinglun}`} alt=''/><span style={{color:"#444"}}>{item.review || "评论"}</span></Link></li>
                                            <li><img src={shoucang} alt=''/><span>{it.save || "收藏"}</span></li>
                                            <li><img src={dianzan} alt=''/><span>{it.agree || "点赞"}</span></li>
                                        </ul>
                                    </div>))}
                                </Panel>
                                </Collapse></li>
                            </ul>
                        </Panel>
                    ))
                }
                </Collapse>
            </div>
        )
    }
}
