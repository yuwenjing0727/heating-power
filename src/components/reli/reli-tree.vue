<template>
  <div class="reli-tree">
    <div class="normalitem"
         :class="{nodeitem: model.children.length,selectItem: model.selected && !model.children.length, erjiNormal: !model.selected && !model.children.length, yijiSelect: model.parentSelected, parentHeight: model.children.length, sonHeight: !model.children.length}"
         v-if="model.authObjectDesc && model.leve">
      <div class="itemRow" :style="{ marginLeft:model.leve*10+'px' }" @click.preventDefault="itemClick(model)">
        <!--<span v-show="model.children" @click="expandOrCollapse(model)">-->
        <span v-show="model.children">

          <!--打开状态, 展示向下的图片-->
          <!--直接使用图片有404bug, 图片不会被打包成base64-->
          <img v-show="model.open && model.children.length"
               :src="model.parentSelected ? arrow_down_highlight : arrow_down_normal">

          <img v-show="!model.open && model.children.length"
               :src="model.parentSelected ? arrow_right_highlight: arrow_right_normal">

          <img v-show="!model.children.length" src="./erjiicon.png" style="vertical-align: top;">

        </span>
        <div class="hover-div" @mouseover="flag=true" @mouseout="flag=false">
          <span class="treeName">{{model.authObjectDesc}}</span>
        </div>
      </div>
    </div>

    <div>
      <navigation v-if="model.open" v-for="row in model.children" :key="row.authObjectDesc" :model="row"></navigation>
    </div>
  </div>
</template>

