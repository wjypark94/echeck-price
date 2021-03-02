import React, {Component} from 'react';

class Tracker extends Component {
	constructor(props){
		super(props);
		this.state = {
			newItem: "",
			list: []
		}
	}
	//more if you want to add localStoragae into tutorial
	updateInput(key,value){
		//update react state by calling setState again
		this.setState({
			[key]: value
		})

	}
	//create add item
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
	 	} else {
			price = "24.99"
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
			<div className="tracker-section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3>Check an Item</h3>
						</div>
						<div className="col-12">
							<input
							type="number"
							placeholder="Type item here..."
							value={this.state.newItem}
							onChange={e => this.updateInput("newItem", e.target.value)}
							/>
							<button onClick={(e) => this.addItem(e)} className="btn btn-primary">
								ADD 
							</button>
						</div>

						<div className="col-12 pt-5">
							<ul>
								{this.state.list.map(item=>{
									return(
										<li key={item.id} className="py-3">
											<div className="row">
												<div className="col-4 d-flex justify-content-center align-items-center">Views: {item.value}</div>
												<div className="col-4 d-flex justify-content-center align-items-center">Price: ${item.price}</div>
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
