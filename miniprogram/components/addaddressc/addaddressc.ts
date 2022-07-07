// components/addaddressc.ts
// import { areaList } from '@vant/area-data';
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isShow: {
            type: Boolean,
            value: false
        },
        titleColor: {
            type: String,
            value: '#63adfc'
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        areaList: {
            province_list: {
                110000: '北京市',
                120000: '天津市',
                440100: '广东省'
            },
            city_list: {
                110100: '北京市',
                120100: '天津市',
                440100: '广州市',
                440500: '汕头市'
            },
            county_list: {
                110101: '东城区',
                110102: '西城区',
                110105: '朝阳区',
                110106: '丰台区',
                110108: '海淀区',
                110116: '怀柔区',
                120101: '和平区',
                120103: ' 河西区',
                120115: ' 宝坻区',
                440101: ' 市辖区',
                440103: ' 荔湾区',
                440513: '潮阳区',
                440514: '潮南区',
                440501: '市辖区',
            },
        },
        userInfo: [
            {
                id: 1, title: "Name", value: "Please fill in the recipient‘s name", text: "^[\\W]{1,12}$", state: true,name:"username"
            },
            {
                id: 2, title: "Phone", value: "Please fill in the recipient‘s phone", text: "^1[3-9]{1}[\\d]{9}$", state: true,name:"phone"
            },
            {                                                                                 
                id: 3, title: "Address", value: "Please fill in the address", text: "^[a-zA-z0-9]{3,12}$", state: true,name:"address"
            },
            {
                id: 4, title: "City", value: "Please fill in the city", text: "^[a-zA-z0-9]{3,12}$", state: true,name:"city"
            },
            {
                id: 5, title: "PostCode", value: "Please fill in the postcode", text: "^[a-zA-z0-9]{3,12}$", state: true,name:"postcode"
            }
        ],
        checked: true,
        show: false,
        inColor: "red",
        cueColor: "#7ccd7d",
        status: true
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeInput(this: any, e: any) {
            this.triggerEvent("inputVal", e);
        },
        onChange(this: any, { detail }: any) {
            // 需要手动对 checked 状态进行更新
            // console.log(detail);
            this.setData({ checked: detail });
            this.triggerEvent("off",detail)
        },
        sure(this:any,e:any) {
            console.log(e.detail.values);
            this.setData({
                show:false
            })
        },
        showArea(this:any) {
            this.setData({
                show:true
            })
        },
        off(this:any) {
            this.setData({
                show:false
            })
        },
        submitform(this:any,e:any) {
            let arr = [];
            let status = false;
            let obj = e.detail.value
            // 有错误则push到数组中
            for (const key in obj) {
                if(!obj[key]){
                    arr.push(obj)
                }
            }
            // 判断长度为0是所有input都有输入值
            arr.length === 0 ? status = true : status = false
            // 判断所有填写有没错误
            let state = this.data.userInfo.every((item:any)=> item.state)
            if(!status || !state) {
                wx.showToast({
                    title:"请检查填写是否正确",
                    icon:"none"
                })
                return
            } else {
                wx.navigateTo({
                    url:"/pages/subPages/myaddress/myaddress"
                })
            }
            this.triggerEvent("formData",{obj,status,state});
        },
        // 修改数据
        changeVal(this:any,e: any) {
            let { text, id } = e.currentTarget.dataset.item;
            let reg: RegExp = new RegExp(text);
            let newUserInfo = this.data.userInfo.map((item: any) => {
                item.id === id && (item.state = item.state = reg.test(e.detail.value));
                return item
            })
            let status = this.data.userInfo.every(((item: any) => item.state))
            this.setData({
                userInfo: newUserInfo,
                status,
            });
            this.triggerEvent("changeStatus",status)
        },
    }
})
