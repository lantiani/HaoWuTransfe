// pages/subPages/banner/banner.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerData: [
            {
                id: 1,
                img: "../../../assets/images/1.jpg"
            },
            {
                id: 2,
                img: "../../../assets/images/2.jpg"
            },
            {
                id: 3,
                img: "../../../assets/images/3.jpg"
            },
        ],
        btnData:[
            {id:1,text:"普通货物"},
            {id:2,text:"电子产品"},
            {id:3,text:"液体粉末"},
            {id:4,text:"内地ESM"},
            {id:5,text:"广东ESM"}
        ],
        bcgColor:0,
        lodShow: false
    },
    getIndex(e:any) {
        this.setData({
            bcgColor:e.currentTarget.dataset.index
        })
    },
    getUserInfo(event:any) {
        console.log(event.detail);
    },

    transport() {
        this.setData({ lodShow: true });
    },
    address() {
        wx.navigateTo({
            url:"/pages/subPages/address/address"
        })
    },
    nextStep(){
        wx.navigateTo({
            url:"/pages/subPages/zyaddress/zyaddress"
        })
    },
    onClose() {
        this.setData({ lodShow: false });
    },
    call() {
        console.log('call');
    }
})