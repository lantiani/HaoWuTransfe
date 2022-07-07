Page({

    /**
     * 页面的初始数据
     */
    data: {
        cheapData: [
            { id: 1, title: "新品优惠券", time: "2020.10.10-2022.10.10", cate: "折扣券", full: 100, price: 15, state: 0 },
            { id: 2, title: "新品优惠券", time: "2020.10.10-2022.10.10", cate: "折扣券", full: 100, price: 15, state: 1 },
            { id: 3, title: "新品优惠券", time: "2020.10.10-2022.10.10", cate: "折扣券", full: 100, price: 15, state: 2 },
            { id: 4, title: "新品优惠券", time: "2020.10.10-2022.10.10", cate: "折扣券", full: 100, price: 15, state: 0 },
            { id: 5, title: "新品优惠券", time: "2020.10.10-2022.10.10", cate: "折扣券", full: 100, price: 15, state: 1 },
            { id: 6, title: "新品优惠券", time: "2020.10.10-2022.10.10", cate: "折扣券", full: 100, price: 15, state: 2 }
        ]
    },
    getCheapData(e:any) {
        console.log(e.detail);
    },
    onShow() {
        let result = this.data.cheapData.sort((item: any, son: any) => item.state - son.state);
        this.setData({
            cheapData: result
        })
    },
})