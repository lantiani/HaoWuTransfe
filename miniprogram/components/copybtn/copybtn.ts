// components/copybtn/copybtn.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        bcgColor:{
            type:String,
            value:"#000080"
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
        copyAdd(this:any,e:any) {
            const {res} = e.currentTarget.dataset
            this.triggerEvent("copy",res)
        }
    }
})