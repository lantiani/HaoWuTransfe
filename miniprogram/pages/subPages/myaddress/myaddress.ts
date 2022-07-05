// pages/subPages/myaddress/myaddress.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myAddressData:[
            {
                id:1,name:"大白鲨",tel:1576193282,country:"CHINA",city:"BEIJIN",county:"TIANXIN",status:true,bcgColor:"#ffa726"
            },
            {
                id:2,name:"赵哈哈",tel:1501414012,country:"CHINA",city:"BEIJIN",county:"TIANXIN",status:false,bcgColor:"#0288d1"
            }
        ]
    },
    userAddressRadio(e:any) {
        let id = e.detail.id;
        let newData = this.data.myAddressData.map((item:any)=>{
            item.status = item.status = false
            if(item.id === id) {
                item.status = item.status = true
            }
            return item
        })
        this.setData({
            myAddressData:newData
        })
    },
    editAddress(e:any) {
        console.log(e);
    },
    delAddress(e:any) {
        console.log(e);
    },
})