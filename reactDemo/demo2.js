import React from 'react';

export default class Demo2 extends React.Component {
    render(){
        return (
                <div>{'hello '+ this.props.name}</div>
            )
    }
}