
import '../componentStyles/App.css';
import React, {Component} from 'react';

class App extends Component {
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
     //creaate new item with unique ID to identify each listen item by
	 console.log("hey")
	 console.log(this.state.newItem);


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
			<div className="App">
				<div>
					Check an Item...
					<br/>
					<input
					  type="number"
					  placeholder="Type item here..."
					  value={this.state.newItem}
					  onChange={e => this.updateInput("newItem", e.target.value)}
					/>
					<button
					  onClick={(e) => this.addItem(e)}
					>
					ADD 
					</button>
					<br/>
		
					<ul>
					  {this.state.list.map(item=>{
						  return(
							  <li key={item.id}>
							    {item.value}
								{console.log(item)}
								<button onClick={()=> this.deleteItem(item.id)}>
									X
								</button>
							  </li>
						  )
					  })}
					</ul>
					

				</div>
			</div>
		)
	}
}

export default App;
