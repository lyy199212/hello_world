import React from 'react';
import '../css/normal.css';

export default class Demo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
    };
  }
  handleClick(){
      this.setState({
          show:!this.state.show
      })


      // setTimeout(function(){
      //   alert(this.state.show);
      // },2000)

      // setTimeout(function(){
      //   alert(this.state.show);
      // }.bind(this),2000)

      // setTimeout(()=>{
      //   alert(this.state.show);
      // },2000)

  }
  render() {
    return (
        <div>
            <p className="hansomeTxt" onClick ={this.handleClick.bind(this)}>{this.state.show ? this.props.result : '我帅不帅？快点点看'}</p>
        </div>
        );
  }
}