import React from 'react';
//获取图片相关信息
var imgData = [
    {
        "img": "http://pic4.40017.cn/scenery/destination/2016/10/13/15/zKr7ZZ_240x135_00.jpg.webp",
        "h1": "Creative",
        "h2": "DUET"
    },
    {
        "img": "http://pic4.40017.cn/scenery/destination/2016/10/13/15/zKr7ZZ_240x135_00.jpg.webp",
        "h1": "Friendly",
        "h2": "Happy"
    },
    {
        "img": "http://pic4.40017.cn/scenery/destination/2016/10/13/15/zKr7ZZ_240x135_00.jpg.webp",
        "h1": "Tranquilent",
        "h2": "Hussler"
    },
    {
        "img": "http://pic4.40017.cn/scenery/destination/2016/10/13/15/zKr7ZZ_240x135_00.jpg.webp",
        "h1": "Loving",
        "h2": "REBEL"
    },
    {
        "img": "http://pic4.40017.cn/scenery/destination/2016/10/13/15/zKr7ZZ_240x135_00.jpg.webp",
        "h1": "Crazy",
        "h2": "FRIEND"
    },
    {
        "img": "http://pic4.40017.cn/scenery/destination/2016/10/13/15/zKr7ZZ_240x135_00.jpg.webp",
        "h1": "Insecure",
        "h2": "Seek"
    },
    {
        "img": "http://pic4.40017.cn/scenery/destination/2016/10/13/15/zKr7ZZ_240x135_00.jpg.webp",
        "h1": "Lucky",
        "h2": "Frank"
    }
];

//将图片名信息转成图片URL路径信息
imgData.forEach((item, index)=> {
    item.isRight = index % 2;
    item.img = item.img;
});

class TemplateMainI extends React.Component {
    render() {
        const props = this.props,
            mainClassName = (props.isRight ? 'main-i main-i_right' : 'main-i') +
                (props.isCenter ? ' main-i_active' : '');

        return (
            <div className={mainClassName}>
                <div className="caption">
                    <h2>{props.h1}</h2>

                    <h3>{props.h2}</h3>
                </div>
                <img src={props.img} alt=""/>
            </div>
        )
    }
}
class TemplateCtrlI extends React.Component {
    render() {
        const props = this.props;
        var ctrlClassName = 'ctrl-i' + ( props.isCenter ? ' ctrl-i_active' : '');

        return (
            <a className={ctrlClassName} onClick={props.arrange}>
                <img src={props.src} alt=""/>
            </a>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 0
        };
    }

    componentDidMount() {
        this.rearrange(0);
    }

    rearrange(index) {
        this.setState({
            current: index
        });

    }

    render() {
        let templateMain = [], templateCtrl = [];
        imgData.forEach((value, index)=> {
            var center = this.state.current == index;

            templateMain.push(
                <TemplateMainI
                    key={index}
                    {...value}
                    isCenter={center}
                    isRight={index % 2? true : false} /*设置一个向左向右的转态*/
                    />
            );
            templateCtrl.push(
                <TemplateCtrlI
                    key={index}
                    src={value.img}
                    isCenter={center}
                    arrange={this.rearrange.bind(this,index)}
                    />
            );
        });
        return (
            <div className="slider">
                <div className="main">
                    {templateMain}
                </div>
                <div className="ctrl">
                    {templateCtrl}
                </div>
            </div>
        );
    }
}

export default App;