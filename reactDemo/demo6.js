import React from 'react';
import { IconData,Jansen } from './IconData.js';
export default class Demo6 extends React.Component {
  constructor(props) {
    super(props);
  }
  getLogo(){
    return(
        <div className="logo">
            <a target="_blank" href="https://www.ly.com/"><img src={IconData.wechatIcon.uri} /></a>
        </div>
    )
  }
  render() {
    return (
        <div className="newsHeader">
          {this.getLogo()}
          <div>{Jansen.name + Jansen['帅不']}</div>
        </div>
        );
  }
}