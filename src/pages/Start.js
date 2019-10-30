import React, { Component } from 'react';
import Header from '../components/Header';
import TostiForm from '../components/TostiForm';
import ListItems from '../components/ListItems';
import '../sass/base.scss';

class Start extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            checked: null,
            text: [],
            currentItem: '',
            currentItemTwo: '',
        }
    }

    // handleClick(e){  
    // 	const clickedItems = []

    // 	if(e.target.checked === true){
    // 		console.log(e.target.value) 
    // 	}
    // }

    handleClick = (e) => {
        if (e.target.checked === true) {
            const listItem = e.target.value;
            const items = [...this.state.items, listItem]
            // const items = [listItem + ', '+this.state.items]

            this.setState({
                items: items
            })
        }
        if (e.target.checked === false) {
            const listItem = e.target.value;

            const filteredItems = this.state.items.find(item => {
                return item === listItem
            })

            this.setState({
                items: this.state.items.filter(item => {
                    return item !== filteredItems
                })
            });
        }
    }

    addNewItem = (e) => {
        const itemText = e.target.value
        const currentItem = itemText
        this.setState({
            currentItem,
        })
    }

    btnClick = (e) => {
        e.preventDefault();
        const textInput = this.state.currentItem;
        console.log(textInput)
        if (textInput !== '') {
            const items = [...this.state.items, textInput]

            this.setState({
                items: items,
                currentItem: ''
            })
        }
    }

    resetList = (e) => {
        const items = []

        this.setState({
            items: [],
            checked: false
        })

        setTimeout(() => {
            this.setState({
                checked: null
            })
        }, 500);
    }

    submitHandler(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
            	<Header text="Start page"/>
            	<TostiForm 
            		btnClick={this.btnClick} 
            		submitHandler={this.submitHandler} 
            		checked={this.state.checked} 
            		handleClick={this.handleClick} 
            		addNewItem={this.addNewItem}
            		currentItem={this.state.currentItem}
            	/>
            	<ListItems 
            		resetList={this.resetList} 
            		entries={this.state.items}
            	/>
            </div>
        )
    }
}

export default Start