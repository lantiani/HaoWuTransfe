// components/myaddressc/myaddressc.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        userAddressData:{
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
        changeRadio(this:any,e:any) {
            // console.log(e.currentTarget.dataset.useraddress);
            this.triggerEvent("radioaddress",e.currentTarget.dataset.useraddress)
        },
        edit(this:any,e:any) {
            // console.log(e.currentTarget.dataset.useraddress);
            this.triggerEvent("addressEdit",e.currentTarget.dataset.useraddress)
        },
        del(this:any,e:any) {
            // console.log(e.currentTarget.dataset.addressid);
            this.triggerEvent("addressDel",e.currentTarget.dataset.addressid)
        },
    }
})
