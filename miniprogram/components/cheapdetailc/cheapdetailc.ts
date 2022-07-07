// components/cheapdetailc/cheapdetailc.ts
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
        receive(this:any,e:any) {
            this.triggerEvent("couponData",e.currentTarget.dataset.coupon)
        }
    }
})
