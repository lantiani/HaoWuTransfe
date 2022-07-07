// pages/subPages/order/order.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        orderData: [
            { id: 1, fahuo: "中国", shouhuo: "美国", state: 0, orderId: 20220509140712345678 },
            { id: 2, fahuo: "中国", shouhuo: "漂亮国", state: 1, orderId: 20220509140712345678 },
            { id: 3, fahuo: "中国", shouhuo: "爱国", state: 2, orderId: 20220509140712345678 },
            { id: 4, fahuo: "中国", shouhuo: "小丑国", state: 3, orderId: 20220509140712345678 },
            { id: 5, fahuo: "中国", shouhuo: "白鲨国", state: 4, orderId: 1231231231313213 },
            { id: 5, fahuo: "中国", shouhuo: "白鲨国", state: 5, orderId: 1231231231313213 }
        ],
        newData: <any>[],
        select: [
            { title: "全部", status: "all" },
            { title: "待支付", status: 0 },
            { title: "已支付", status: 1 },
            { title: "已完成", status: 2 },
        ],
    },

    onChange(e: any) {
        let newData;
        if (e.detail.name === 0) {
            newData = this.data.orderData
        } else {
            newData = this.data.orderData.filter((item: any) => {
                return item.state === e.detail.name && item
            });
        }
        this.setData({
            newData,
        })

        wx.showToast({
            title: `切换到标签 ${e.detail.name}`,
            icon: 'none',
        });
    },
    onLoad() {
        this.setData({
            newData: this.data.orderData
        })
    },
    onShow() {

    },
})