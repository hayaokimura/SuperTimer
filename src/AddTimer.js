import React, {Component} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class AddTimer extends Component{
    constructor(props){
        super(props)
        this.state={
            hour: 0,
            minute: 0,
            second: 0,
        }
    }
    render(){
        return(
            <Modal
                isOpen={this.props.modalOpen}
                onRequestClose={this.props.closeModal}
                className="AddTimer"
                contentLabel="keyboard"
                overlayClassName="Overlay"
                >
                <div className="NewTimer">{this.state.hour}:{this.state.minute}:{this.state.second}</div>
                <button onClick={()=>this.props.closeModal()}>Modaltest</button>
            </Modal>
        )
    }

}

export default AddTimer