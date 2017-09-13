<template>
  <iframe style="width: 100%; height: 100%;" :src="currentIframeSrc" frameborder="0"></iframe>
</template>

<script type="text/ecmascript-6">
  import Bus from '../../util/eventBus.js';
  export default {
    data(){

      return {
        // 面包屑
        currentBreadcrumb: '',

        // iframe 的src
        currentIframeSrc: 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B4f9b%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B5e74%5D%5B4f9b%5D%5B70ed%5D%5B8ba1%5D%5B5212%5D%5B586b%5D%5B62a5%5D.cpt&op=view',

        // 面包屑和iframe对应关系的map
        map: [
          {'供热生产管理-年供热计划填报': 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B4f9b%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B5e74%5D%5B4f9b%5D%5B70ed%5D%5B8ba1%5D%5B5212%5D%5B586b%5D%5B62a5%5D.cpt&op=view'},
          {'供热生产管理-年供热计划查询': 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B4f9b%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B5e74%5D%5B4f9b%5D%5B70ed%5D%5B8ba1%5D%5B5212%5D%5B67e5%5D%5B8be2%5DA.cpt&op=view'},
          {'供热生产管理-日实际供热查询': 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B4f9b%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B65e5%5D%5B5b9e%5D%5B9645%5D%5B4f9b%5D%5B70ed%5D%5B67e5%5D%5B8be2%5D%5B9996%5D%5B9875%5D.cpt&op=view'},
          {'停热生产管理-年停热计划填报': 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B505c%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B5e74%5D%5B505c%5D%5B70ed%5D%5B8ba1%5D%5B5212%5D%5B586b%5D%5B62a5%5D.cpt&op=view'},
          {'停热生产管理-年停热计划查询': 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B505c%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B5e74%5D%5B505c%5D%5B70ed%5D%5B8ba1%5D%5B5212%5D%5B67e5%5D%5B8be2%5DA.cpt&op=view'},
          {'停热生产管理-日实际停热填报': 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B505c%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B65e5%5D%5B5b9e%5D%5B9645%5D%5B505c%5D%5B70ed%5D%5B586b%5D%5B62a5%5D%5B9996%5D%5B9875%5D.cpt&op=view'},
          {'停热生产管理-日实际停热查询': 'http://192.168.0.233:8080/WebReport/ReportServer?reportlet=%5B5317%5D%5B4eac%5D%5B70ed%5D%5B529b%5D%2F%5B505c%5D%5B70ed%5D%5B751f%5D%5B4ea7%5D%5B7ba1%5D%5B7406%5D%2F%5B65e5%5D%5B5b9e%5D%5B9645%5D%5B505c%5D%5B70ed%5D%5B67e5%5D%5B8be2%5D%5B9996%5D%5B9875%5D.cpt&op=view'}
        ]
      }
    },
    mounted () {
      let self = this;
      Bus.$on('breadcrumbNavChange', (path) => {
        self.currentBreadcrumb = path.join('-');
      })
    },
    watch: {
      currentBreadcrumb (newVal) {
        let self = this;
        // 根据newVal, 遍历map, 查找到对应的src
        // 使用es6的新方法进行数组的遍历
        for (let value of this.map) {
          for (let key in value) {
            if (key === newVal) {
              self.currentIframeSrc = value[key];
            }
          }
        }
      }
    }
  }

</script>

<style>

</style>
