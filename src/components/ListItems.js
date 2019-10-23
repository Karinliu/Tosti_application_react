import React, { Component } from 'react'
import '../sass/shopping_list.scss';

class ListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timePassed: '',
            copySuccess: '',
            items: [ ]
        }
    }

    addSpaceBetween = (e) => {
        console.log(e.target.value.split )
        if( e.target.value.length){
            console.log('FOUNDED')
        }
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();

        // setTimeout(function () {
        //   this.setState({ timePassed: false, copySuccess: '' });
        // }.bind(this), 1000);

        setTimeout(() => {
            this.setState({
                timePassed: false,
                copySuccess: ''
            })
        }, 1000);

        this.setState({
            timePassed: true,
            copySuccess: 'Copied!'
        });
    };


    render() {
        return (
            <section id="list" className="list paper paper-list ">
                <h2>Mijn boodschappenlijstje</h2>

                <ul className="listItem">
                    <textarea 
                        onClick = {this.addSpaceBetween}
                        ref={(textarea) => this.textArea = textarea} 
                        defaultValue={this.props.entries.map(item => item)} 
                        readOnly
                    />       
                </ul>
                <button className="btn btn-reset" onClick={this.props.resetList}>Reset List</button>
                
                { /* Logical shortcut for only displaying the button if the copy command exists */
                document.queryCommandSupported('copy') &&
                <div className="container container-copy">
                    <div className="row">
                        <div className="copy-success">{this.state.copySuccess}</div>
                        <button className="btn copy-btn" onClick={this.copyToClipboard}>Copy to my clipboard!</button>
                    </div>
                </div>
                }
            </section>
        )
    }
}

export default ListItems