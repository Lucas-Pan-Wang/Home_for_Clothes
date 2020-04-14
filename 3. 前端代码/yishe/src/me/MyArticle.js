import React, { Component } from 'react';
import { Popover, NavBar, WingBlank,WhiteSpace,Grid } from 'antd-mobile';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
import { Typography,Menu, Dropdown, Icon } from 'antd';
import './me.css';

import tianjia from '../images/添加.png';
import fanhui from '../images/返回 (1).png';
import shoucang from '../images/收藏.png';
import pinglun from '../images/评论.png';
import dianzan from '../images/点赞.png';
import Gongge from '../community/Gongge';

const { Paragraph } = Typography;
const Item = Popover.Item;

export default class Community extends Component {
    constructor(){
        super();
        this.state = {
            visible: false,
            selected: '',
            users:[],
        }
    }    
    componentDidMount(){
        fetch("http://47.98.163.228:3004/article?userId="+this.props.match.params.id)
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                var j = res[i].userPic.indexOf('/');
                res[i].userPic = "http://47.98.163.228:3004"+res[i].userPic.substr(j);
                for(var j=0;j<res[i].cimg.length;j++){
                    res[i].cimg[j] = "http://47.98.163.228:3004"+res[i].cimg[j];
                }
            }
            this.setState({
                users:res
            })
        });
        this.forceUpdate();
    }
    deleteArticle=(id)=>{
        console.log(id);
        fetch("http://47.98.163.228:3004/articleDelete?articleId="+id)
          .then(res=>res.json())
          .then(res=>{
              fetch("http://47.98.163.228:3004/article?userId="+this.props.match.params.id)
                .then(res=>res.json())
                .then(res=>{
                    for(var i=0;i<res.length;i++){
                        var j = res[i].userPic.indexOf('/');
                        res[i].userPic = "http://47.98.163.228:3004"+res[i].userPic.substr(j);
                        for(var j=0;j<res[i].cimg.length;j++){
                            res[i].cimg[j] = "http://47.98.163.228:3004"+res[i].cimg[j];
                        }
                    }
                    this.setState({
                        users:res
                    })
            })
        });
    }
    //修改时间
    standardTime = (timestamp)=>{
      var mius=Math.round(new Date())-Math.round(new Date(timestamp));
      if(mius<(1000*60)){
          return Math.floor(mius/1000)+'秒前';
      }else if(mius<(1000*60*60)){
          return Math.floor(mius/(1000*60))+'分钟前';
      }else if(mius<(1000*60*60*24)){
          return Math.floor(mius/(1000*60*60))+'小时前';
      }else if(mius<(1000*60*60*24*30)){
          return Math.floor(mius/(1000*60*60*24))+'天前';
      }else if(mius<(1000*60*60*24*30*12)){
          return Math.floor(mius/(1000*60*60*24*30))+'个月前';
      }else{
          return Math.floor(mius/(1000*60*60*24*30*12))+'年前';
      }
    }
    render() {
        return (
            <div style={{width:'100%'}}>
                <NavBar 
                style={{backgroundColor:'#fc9d9a',color:'white'}}
                leftContent={[
                  <Link to={"/gerentab/"+this.props.match.params.id}><img src={fanhui} style={{width:'30px'}} key="fan"/></Link>
                ]}
                rightContent={<Link to={"/articleadd/"+this.props.match.params.id}><img src={tianjia} style={{width:"20px"}}/></Link>}
                >发帖</NavBar>
                {
                    this.state.users.map((item)=>(<div className="article" key={item.articleId}>
                        <div className='artUser'>
                            <img className='userImg' src={item.userPic} alt=""/>
                            <span className='userName'>{item.userName}</span>
                            <button style={{float:"right",fontSize:"16px",color:"#fff",padding:"8px 15px",border:"2px solid #85c7fd",borderRadius:"6px",backgroundColor:"#97cdf9"}} onClick={()=>this.deleteArticle(item.articleId)}>删除文章</button>
                        </div>
                        <div className="artDetail">
                            {item.content}
                            <Gongge cimg={item.cimg}/>
                            {/* <Grid square
                            data={item.cimg}
                            columnNum="3"
                            renderItem={dataItem => (
                                <img src={dataItem} style={{ width:'100%',height:'100%',objectFit:'cover'}} alt="" />
                            )}
                            /> */}
                        </div>
                        <ul className="artState">
                            <li><span>{this.standardTime(item.time)}</span></li>
                            <li><Link to={"/shequarticle/"+item.articleId+"&"+this.props.match.params.id}><img src={`${pinglun}`} alt=''/><span style={{color:"#444"}}>{item.review || "评论"}</span></Link></li>
                            <li><img src={shoucang} alt=''/><span>{item.save || "收藏"}</span></li>
                            <li><img src={dianzan} alt=''/><span>{item.agree || "点赞"}</span></li>
                        </ul>
                    </div>))
                }
            </div>
        );
    }
}