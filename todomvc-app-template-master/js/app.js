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
			newTodo:"",
			items:[...localData]

		},
		methods: {
			deleteItem:function(id,event){
				console.log(typeof(id))
				this.items = this.items.filter(item=>{return item.id!=id})
				console.log(this.items)
			},
			addTodo:function(){
				console.log(this.newTodo)
			}	
		},
	})
})(Vue);
