<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class="message_top">
      <h3>您的配镜信息如下: </h3>
      <ul>
        <li>
          <label>眼镜类型:</label>
          <span>{{type}}</span>
        </li>
        <li>
          <label>镜片信息:</label>
          <span>{{msg}}</span>
        </li>
        <li>
          <label>配镜时间:</label>
          <span>{{times}}</span>
        </li>
      </ul>
    </div>
    <div class="message_content">
      <table border="1" cellspacing="0">
        <tr>
          <th colspan="100%">配镜信息</th>
        </tr>
        <tr>
          <th class="table_name"></th>
          <th>球镜(度数)</th>
          <th>柱镜(散光)</th>
          <th>轴度</th>
          <th>镜片</th>
        </tr>
        <tr v-for="item in tableMsg" :key="item.type">
          <td class="table_name">{{item.name}}</td>
          <td v-if="item.type === 'left' || item.type === 'right'">{{item.ball}}</td>
          <td v-if="item.type === 'left' || item.type === 'right'">{{item.mirror}}</td>
          <td v-if="item.type === 'left' || item.type === 'right'">{{item.axis}}</td>
          <td colspan="3" v-if="item.type === 'distance' || item.type === 'other' || item.type === 'remark'">
            <span v-if="item.type === 'distance'">{{item.distance}}</span>
            <span v-if="item.type === 'other'">{{item.otherMsg}}</span>
            <span v-if="item.type === 'remark' && !isEditRemark">{{item.remarks}}</span>
            <input type="text" class="add_remarks" v-if="item.type === 'remark' && isEditRemark" autofocus placeholder="添加备注可以方便后续查询" v-model="item.remarks">
          </td>
          <td>{{item.lensType || '-'}}</td>
        </tr>
      </table>
    </div>
    <div class="message_bottom">
      <h3>加工信息: </h3>
      <ul>
        <li v-for="msg in processingMsgs" :key="msg.message">
          {{ msg.message }}
        </li>
      </ul>
      <div class="message_btn" v-if="!isEditRemark">
        <button @click="addRemark">添加备注</button>
        <button @click="back">返回</button>
      </div>
      <div class="message_btn" v-if="isEditRemark">
        <button @click="confirmAddRemark">确认修改</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      title: '信息页面',
      type: '太阳镜',
      msg: '蔡司镜片',
      times: '2018年10月28日',
      tableMsg: [
        { name: '左眼', ball: '-5.25', mirror: '-0.50', axis: '175', lensType: '1.67球面镜', distance: '', otherMsg: '', remarks: '', type: 'left' },
        { name: '右眼', ball: '-6.00', mirror: '-0.75', axis: '1.63', lensType: '渐进片', distance: '', otherMsg: '', remarks: '', type: 'right' },
        { name: '瞳距', ball: '', mirror: '', axis: '', lensType: '', distance: '60', otherMsg: '', remarks: '', type: 'distance' },
        { name: '其他信息', ball: '', mirror: '', axis: '', lensType: '', distance: '', otherMsg: '近视眼镜', remarks: '', type: 'other' },
        { name: '个人备注', ball: '', mirror: '', axis: '', lensType: '', distance: '', otherMsg: '', remarks: '', type: 'remark' }
      ],
      processingMsgs: [
        { message: '2018/20/14 14:00 镜片出库;' },
        { message: '2018/20/14 14:00 望京1号机参数录入完毕, 录入人员026;' },
        { message: '2018/20/14 14:00 望京1号机完成加工;' },
        { message: '2018/20/14 14:00 加工师傅李师傅, 工号026完成参数校对, 参数合格;' },
        { message: '2018/20/14 14:00 打包完成, 已发往客户, 顺丰单号600909009' }
      ],
      isEditRemark: false
    }
  },
  methods: {
    addRemark () {
      this.isEditRemark = true
    },
    back () {
      this.$router.go(-1)
    },
    confirmAddRemark () {
      this.isEditRemark = false
    },
    cancel () {
      this.isEditRemark = false
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
.message_top {
  margin: 0 5px;
}
h3 {
  margin-bottom: 0;
}
ul, ul li {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 14px;
}
.message_content {
  width: 100%;
  margin: 10px 0;
}
.message_content table {
  width: 100%;
}
tr:nth-child(odd){
  background: #F4F4F4;
}
tr {
  height: 50px;
}
tr th, tr td {
  text-align: center;
  vertical-align: middle;
}
.table_name {
  background-color: #F2F2F2;
}
.message_btn {
  text-align: center;
  margin: 10px 0;
}
.message_btn button {
  background-color: #6FB7B7;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: none;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  outline:none;
}
.add_remarks {
  border: none;
  font-size: 14px;
  width: 100%;
  height: 50px;
  outline:none;
}
</style>
