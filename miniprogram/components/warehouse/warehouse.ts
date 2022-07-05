import { wxApi } from "../../utils/tool"

// components/warehouse/warehouse.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {

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
        async copy(e: any) {
            await wxApi(wx.setClipboardData, { data: e.target.dataset.phone })
            await wxApi(wx.showToast, {
                title: '复制成功',
                icon: 'none',
                duration: 2000
            })
        },
    }
})
