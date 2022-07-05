// pages/subPages/my/my.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderIcon: [
            { id: 1, icon: "paid", title: "待付款", page: "/pages/subPages/payment/payment" },
            { id: 2, icon: "logistics", title: "待发货", page: "/pages/subPages/sendgoods/sendgoods" },
            { id: 3, icon: "gift-o", title: "待收货", page: "/pages/subPages/takegoods/takegoods" },
            { id: 4, icon: "more-o", title: "待评价", page: "/pages/subPages/appraise/appraise" },
        ],
        myData: [
            { id: 1, title: "我的地址", icon: "arrow", page: "" },
            { id: 2, title: "我的优惠券", icon: "arrow", page: "" },
            { id: 3, title: "活动中心", icon: "arrow", page: "" },
            { id: 4, title: "联系客服", icon: "arrow", page: "" },
            { id: 5, title: "转运流程", icon: "arrow", page: "" },
            { id: 6, title: "转运须知", icon: "arrow", page: "" },
            { id: 7, title: "关于我们", icon: "arrow", page: "" }
        ]
    }
})