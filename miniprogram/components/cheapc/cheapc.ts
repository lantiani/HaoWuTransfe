// components/cheap/cheap.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        cheapInfo: {
            type: Array
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        bgImg: {
            0: {
                bgPicture: "../../assets/images/zk.png",
                mark: "../../assets/images/xb.png",
            },
            1: {
                bgPicture: "../../assets/images/bg-ysy.png",
                mark: "../../assets/images/xb-ysy.png",
                used: "../../assets/images/ysy.png"
            },
            2: {
                bgPicture: "../../assets/images/bg-ygq.png",
                mark: "../../assets/images/xb-ygq.png",
                used: "../../assets/images/ygq.png"
            }
        },
        show: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeCheap(this: any, e: any) {
            this.triggerEvent("cheapData", e.currentTarget.dataset.cheapdata)
        },
        exchangeCode(this:any,e: any) {
            console.log(e);
            this.setData({
                show:true
            })
        },
        getUserInfo(e: any) {
            console.log(e.detail);
        },
        onClose(this: any) {
            this.setData({ show: false });
        },
        getCode(e:any) {
            console.log(e.detail,'das');
        },
    }
})
