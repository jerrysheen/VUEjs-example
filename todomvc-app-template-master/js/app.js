(function (Vue) {
	// save or get data from localStorage
	const KEY_STORAGE = 'vue_js'
	const storeItems ={
		fetch:function(){
			// get json string then parse to object
			return (JSON.parse(localStorage.getItem(KEY_STORAGE)) || [])
		},
		save:function(items){
			localStorage.setItem(KEY_STORAGE, JSON.stringify(items))
		}
	}
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

	var app = new Vue({
		el:"#todoapp",
		data:{
			title:"todos",
			items:storeItems.fetch(KEY_STORAGE),
			currentID:-1,
			filterStatus:'all', // decided which button
			
		},
		// watch listener
		watch: {
			items:{
				deep:true,
				handler:function(newItems, oldItems){
					storeItems.save(newItems)
				}
			}
		},
		//custom instruction
		directives:{
			focus :{
				inserted(el){
					el.focus()
				},
				update(el){
					el.focus()
				}
			}
		},
		//computed property
		computed:{
			filterStatusItems:function(){
				// return a list depending on which router you choice
				 switch(this.filterStatus){
					case 'all':
						console.log("all")
						return this.items
					case 'active':
						console.log("active")
						return this.items.filter(item=>{return item.completed===false})
					default :
						console.log("complted")
						return this.items.filter(item=>{return item.completed===true})
				 }
			},
			hasCompletedItem:function(){
				// to computed weather there has complted todos in the items,
				const completed = this.items.filter(item =>{return item.completed === true}).length
				return 0===completed? false:true
			},
			needToDo:function(){
				return this.items.filter(item =>{return item.completed === false}).length
			},
			checkStatus:function(){ //false means not all done
				const completed = this.items.filter(item=>{return item.completed===true})
				const totalNumber = this.items.length
				return  completed.length === totalNumber ? true:false
			}
		},

		//method 
		methods: {
			deleteItem:function(index){
				console.log("item id",index)
				this.items.splice(index,1) 
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
						id:length=== 0 ? 1:String(Number(this.items[length-1].id)+1),
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
			},
			deleteFinished:function(){
				this.items = this.items.filter(
					item=>{
						return item.completed===false
					}
				)
			},
			editItem:function(id){
				//console.log("id",id)
				this.currentID = id
				//console.log(this.currentID===id)
			},
			// edit , leave and save function
			leaveEdit:function(){
				this.currentID = "-1"
			},	
			saveEdit(index,event){
				console.log(event.target.value)
				const newValue = event.target.value
				if(newValue === ""){
					this.leaveEdit()
				}
				else{
					this.items[index] = {
						...this.items[index],
						content:newValue
					}
					this.leaveEdit()
				}
			}
		},
	})

	//路由hash值发生变化之后，会自动调用这个函数
	window.onhashchange = function(){
		console.log('hash', window.location.hash)
		const hash = window.location.hash.substr(2) || 'all'
		app.filterStatus = hash
		console.log(app.filterStatus)
	}
})(Vue);
