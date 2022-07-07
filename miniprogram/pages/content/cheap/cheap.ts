// pages/subPages/cheap/cheap.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cheapCard:[
            {id:1,src:"../../../assets/images/yhq1.png"},
            {id:2,src:"../../../assets/images/yhq2.png"},
            {id:3,src:"../../../assets/images/yhq3.png"}
        ]
    },
    changeCheap(e:any) {
        console.log(e.currentTarget.dataset.cheap);
        wx.navigateTo({
            url:"/pages/subPages/cheapdeatil/cheapdetail"
        })
    },
    onShow() {

    },
})