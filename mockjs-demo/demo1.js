const Mock = require('mockjs')
const data = Mock.mock({
    //define data you need to generate
    'memberList|4':[
        {
            'id':1,
            'name':'Allen'
        }
    ]
})

console.log(data)