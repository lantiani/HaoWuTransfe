// pages/subPages/address/address.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indexList: ['#','A','B','C','D','E','F','G'],
        addressData:[
            {id:1,title:"美国",sign:"#",english:"America"},
            {id:2,title:"英国",sign:"#",english:"America"},
            {id:3,title:"德国",sign:"D",english:"America"},
            {id:4,title:"法国",sign:"F",english:"America"},
            {id:5,title:"漂亮国",sign:"#",english:"America"},
            {id:6,title:"小丑国",sign:"#",english:"America"},
            {id:7,title:"giao国",sign:"G",english:"America"},
            {id:8,title:"英吉利",sign:"#",english:"America"},
            {id:9,title:"俄罗斯",sign:"E",english:"America"},
            {id:10,title:"巴基斯坦",sign:"B",english:"America"},
            {id:11,title:"一本",sign:"#",english:"America"},
            {id:12,title:"埃及",sign:"A",english:"America"},
            {id:13,title:"印度",sign:"#",english:"America"},
            {id:14,title:"中非共和国",sign:"#",english:"America"},
            {id:15,title:"罗马",sign:"#",english:"America"},
            {id:16,title:"保加利亚",sign:"B",english:"America"},
            {id:16,title:"澳大利亚",sign:"A",english:"America"},
            {id:16,title:"爱尔兰",sign:"A",english:"America"},
            {id:16,title:"爱国",sign:"A",english:"America"}
        ]
    },
    selectedAddress(e:any) {
        wx.setStorageSync('address',e.currentTarget.dataset.address)
        wx.reLaunch({
            url:`/pages/content/index/index?address=${e.currentTarget.dataset.address}`
        })
    }

})