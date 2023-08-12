import React, { Component } from 'react';
import PhonInfo from './PhonInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }
    render() {
        const {data, onRemove, onUpdate} = this.props;
        const list = data.map(
            info => (<PhonInfo onUpdate={onUpdate} onRemove={onRemove} info={info} key={info.id}/>)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;