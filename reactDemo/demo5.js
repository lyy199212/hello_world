import React from 'react';
const data = [
      {
        id:'1',
        name:'Jansen',
        sex:'male',
        age:18,
      },
      {
        id:'2',
        name:'CQ',
        sex:'male',
        age:28,
      },
      {
        id:'3',
        name:'YH',
        sex:'male',
        age:23,
      },
      {
        id:'4',
        name:'GP',
        sex:'male',
        age:23,
      },
      {
        id:'5',
        name:'YY',
        sex:'female',
        age:23,
      }

    ];

export default class Demo5 extends React.Component {

  handleClick(){
    //看看输出来的是什么
    console.log(this.refs.myTxt);
    //变化
    this.refs.myTxt.value = 'Jansen hansome';
  }
  render() {
    return (
          <div>
            <input type="text" ref="myTxt" />
            <p onClick = {this.handleClick.bind(this)}>click me and let this input box fill this value:'Jansen hansome'</p>
          </div>
        );
  }
}