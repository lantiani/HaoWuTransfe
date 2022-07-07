// pages/subPages/Insureddetail/Insureddetail.ts
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
    data: {
        checked: true,
        cardData: [
            {
                id: 1, text: "国际快递由于多国调度，存在一定比例丢失的情况！", text2: "如丢失包裹，购买丢失险可获得全额赔付赔付(最高5000元)!", cost: "3", state: true, price: 30.00
            },
            {
                id: 2, text: "电子产品等容易被税的高客单价产品建议购买关税保险!", text2: "综合关税=货值x增值税率+(货值+运费+货值x产品税率)x20%+清关杂费。", cost: 2, state: true, price: 20.00
            }
        ],
        isShow: false
    },
    onChange(e: any) {
        let obj = e.currentTarget.dataset.item;
        let value = wx.getStorageSync('inputVal')
        let result = e.currentTarget.dataset.item;
        let state = e.detail;
        let newData = this.data.cardData.map((item: any) => {
            if (item.id === result.id) {
                item.state = state
            }
            if (!obj.state && item.id === obj.id) {
                item.price = value * item.cost / 100
            }
            return item
        })
        this.setData({ cardData: newData });
    },
    dialog() {
        Dialog.confirm({
            title: '风险告知书',
            message: `您好，系统识别到您的订单未投保丢失保险，丢件的概率为万分之三，未购买丢失保险发生丢失的赔付原则为:退运费，按照实际货值赔付但不超过运费价值且最高不超过100美元。请悉知。`,
        })
            .then(() => {
                console.log('成功');
                
                // on confirm
            })
            .catch(() => {
                console.log('失败');
                
                // on cancel
            });
    },
    onChangeInput(e: any) {
        let value = e.detail.value;
        wx.setStorageSync('inputVal', value)
        let reg = /^[\d]{1,}$/;
        if (!reg.test(value)) {
            wx.showToast({
                title: "请检查输入价格是否正确",
                icon: "none"
            })
            return
        }
        this.inspect(value);
    },
    inspect(value: number) {
        let newData = this.data.cardData.map((item: any) => {
            if (item.state) {
                item.price = value * item.cost / 100
            }
            return item
        })
        this.setData({
            cardData: newData
        })
    },

    onShow() {
        wx.setStorageSync('inputVal', 1000)
    },
})