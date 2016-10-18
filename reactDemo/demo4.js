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

export default class Demo4 extends React.Component {
  getMyList(){
    return (
        <ul>
          {data.map((item)=>{
              return(
                <li key = {item.id}>{'hello everybody,my name is '+item.name+' and my age is '+item.age}</li>
                )
          })}
        </ul>
      )
  }

  render() {
    return (
          <div>
            {
              this.getMyList()
            }
          </div>
        );
  }
}