// pages/subPages/addaddress/addaddress.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // inColor: "red",
        // cueColor: "#7ccd7d",
        // status: true,
    },

    changeOff(e: any) {
        console.log(e.detail);
    },
    getFormData(e: any) {
        let { obj, status, tsate } = e.detail
        for (const _key in obj) {
            obj['id'] = +new Date();
            obj['status'] = status;
        }
        let newObj = <any>[];
        newObj.push(obj);
        newObj = wx.setStorageSync("newObj",newObj)
        newObj = [...newObj,obj]
        
        wx.setStorageSync("addressList",newObj)
    }
})

