// pages/components/network.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nodes_complete: {
      type: Boolean,
      default: false,
      observer(newVal, oldVal) {
        console.log (newVal)
        this.setData({
          nodesComplete:newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nodesComplete:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSelector: (name) => {
      return wx.createSelectorQuery().selectAll(name)
    },
  },
  attached(){
    this.circle_list = this.getSelector(".skeleton-circle")
    this.rect_list = this.getSelector(".skeleton-rect");
  }
})
