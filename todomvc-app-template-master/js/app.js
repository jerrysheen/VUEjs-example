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
			items:[...localData]
		},
		computed:{
			needToDo:function(){
				return this.items.filter(item =>{return item.completed === false}).length
			}
		},
		methods: {
			deleteItem:function(id,event){
				console.log("item id",typeof(id))
				this.items = this.items.filter(item=>{return item.id!=id})
				console.log(this.items)
			},
			addTodo:function(event){
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
				
			}	
		},
	})
})(Vue);
