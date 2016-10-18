import React from 'react';


class TabsControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            currentId: 24702,
            kindData: []
        };
    }

    componentWillMount() {
        setTimeout(()=> {
            this.getSomeData();
        }, 1000)
    }


    getSomeData() {
        console.log(this.state.currentId);
        let fetchUrl = '/scenery/zt/ZhuanTiAjax/SpmAjaxCall.aspx?action=GETSPMSCENERY&PageIndex=1&PageSize=9&ChannelID=' + this.state.currentId + '&QuDaoId=1&IsShow=1&ascription=24702&pay=2&dq=1&ProvinceId=16';

        fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            //console.log(res);
            return res.json();
        }).then((data) => {
            //console.log(data.List.length);
            if (data && data.List && data.List.length > 0) {
                //console.log(data);
                this.setState({
                    KindData: data.List
                }, ()=> {
                    //console.log(this.state.KindData);
                })
            } else {
                this.setState({
                    KindData: []
                })
            }


        }).catch((err) => {
            console.log(err)
        });
    }

    renderMyData() {
        let data = this.state.KindData || [];
        if (data.length > 0) {
            return (
                <ul className="goods-ul">
                    {
                        data.map((item, i)=> {
                                let newRefid = 111;
                                let linkPath = item.Purl + "?refid=" + newRefid;
                                return (
                                    <li key={i}>
                                        <a href={ linkPath } className="top-box">
                                            <img src={item.SceneryImg} alt=""/>
                                            <span className="city">{ item.CityName }</span>
                                            <span className="discount">随机立减</span>
                                        </a>

                                        <div className="down-box">
                                            <div className="name">{ item.SceneryName }</div>
                                            <div className="btm">
                                                <div className="price-box">
                                                    &yen;<span className="num">{ item.AmountAdvance }</span>
                                                </div>
                                                <div className="normal-price">票面价：￥{ item.Amount }</div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        )}
                </ul>
            )
        } else {
            return (<ul>
                <div className="loader"><img src="//img1.40017.cn/cn/s/c/2016/loading.gif"/>&nbsp;&nbsp;&nbsp;正在加载中...
                </div>
            </ul>)
        }


    }

    handleClick() {

    }

    check_item_index(index) {
        return (index == this.state.currentIndex) ? "at" : "";
    }

    render() {
        return (
            <div>
                {/*动态生成tab切换tab部分*/}
                <div className="tabBox">
                    {
                        this.props.children.map((item, i)=> {
                            return <span key={i}
                               onClick={() => {this.setState({currentIndex: i, currentId: item.props.dataId},()=>{ this.getSomeData();});}}
                               className={ this.check_item_index(i) }>{ item.props.name }</span>
                        })
                    }
                </div>
                {/*tab切换加载资源部分*/}
                <div className="resource">
                    { this.renderMyData() }
                </div>
            </div>
        )
    }
}


export default class tabChange extends React.Component {

    render() {
        return (
            <div className="tab">
                <TabsControl>
                    <span dataId="24702" name="第一个">第一个</span>
                    <span dataId="24703" name="第二个">第二个</span>
                    <span dataId="24704" name="第三个">第三个</span>
                </TabsControl>
            </div>
        )
    }
}
