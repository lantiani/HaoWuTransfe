import { wxApi } from "../../utils/tool";

// components/orderc/orderc.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        orderdatas:{
            type:Array
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        async changeCopy(e: any) {
            console.log();
            await wxApi(wx.setClipboardData, { data: e.currentTarget.dataset.orderid })
            await wxApi(wx.showToast, {
                title: '复制成功',
                icon: 'none',
                duration: 2000
            })
        }
    }
})
