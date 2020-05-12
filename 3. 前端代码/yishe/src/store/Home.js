import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import Back from '../images/fanhui_1.png';

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            url:'http://47.98.163.228:8084/home',
            picture:[],
            num:-1
        }
    }
    deleteItem=(i,that)=>{
        // console.log(i)
        var p=this.state.picture;
        // console.log('删除前；',p)
        p.splice(i,1);
        // console.log('删除后：',p)
        this.setState({
            picture:p
        })
        fetch('http://47.98.163.228:8087/delete',{
            method: 'post', 
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:JSON.stringify({nage:i,weizhi:'家',userId:this.props.match.params.id})
        })
    }
    // componentWillMount(){
    //     fetch("http://47.98.163.228:8084/userid", {
    //     method: 'post', 
    //     "Access-Control-Allow-Origin" : "*",
    //     "Access-Control-Allow-Credentials" : true,
    //     credentials: 'include',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body:JSON.stringify({userId:this.props.match.params.id,zhengli:'家'}) 
    //   });
    // }
    componentDidMount(){
        console.log(this.props.match.params.id)
        fetch("http://47.98.163.228:8084/userid", {
        method: 'post', 
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify({userId:this.props.match.params.id,zhengli:'家'}) 
      });
        // console.log(this.props.match.params.id);//获取用户id
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res.length)
            this.setState({
                picture:res
            })
            console.log(this.state.picture)
        });

        var n=localStorage.getItem('count');
        localStorage.setItem('count',n+1);
        console.log('第几个'+n)
        var nn=localStorage.getItem('count');
        if(nn==1){
            this.setState({
                num:localStorage.getItem('zlx_num')-1
            },function(){
                localStorage.setItem('zlx_num',-1)
            })
            console.log('获取的num'+this.state.num)
        }else{
            this.setState({
                num:-1
            })
        }
        
        
    //   fetch('http://47.98.163.228:3001/pp2')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         console.log('????'+res.msg)
    //         var n = localStorage.getItem('count')
    //         localStorage.setItem('count', n+1)
    //         var nn = localStorage.getItem('count')
    //         if(nn==1){
    //             this.setState({
    //                 num:res.msg-1
    //             })
    //         }else{
    //             this.setState({
    //                 num:-1
    //             })
    //         }
        // });
    }
    render() {
        return (
            <div>
                <NavBar
                // style={{width:'100%',backgroundColor:'#fc9d9a',color:'white',position:'fixed',top:0,left:0,zIndex:99}}
                    style={{backgroundColor:'rgb(252, 157, 154)'}}
                    leftContent={
                        <Link to={"/apptab/"+this.props.match.params.id+'&store'}><img src={Back} style={{ width: '30px', height: "30px" }} key="fan"/></Link>
                    }
                    >
                    {localStorage.getItem('jia')?localStorage.getItem('jia'):'家'}
                    </NavBar>
                <div style={{position:'relative'}}>
                    {
                    this.state.picture.map((item,i)=>{
                        if(i==this.state.num){
                            return(
                                <div key={i} style={{display:'inlinbe-block',position:'relative',width:'120px',height:"120px",margin:'2px',float:'left'}}>
                                <img src={`http://47.98.163.228:8084/${item}`}style={{width:'120px',height:'120px',border:'1px solid red'}}/>
                                <span style={{position:"absolute",color:'red',right:'5px',top:'-3px'}} onClick={this.deleteItem.bind(this,i)}>x</span>
                                </div>
                                )
                        }else{
                            return(
                                <div key={i} style={{display:'inlinbe-block',position:'relative',width:'120px',height:"120px",margin:'2px',float:'left'}}>
                                <img src={`http://47.98.163.228:8084/${item}`}style={{width:'120px',height:'120px'}}/>
                                <span style={{position:"absolute",color:'red',right:'5px',top:'-3px'}} onClick={this.deleteItem.bind(this,i)}>x</span>
                                </div>
                            )}
                    })
                    }
                </div>
            </div>
        )
    }
}
