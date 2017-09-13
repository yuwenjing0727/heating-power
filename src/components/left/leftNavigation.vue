<template>
    <div id="all">
      <reli-tree :model = "model"></reli-tree>
    </div>
</template>
<style scoped>
  #all{
    width:100%;
    height:100%
  }
</style>
<script>
  import ReliTree from '../reli/reli-tree.vue'
  import {SWAGGER_CONFIG} from '../../config/config'
  import * as types from '../../store/types'
  import {mapState} from 'vuex'
    export default{
        mounted(){
          //请求左部导航数据
          var self = this;
          self.$http.post(SWAGGER_CONFIG+'/Ddaas/acl/getAuthorObjTree?userName='+self.userName,{}
          ).then(function (response) {
            self.model.children = response.data.data;
            console.log(self.model);
          })
            .catch(function (error) {
              console.log(error);
            });

        },
        data(){
            return{
              model:{
                authObjectId:"",
                authObjectDesc: 'root',
                authObjectType:0,
                authObjectURL:null,
                mark:null,
                parentId:null,
                parentSelected:false,
                selected:false,
                propergated:false,
                open: true,
                leve: 0,
                children:[]
              }

            }
        },
        components: {
          ReliTree
        },
        computed: mapState({
            userName: state => state.userName
        })
    }
</script>
