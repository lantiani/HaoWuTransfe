import { wxApi } from "../../../utils/tool"

// pages/subPages/zyaddress/zyaddress.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: [
            {
                id: 1, title: "Name", value: "Please fill in the recipient‘s name", text: "^[a-zA-z0-9]{3,12}$", state: true
            },
            {
                id: 2, title: "Phone", value: "Please fill in the recipient‘s phone", text: "^1[3-9]{1}[\d]{9}$", state: true
            },
            {
                id: 3, title: "Address", value: "Please fill in the address", text: "^[a-zA-z0-9]{3,12}$", state: true
            },
            {
                id: 4, title: "City", value: "Please fill in the city", text: "^[a-zA-z0-9]{3,12}$", state: true
            },
            {
                id: 5, title: "PostCode", value: "Please fill in the postcode", text: "^[a-zA-z0-9]{3,12}$", state: true
            },
        ],
        inColor: "red",
        cueColor: "#7ccd7d",
        status: true,
        isIndex: <any>[]
    },
    // async copy(e: any) {
    //     await wxApi(wx.setClipboardData, { data: e.target.dataset.phone })
    //     await wxApi(wx.showToast, {
    //         title: '复制成功',
    //         icon: 'none',
    //         duration: 2000
    //     })
    // },
    zyAddress() {
        console.log('zyAddress');
    },
    skipAddress() {
        wx.navigateTo({
            url: "/pages/subPages/zyaddress/zyaddress"
        })
    },
    inputVal(e: any) {
        let { text, id } = e.currentTarget.dataset.item;
        let reg: RegExp = new RegExp(text);

        // let reg = /^[a-zA-z0-9]{3,12}$/
        let newUserInfo = this.data.userInfo.map((item: any) => {
            if (item.id === id) {
                item.state = item.state = reg.test(e.detail.value);
            }
            return item
        })
        let status = this.data.userInfo.every(((item: any) => {
            return item.state
        }))
        // if (e.detail.value === "") {
        //     this.setData({
        //         status: true
        //     })
        // }
        this.setData({
            userInfo: newUserInfo,
            status,
        })


        // let reg = /[\u4e00-\u9fa5]+/;
        // let result = reg.test(e.detail.value);
        // this.setData({
        //     isIndex:e.currentTarget.dataset.index
        // }) 
        // let isIndex = this.data.isIndex
        // if (result) {
        //     isIndex.push(e.currentTarget.dataset.index)
        //     console.log(isIndex);

        //     this.setData({
        //         inColor: "red",
        //         cueColor: "red",
        //         isIndex
        //     })
        // } else {
        //     this.setData({
        //         inColor: "",
        //         cueColor: "#ff976a"
        //     })
        // }
    }
})