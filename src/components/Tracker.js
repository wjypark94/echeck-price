import React, {Component} from 'react';
import '../styles/Tracker.css';

class Tracker extends Component {
	constructor(props){
		super(props);
		this.state = {
			newItem: "",
			list: []
		}
	}
	//update input function from input form
	updateInput(key,value){
		//update react state by calling setState again
		this.setState({
			[key]: value
		})

	}
	//create add item function
	addItem(){
     //create new item with unique ID to identify each listen item by
		let price = ""
		if (!this.state.newItem){
			alert ('Please enter a value')
			price = "None"
			return false;
		} else if(this.state.newItem <= 500){
			price = "4.99"
	 	} else if (this.state.newItem <= 1000){
			price = "9.99"
	 	} else if (this.state.newItem <= 1500){
			price = "14.99"
	 	} else if (this.state.newItem <= 2000){
		 	price= "19.99"
	 	}  else {
			price = "29.99"
	 	}
	 	const newItem = {
			id: 1 + Math.random(),
		 	value: this.state.newItem.slice(),
		 	price: price
	 	}
		//use spread operator to take current copy of list items
		const list = [...this.state.list];

		//add new item to list
		list.push(newItem);

		//update state with new list and reset newItem input and newItem will be at initial state of two strings
		this.setState({
			list,
			newItem:""
	 	})
	}

	deleteItem(id){
		//copy current listem of items
		const list = [...this.state.list]
		//filter out item being deleted
		const updatedList = list.filter(item => item.id !== id);
		this.setState({list: updatedList})
	}

	render (){
		return (
			<div className="tracker-section pb-3 pb-lg-5">
				<div className="container py-3">
					<div className="row mx-auto row-width">
						<div className="col-12 input-group">
							<input
							type="number"
							placeholder="Type monthly views here..."
							value={this.state.newItem}
							onChange={e => this.updateInput("newItem", e.target.value)}
							className="form-control"
							/>
							<button onClick={(e) => this.addItem(e)} className="btn btn-primary">
								Calculate 
							</button>
						</div>
					</div>
					<div className="row row-width mx-auto">
						<div className="col-12 pt-5">
							<ul>
								{this.state.list.map(item=>{
									return(
										<li key={item.id} className="py-3">
											<div className="row">
												<div className="col-4 d-flex justify-content-center align-items-center">Monthly Views: {item.value}</div>
												<div className="col-4 d-flex justify-content-center align-items-center">Monthly Price: ${item.price}</div>
												<div className="col-4"><button onClick={()=> this.deleteItem(item.id)} className="btn btn-danger">X</button></div>
											</div>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Tracker;
