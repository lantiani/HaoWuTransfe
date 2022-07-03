// pages/subPages/banner/banner.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerData: [
            {   
                id:1,
                img:"../../../assets/images/1.jpg"
            },
            {
                id:2,
                img:"../../../assets/images/2.jpg"
            },
            {
                id:3,
                img:"../../../assets/images/3.jpg"
            },
        ]
    },
    address() {
        console.log('address');
    },
    transport() {
        console.log('transport');
    },
    call() {
        console.log('call');
        
    }
})