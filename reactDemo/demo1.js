import React from 'react';
import $ from 'jquery';


export default class Demo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "请输入手机号码",
            imgPath: ""
        };
    }

    componentWillMount(){
        var version = Math.random();
        this.setState({imgPath: "/scenery/AjaxHelper/ValidPic.aspx?methed=GETIMAGECODE&mode=3&v=" + version});
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value});
    }
    handleFocus(e) {
        e.target.value = "";
    }
    handleClick(e){
        var version = Math.random();
        this.setState({imgPath: "/scenery/AjaxHelper/ValidPic.aspx?methed=GETIMAGECODE&mode=3&v=" + version});
    }
    render() {
        return (

            <div className="message">

                <input type="text"  onFocus={ this.handleFocus }  onChange={this.handleChange.bind(this)}
                       className="tel" placeholder="请输入手机号码"/>
                <input type="text"  onFocus={ this.handleFocus }  onChange={this.handleChange.bind(this)}
                       className="tel" placeholder="请输入手机号码"/>
                <img src={ this.state.imgPath } className="codeImg" onClick={ this.handleClick.bind(this) } />

                <div id="submit" onSubmit={ this.handleSubmit }>发红包</div>
            </div>
        )
    }
}