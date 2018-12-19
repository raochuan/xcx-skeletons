// components/skeletons.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nodes_complete:{
      type:Boolean,
      default:false,
      observer(newVal,oldVal){
        if (newVal){
          //完成nodes节点渲染
          let selector = this.getSelector(".skeletons-circle")
          this.getQueryBoundRect(selector);
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached(){
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getSelector:(name) => {
      return wx.createSelectorQuery().selectAll(name)
    },
    getQueryBoundRect:(selector) => {
      selector.boundingClientRect().exec((res) => {
        console.log ("dom选择后:",res)
      })
    }
  }
})
