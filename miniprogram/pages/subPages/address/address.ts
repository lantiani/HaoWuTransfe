import { debounce } from "../../../utils/tool";

// pages/subPages/address/address.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indexList: ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
        addressData: [
            { id: 1, title: "美国", sign: "#", english: "America" },
            { id: 2, title: "英国", sign: "#", english: "America" },
            { id: 3, title: "德国", sign: "D", english: "America" },
            { id: 4, title: "法国", sign: "F", english: "America" },
            { id: 5, title: "漂亮国", sign: "#", english: "America" },
            { id: 6, title: "小丑国", sign: "#", english: "America" },
            { id: 7, title: "giao国", sign: "G", english: "America" },
            { id: 8, title: "英吉利", sign: "#", english: "America" },
            { id: 9, title: "俄罗斯", sign: "E", english: "America" },
            { id: 10, title: "巴基斯坦", sign: "B", english: "America" },
            { id: 11, title: "一本", sign: "#", english: "America" },
            { id: 12, title: "埃及", sign: "A", english: "America" },
            { id: 13, title: "印度", sign: "#", english: "KiJi" },
            { id: 14, title: "中非共和国", sign: "#", english: "America" },
            { id: 15, title: "罗马", sign: "#", english: "America" },
            { id: 16, title: "保加利亚", sign: "B", english: "America" },
            { id: 17, title: "澳大利亚", sign: "A", english: "America" },
            { id: 18, title: "爱尔兰", sign: "A", english: "America" },
            { id: 19, title: "爱国", sign: "A", english: "America" },
            { id: 20, title: "白鲨国", sign: "B", english: "America" }
        ],
        newData:[],
        newIndex:[],
        addressDataTwo:<any>[],
        indexListTwo:<any>[]
    },
    onShow() {
        this.setData({
            addressDataTwo:this.data.addressData,
            indexListTwo:this.data.indexList
        })
    },
    selectedAddress(e: any) {
        wx.setStorageSync('address', e.currentTarget.dataset.address)
        wx.reLaunch({
            url: `/pages/content/index/index?address=${e.currentTarget.dataset.address}`
        })
    },
    searchAddress: debounce(function (this:any,e: any) {
        console.log(e.detail.value);
        let arr = <any>[];
        let index = <any>[];
        // let regName = /^[a-z,A-Z]+/;
        // let regTitle = /^[\u4e00-\u9fa5]+/;
        // let nameBoo = regName.test(e.detail.value)
        // let titleBoo = regTitle.test(e.detail.value)
        
        this.data.addressData.forEach((item:any) => {
            if(item.title.includes(e.detail.value) || item.english.includes(e.detail.value)) {
                arr.push(item)
                index.push(item.sign)
                this.setData({
                    newData:arr,
                    newIndex:index
                })
                if(e.detail.value) {
                    this.setData({
                        addressDataTwo:this.data.newData,
                        indexListTwo:this.data.newIndex
                    })
                    return 
                } else {
                    this.setData({
                        addressDataTwo:this.data.addressData,
                        indexListTwo:this.data.indexList
                    })
                }
            } 
        });
    }, 500, false)

})