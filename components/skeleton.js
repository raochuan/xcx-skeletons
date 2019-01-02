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
          this.circle_list = this.getSelector(".skeleton-circle")
          this.rect_list = this.getSelector(".skeleton-rect");
          ["rect_list","circle_list"].forEach(item => {
            this.getQueryBoundRect(item,this[item],this);
          });
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    rect_list: [],
    circle_list: [],
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
    getQueryBoundRect:(name,selector,that) => {
      selector.boundingClientRect().exec((res) => {
        console.log ("dom选择后:",name,res[0])
        console.log(res)
        that.setData({
          [name]: res[0]
        })
      })
    }
  }
})
