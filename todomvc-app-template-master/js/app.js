(function (Vue) {
	let localData = [
		{
			id:"1",
			content:"Vue.js",
			completed:false,//un do
		},
		{
			id:"2",
			content:"11111Vue.js",
			completed:true,//un do
		},
	]

	new Vue({
		el:"#todoapp",
		data:{
			title:"todos",
			items:[...localData],
			
		},

		//computed property
		computed:{
			needToDo:function(){
				return this.items.filter(item =>{return item.completed === false}).length
			},
			checkStatus:function(){ //false means not all done
				const completed = this.items.filter(item=>{return item.completed===true})
				const totalNumber = this.items.length
				return  completed.length === totalNumber ? true:false
			},
		},

		//method 
		methods: {
			deleteItem:function(id,event){
				console.log("item id",typeof(id))
				this.items = this.items.filter(item=>{return item.id!=id})
				console.log(this.items)
			},
			addTodo:function(event){
				// add new todo to the list
				console.log(event.target.value)
				const newTodo = event.target.value.trim()
				const isSame = this.items.filter(item =>{return item.content === newTodo}).length
				const length = this.items.length
				console.log(isSame)
				if(isSame === 0 && newTodo!=""){
					// not same
					this.items = [...this.items,{
						id:this.items[length-1].id+1,
						content:newTodo,
						completed:false
					}]
					event.target.value = ""
					console.log("length",length)
					console.log(this.items)
				}
				else{
					alert("you already have this todo item or your enter is empty")
				}
				
			},
			toggleClick:function(event){
				// true-> black(all done)  false-> gray
				const checked = event.target.checked
				if(checked === true){
					this.items = this.items.map(item=>{
						return {
							id:item.id,
							content:item.content,
							completed : true
						}
					})
				}
				else{
					this.items = this.items.map(item=>{
						return {
							...item,
							completed : false
						}
					})

				}
				console.log(event.target.checked)
			}	
		},
	})
})(Vue);
