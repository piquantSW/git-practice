import React, { Component, Fragment } from 'react';

class PhonInfo extends Component {


    state = {
        editing: false,
        name:'',
        phone:''
    }

    handleRemove = () =>{
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () =>{
        
        const { info, onUpdate} = this.props;

        if(this.state.editing){
            onUpdate(info.id, {
                name:this.state.name,
                phone:this.state.phone,
            })
        }else{
            this.setState({
                name: info.name,
                phone: info.phone,
            })
        }
        this.setState({
            editing: !this.state.editing,
        })
    }

    handleChange = (e) =>{
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, phone} = this.props.info;

        const {editing} = this.state;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }


        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                          <div><input id={'name'} name={'name'} value={this.state.name} onChange={this.handleChange}/></div>
                          <div><input id={'phone'} name={'phone'} value={this.state.phone} onChange={this.handleChange}/></div>
                        </Fragment>
                    ):(
                        <Fragment>
                          <div><b>{name}</b></div>
                          <div><b>{phone}</b></div>
                        </Fragment>
                    )
                }

                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    {editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhonInfo;