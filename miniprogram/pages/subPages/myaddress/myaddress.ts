// pages/subPages/myaddress/myaddress.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myAddressData: <any>[
            // {
            //     id: 1, username: "大白鲨", phone: 1576193282, city: "CHINA", address: "BEIJIN", status: true, code:123212,bcgColor: "#ffa726"
            // },
            // {
            //     id: 2, username: "赵哈哈", phone: 1501414012, city: "CHINA", address: "BEIJIN", status: false,code:156455, bcgColor: "#0288d1"
            // }
        ]
    },
    onShow() {
        // let address = <any>[];
        let address = wx.getStorageSync("addressList");
        if (address) {
            this.setData({
                myAddressData: address
            })
        }

    },
    // 默认地址
    userAddressRadio(e: any) {
        let id = e.detail.id;
        let newData = this.data.myAddressData.map((item: any) => {
            item.status = item.status = false
            item.id === id && (item.status = item.status = true)
            return item
        })
        this.setData({
            myAddressData: newData
        })
        wx.setStorageSync("addressList", this.data.myAddressData);
    },
    // 编辑地址
    editAddress(e: any) {
        console.log(e.detail);
    },
    // 删除地址
    delAddress(e: any) {
        let id = e.detail;
        let addressIndex = this.data.myAddressData.findIndex(((item: any) => item.id === id));
        this.data.myAddressData.splice(addressIndex, 1);
        this.setData({
            myAddressData: this.data.myAddressData
        })
    }
})