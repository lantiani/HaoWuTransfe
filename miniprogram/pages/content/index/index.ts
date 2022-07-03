// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    cardDataOne: {
      title: "转运须知",
      text: "流程和注意事项",
      icon: "../../assets/images/icon-arrow.svg",
      iconCart: "../../assets/images/icon-hc.svg"
    },
    cardDataTwo: {
      title: "运费估算",
      text: "费用心中有数",
      icon: "../../assets/images/icon-arrow.svg",
      iconCart: "../../assets/images/icon-jsj.svg"
    }


  },
  cardClick1(){
    console.log('ka1');
    
  },
  cardClick2(){
    console.log('ka2');

  },
})