<script>
  import Bus from '../../util/eventBus.js';
  export default {
    name: 'navigation',

    // 使用`编辑树`组件需要传递的数据
    props: {
      // 编辑树对象
      model: {
        type: Object,
        default: function () {
          return {
            authObjectDesc: 'root',
            open: true,
            leve: 0,
            children: [
              {
                authObjectDesc: '基础数据管理',
                open: false,
                leve: 1,
                selected: false,
                parentSelected: false,
                children: [
                  {
                    authObjectDesc: '面积属性维护',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '区域划分维护',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '原因维护',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '用户面积属性设置',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '填报设置',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '重点用户设置',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '热源区域设置',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                ]
              },
              {
                authObjectDesc: '供热生产管理',
                open: true,
                leve: 1,
                selected: false,
                parentSelected: true,
                children: [
                  {
                    authObjectDesc: '年供热计划填报',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: true,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '年供热计划查询',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '日实际供热填报',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '日实际供热查询',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  }
                ]
              },
              {
                authObjectDesc: '停热生产管理',
                open: false,
                leve: 1,
                selected: false,
                parentSelected: false,
                children: [
                  {
                    authObjectDesc: '年停热计划填报',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '年停热计划查询',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '日实际停热填报',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '日实际停热查询',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                ]
              },
              {
                authObjectDesc: '供热统计分析',
                open: false,
                leve: 1,
                selected: false,
                parentSelected: false,
                children: [
                  {
                    authObjectDesc: '大网统计分析',
                    open: false,
                    leve: 2,
                    children: [
                      {
                        authObjectDesc: '各分公司供热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '各分公司年供热计划完成情况',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '日供热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '热源年供热计划统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '实际与计划供热对比统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '综合供热分析',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },

                    ],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '独网统计分析',
                    open: false,
                    leve: 2,
                    children: [
                      {
                        authObjectDesc: '各分公司供热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '各分公司年供热计划完成情况',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '日供热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '热源年供热计划统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '实际与计划供热对比统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '综合供热分析',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                    ],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '采暖季供热计划分析',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '采暖季年供热计划与实际对比分析',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '采暖季日供热计划与实际对比分析',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '重点用户实际供热统计',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                ]
              },
              {
                authObjectDesc: '停热统计分析',
                open: false,
                leve: 1,
                selected: false,
                parentSelected: false,
                children: [
                  {
                    authObjectDesc: '大网统计分析',
                    open: false,
                    leve: 2,
                    selected: false,
                    parentSelected: false,
                    children: [
                      {
                        authObjectDesc: '各分公司停热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '各分公司年停热计划完成情况',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '日停热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '热源年停热计划统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '实际与计划停热对比统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '综合停热分析',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },

                    ]
                  },
                  {
                    authObjectDesc: '独网统计分析',
                    open: false,
                    leve: 2,
                    selected: false,
                    parentSelected: false,
                    children: [
                      {
                        authObjectDesc: '各分公司停热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,

                      },
                      {
                        authObjectDesc: '各分公司年停热计划完成情况',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '日停热统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '热源年停热计划统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '实际与计划停热对比统计',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                      {
                        authObjectDesc: '综合停热分析',
                        open: false,
                        leve: 3,
                        children: [],
                        selected: false,
                        parentSelected: false,
                      },
                    ]
                  },
                  {
                    authObjectDesc: '采暖季停热计划分析',
                    open: false,
                    leve: 2,
                    selected: false,
                    parentSelected: false,
                    children: []
                  },
                  {
                    authObjectDesc: '采暖季年停热计划与实际对比分析',
                    open: false,
                    leve: 2,
                    selected: false,
                    parentSelected: false,
                    children: []
                  },
                  {
                    authObjectDesc: '采暖季日停热计划与实际对比分析',
                    open: false,
                    leve: 2,
                    selected: false,
                    parentSelected: false,
                    children: []
                  },
                  {
                    authObjectDesc: '重点用户实际停热统计',
                    open: false,
                    leve: 2,
                    selected: false,
                    parentSelected: false,
                    children: []
                  },
                ]
              },
              {
                authObjectDesc: '其他统计汇总',
                open: false,
                leve: 1,
                selected: false,
                parentSelected: false,
                children: [
                  {
                    authObjectDesc: '主数据查询',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '面积属性统计汇总',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '采暖形式分类统计汇总',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                  {
                    authObjectDesc: '核增核减统计',
                    open: false,
                    leve: 2,
                    children: [],
                    selected: false,
                    parentSelected: false,
                  },
                ]
              }
            ]
          };
        }
      },

    },
    data () {
      return {
        flag: false,
        currentModel: {},
        // 当前的父级
        currentParent: {},

        // 图片资源
        arrow_right_normal: require('./yijizhedie_right.png'),
        arrow_down_normal: require('./yijizhedie.png'),
        arrow_right_highlight: require('./yijizhangkai_right.png'),
        arrow_down_highlight: require('./yijizhangkai.png'),

        // 面包屑导航数据数组
        pathArr: []
      };
    },

    methods: {

      itemClick (model) {
        this.currentModel = model;

        // 如果有子集, 那么直接返回
        if (model.children.length !== 0) {

          this.expandOrCollapse(model);
          return;
        }

        let root;
        let rootComponent;
        if (model.leve === 2) {
          root = this.$parent.$parent.model;
          rootComponent = this.$parent.$parent;
        } else if (model.leve === 3) {
          root = this.$parent.$parent.$parent.model;
          rootComponent = this.$parent.$parent.$parent;
        }

        rootComponent.pathArr = [];
        if (model.leve === 2) {
          rootComponent.pathArr.push(this.$parent.model.authObjectDesc);
          rootComponent.pathArr.push(model.authObjectDesc);
        } else if (model.leve === 3) {
          rootComponent.pathArr.push(this.$parent.$parent.model.authObjectDesc);
          rootComponent.pathArr.push(this.$parent.model.authObjectDesc);
          rootComponent.pathArr.push(model.authObjectDesc);
        }

        Bus.$emit('breadcrumbNavChange', rootComponent.pathArr);

        this.setSelectState(root.children, 'selected');
        model.selected = true;
        this.$parent.model.parentSelected = true;
      },

      setSelectState(model, attr) {
        let self = this;
        for (var i = 0; i < model.length; i++) {
          var current = model[i];
          if (attr === 'selected') {
            current.selected = false;
            current.parentSelected = false;
          } else if (attr === 'parentSelected') {
            current.parentSelected = false;
          }

          if (current.children.length) {
            self.setSelectState(current.children, attr);
          } else {
          }
        }
      },

      /**
       * 展开/收起功能
       */
      expandOrCollapse (model) {

        let root;
        if (model.leve === 1) {
          root = this.$parent.model;
        } else if (model.leve === 2) {
          root = this.$parent.$parent.model;
        }

        this.setSelectState(root.children, 'parentSelected');
        model.parentSelected = true;

        if (this.available === false) {
          return;
        }
        this.model.open = !this.model.open;
      },

    },
    watch: {}
  };
</script>

<style scoped>
  .parentHeight {
    height: 50px;
    /*vertical-align: middle;*/
    padding-top: 18px;
    line-height: 14px;
    /*vertical-align: middle;*/
    box-sizing: border-box;
  }

  .sonHeight {
    height: 35px;
    vertical-align: top;
    line-height: 14px;
    padding-top: 10px;
    box-sizing: border-box;
  }

  .reli-tree {
    width: 100%;
    cursor: pointer;
  }

  .yijiSelect {
    border-left: 4px solid white;
  }

  .yijiSelect .hover-div span {
    color: #1d9ad4;
  }

  .erjiNormal .hover-div span {
    color: #000000;
  }

  .normalitem {
    border-left: 4px solid white;
  }

  .selectItem .hover-div span {
    color: white;
  }

  .nodeitem {
    background: linear-gradient(to bottom, #ffffff, #d7d7d7);
    border-bottom: 1px solid #cdcdcd;
    border-left: 4px solid white;
    border-left: 0;
  }

  .selectItem {
    color: white !important;
    background-color: #38a3d5;
    border-left: 4px solid #f46101;
  }

  .treeName {
    color: #4d4d4d;
    font-size: 14px !important;
  }

  .itemRow {
    text-align: left;
    /*padding-top: 2%;*/
    /*padding-bottom: 2%;*/
  }

  .itemRow span, .itemRow img {
    cursor: pointer;
  }

  .itemRow span {
    font-size: 1.1vw;
  }

  .hover-div {
    display: inline-block;
  }

  .modal-footer {
    padding: 15px;
    text-align: center;
    border-top: none;
  }

  .modal-title {
    text-align: center;
    color: #fff;
  }

  .modal-body {
    position: relative;
    padding: 40px;
  }

  .node-name-div {
    width: 100%;
    height: 40%;
    position: absolute;
    left: 15%;
    top: 20%;
  }

  .routers-name-div {
    width: 100%;
    height: 40%;
    position: absolute;
    left: 15%;
    top: 70%;
  }

  .modal-body input {
    width: 35%;
  }

  .routers-name-div select {
    margin-left: 15.5%;
    width: 35%;
    height: 70%;
  }

  .modal {
    position: fixed;
    top: 20%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }
</style>
