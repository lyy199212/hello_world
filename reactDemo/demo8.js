import React from 'react';

export default class Demo8 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        KindData:[]
    }

  }
  componentWillMount() {
    this.getSomeData();
    this.getUserInfo();
  }
 // async getUserInfo(storeData) {
 //        let fetchUrl = 'http://salesappgw.17u.cn/dsf/gw/exec?token=BECAD925E82B6A69A0DB79C61BE99DA5&basename=2lCsHEzlT944jTE7VfEi0G3oVYjfH6ilgaWEi55EVld3zG3Ey7ULWOJ8WBcjt8oi&method=getnoticecountinfo&param=%7B%22Token%22%3A%2296edd6d1dfca6d710aa79533c2765d25%22%2C%22Type%22%3A1%2C%22TopNum%22%3A10%7D&version=X9bK09ULW5k3A_NNk7oWpg=='
 //        let json = await fetch(fetchUrl, {
 //            method: 'GET',
 //            headers: {
 //                'Accept': 'application/json',
 //                'Content-Type': 'application/json'
 //            }
 //        }).then((res) => {
 //            return res.json();
 //        }).catch((e) => Promise.resolve(null));
 //        // let result   = json.json();
 //        let result   = json && JSON.parse(json.result) || {};
 //        console.log(result);
 //        // let result = null,json = null;
 //        //    let response = await fetch(fetchUrl,
 //        //      {method: 'GET',headers: {'Accept': 'application/json','Content-Type': 'application/json'}}
 //        //    );
 //        //    // json = response.json();
 //        //    result = JSON.parse(json.result);
 //        //    console.log(result);

 //    }

 async getUserInfo() {
        let fetchUrl = 'http://salesappgw.17u.cn/dsf/gw/exec?token=BECAD925E82B6A69A0DB79C61BE99DA5&basename=2lCsHEzlT944jTE7VfEi0G3oVYjfH6ilgaWEi55EVld3zG3Ey7ULWOJ8WBcjt8oi&method=getnoticecountinfo&param=%7B%22Token%22%3A%2296edd6d1dfca6d710aa79533c2765d25%22%2C%22Type%22%3A1%2C%22TopNum%22%3A10%7D&version=X9bK09ULW5k3A_NNk7oWpg==';
        try {
          let response = await fetch(fetchUrl);
          let data = response.json();
          console.log(data);
        } catch(e) {
          console.log("error", e);
        }
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
            { this.renderMyData() }
        </div>
        );
  }
}
