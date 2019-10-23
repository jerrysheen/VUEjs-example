const Mock = require('mockjs')
const data = Mock.mock({
    'empList|6':[
        {
            'id|1':1,
            'name':'@cname',
            'price':'@float',
            'birthday':'@date(yyyy/MM)',
            'content':'@csentence(50,200)'
        }
    ]
})

console.log(data)