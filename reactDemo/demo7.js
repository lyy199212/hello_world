import React from 'react';
export default class Demo7 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        KindData:[]
    }

  }
  componentWillMount() {
    this.getSomeData();
  }
  getSomeData(){
        let fetchUrl = 'http://salesappgw.17u.cn/dsf/gw/exec?token=BECAD925E82B6A69A0DB79C61BE99DA5&basename=qMBIM0drN6WzRtYL5YluelgLn0TRPUzMNUV3YauQA-GyIbmqiWmPoMrCvsakSDvH&method=queryfastentranceCount&param=%7B%22Token%22%3A%2296edd6d1dfca6d710aa79533c2765d25%22%7D&version=l_Kd1cm7qO_YVOG9o1bzhQ=='

        fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((json) => {

            let result = null;
            try {
                result = JSON.parse(json.result);
            } catch (e) {
                result = {};
            }

            this.setState({
                KindData:result.FastEntranceCountEntityList
            })

        }).catch((err) => {
            console.log(err)
        });
  }
  renderMyData(){
    let data = this.state.KindData;
    return(
            <ul>
                {
                    data.map((item)=>{
                        //why key ?
                        //how to write key
                        return(
                                <li key = {item.MemberType}>{item.MemberTypeName}</li>
                            )
                    })
                }
            </ul>
        )
  }
  render() {
    return (
        <div className="newsHeader">
            {this.renderMyData()}
        </div>
        );
  }
}
