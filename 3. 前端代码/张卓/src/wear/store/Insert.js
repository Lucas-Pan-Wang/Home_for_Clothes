import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Picker, List, WhiteSpace,ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import Back from '../images/返回 (1).png';
import { createForm } from 'rc-form';
import './store.css';
//图片选择器
const data = [];
//图片选择器

const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
);

const colorStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '16px',
  height: '16px',
  marginRight: '10px',
};

const kind=[
  {
    label:(<span>裤子</span>),
    value:'裤子',
    children:[
      {
      label:(<span>毛呢裤子</span>),
      value:'毛呢裤子'
      },
      {
      label:(<span>铅笔裤</span>),
      value:'铅笔裤'
      },
      {
      label:(<span>牛仔裤</span>),
      value:'牛仔裤'
      },
      {
        label:(<span>黑色直筒裤</span>),
        value:'黑色直筒裤'
      },
      {
        label:(<span>阔腿裤</span>),
        value:'阔腿裤'
      },
      {
        label:(<span>运动裤</span>),
        value:'运动裤'
      },
  ]
  },
  {
    label:(<span>袜子</span>),
    value:'袜子',
    children:[
      {
      label:(<span>中筒袜</span>),
      value:'中筒袜'
      },
      {
        label:(<span>长筒袜</span>),
        value:'长筒袜'
      },
      {
        label:(<span>船袜</span>),
        value:'船袜'
      },
    ]
  },
  {
    label:(<span>裙子</span>),
    value:'裙子',
    children:[
      {
      label:(<span>长裙</span>),
      value:'长裙'
      },
      {
        label:(<span>短裙</span>),
        value:'短裙'
      },
      
    ]
  },
  {
    label:(<span>薄外套</span>),
    value:'薄外套'
  },
  {
    label:(<span>毛呢大衣</span>),
    value:'毛呢大衣'
  },
  {
    label:(<span>羽绒服</span>),
    value:'羽绒服'
  },
  {
    label:(<span>鞋子</span>),
    value:'鞋子',
    children:[
      {
        label:(<span>帆布鞋</span>),
        value:'帆布鞋'
      },
      {
        label:(<span>马丁靴</span>),
        value:'马丁靴'
      },
      {
        label:(<span>雪地靴</span>),
        value:'雪地靴'
      },
      {
        label:(<span>运动鞋</span>),
        value:'运动鞋'
      },
    ]
  }

]

const where=[
  {
    label:(<span>家</span>),
    value:'家'
  },
  {
    label:(<span>行李箱</span>),
    value:'行李箱'
  },
  {
    label:(<span>柜子</span>),
    value:'柜子'
  }
]

const colors = [
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#FF0000' }}
        />
        <span>红色</span>
      </div>),
    value: '红色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#00FF00' }}
        />
        <span>绿色</span>
      </div>),
    value: '绿色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#0000FF' }}
        />
        <span>蓝色</span>
      </div>),
    value: '蓝色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#C0C0C0' }}
        />
        <span>灰色</span>
      </div>),
    value: '灰色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#FF7F00' }}
        />
        <span>橙色</span>
      </div>),
    value: '橙色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#FFFF00' }}
        />
        <span>黄色</span>
      </div>),
    value: '黄色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#C0FF3E' }}
        />
        <span>青色</span>
      </div>),
    value: '青色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#0F0F0F' }}
        />
        <span>黑色</span>
      </div>),
    value: '黑色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#FFFFFF' }}
        />
        <span>白色</span>
      </div>),
    value: '白色',
  },
  {
    label:
      (<div>
        <span
          style={{ ...colorStyle, backgroundColor: '#EEAEEE' }}
        />
        <span>紫色</span>
      </div>),
    value: '紫色',
  },
];



class Insert extends Component {
  state = {
    files: data,
    multiple: false,
    data: [],
    clothing:[],
    zhonglei:[],
    mingzi:[],
    cols: 1,
    visible: false,
    colorValue: [],
    whereValue:[]
  };
  //图片选择器
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }
  //图片选择器
  onChangeColor = (color) => {
    console.log(color);
    this.setState({
      colorValue: color,
    });
  };
  onChangeWhere = (where)=>{
    this.setState({
      whereValue:where
    })
  }

  mingzi=(e)=>{
    this.setState({
      mingzi:e.target.value
    })
  }
  todata=()=>{
    const p=[this.state.zhonglei,this.state.whereValue,this.state.colorValue];
    console.log(p)
    this.setState({
      clothing:p
    },function(){
      console.log(this.state.clothing[0][1]);
    })
    // fetch("http://47.98.163.228:8084/insert", {
    //     method: 'post', 
    //     "Access-Control-Allow-Origin" : "*",
    //     "Access-Control-Allow-Credentials" : true,
    //     credentials: 'include',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: JSON.stringify({zhonglei:'123'}) 
    //   })
  }
  componentDidMount(){
    fetch("http://47.98.163.228:8084/insert", {
        method: 'post', 
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify({userId:"123"}) 
      })
  }
  
  render() {
    //图片选择器
    const { files } = this.state;
    //图片选择器
    return (
      <div>
        {/* ----导航栏 */}
        <NavBar
          leftContent={
            <Link to="/zhenglitab"><img src={Back} style={{ width: '30px', height: "30px" }} key="fan"/></Link>
          }
          style={{ backgroundColor: 'rgb(252, 157, 154)' }}>导入
                </NavBar>
        {/* ------列表 */}
        <WhiteSpace size="lg" />
        <List style={{ backgroundColor: 'white' }} className="picker-list">
          {/* -----种类选择 */}
          <Picker
            title="种类确定"
            extra="请选择(可选)"
            data={kind}
            value={this.state.pickerValue}
            onChange={v => this.setState({ pickerValue: v })}
            onOk={v => this.setState({ zhonglei: v })}
          >
            <CustomChildren>种类</CustomChildren>
          </Picker>
          {/* ------种类选择结束 */}

          {/* ----地方选择 */}
          <Picker data={where}  value={this.state.whereValue} cols={1}
            onChange={this.onChangeWhere} 
             >
            <List.Item arrow="horizontal">地方</List.Item>
          </Picker>
          {/* /----地方选择结束 */}
          {/* ----颜色选择 */}
          <Picker
            data={colors}
            value={this.state.colorValue}
            cols={1}
            onChange={this.onChangeColor}
          >
            <List.Item arrow="horizontal">颜色</List.Item>
          </Picker>
          {/* -----颜色选择结束 */}
        </List>
        {/* ---填写名字 */}
        <div style={{height:"50px",backgroundColor:'#FFFFFF'}}>
          <span style={{padding:'20px 14px',fontSize:'18px'}}>名字</span>
          <input type='text' style={{margin:'8px 30px',height:'30px'}} onChange={this.mingzi}/>
        </div>
        {/* ----填写名字结束 */}
        {/* 添加图片 */}
        <WingBlank >
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </WingBlank>
      {/* 添加图片结束 */}


          <input type="submit" style={{marginLeft:'80%',width:'50px',height:'30px'}} onClick={this.todata}/>
        {/* ----添加图片和提交结束 */}
        {/* {
           console.log(this.state.whereValue),
           console.log(this.state.mingzi),
           console.log(this.state.yanse),
           this.state.zhonglei.map((itme,index)=>(<p>{itme}</p>))

        } */}
      </div>
    )
  }
}
const TestWrapper = createForm()(Insert);
export default TestWrapper;