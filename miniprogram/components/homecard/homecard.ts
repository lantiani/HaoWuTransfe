// components/homecard.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data:{
            type:Object
        },
        bcgColor:{
            type:String,
            value:"#9877bb"
        },
        textColor:{
            type:String,
            value:"#fff"
        },
        iconColor:{
            type:String,
            value:"#4e148c"
        },
        imgSize:{
            type:String,
            value:"86px"
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
        fn(this:any,e:any){
            const {res} = e.currentTarget.dataset
            this.triggerEvent('click',res)
        }
    },
})
