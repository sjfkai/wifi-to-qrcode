<template>
  <div class="wifi">
    <el-row type="flex" class="bg-purple" justify="center">
      <el-col :xs="20" :sm="18" :md="16" :lg="14">
        <div class="ssid-label bg-purple-dark">
          <span>WI-FI名称:</span>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" class="bg-purple" justify="center">
      <el-col :xs="20" :sm="18" :md="16" :lg="14">
        <div class="ssid bg-purple">
          <span>{{$route.params.ssid}}</span>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" class="bg-purple" justify="center">
      <el-col :xs="20" :sm="18" :md="16" :lg="14">
        <div class="info bg-purple-light">
          <el-button id="copy-btn" :type="buttonType" :data-clipboard-text="password">{{buttonText}}</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" class="bg-purple" justify="center">
      <el-col :xs="20" :sm="18" :md="16" :lg="14">
        <div v-if="isSucceed" class="info bg-purple-light">
          <span>密码已复制，请到设置页面选择此WI-FI并粘贴</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as Clipboard from 'clipboard';

export default {
  name: 'wifi',
  data() {
    return {
      buttonText: '复制密码',
      buttonType: 'primary',
      isSucceed: false,
      password: this.$route.params.password,
    };
  },
  methods: {
    // copyPassword() {

    // },
  },
  created() {
    const clipboard = new Clipboard('#copy-btn');
    clipboard.on('success', () => {
      this.buttonText = '复制成功';
      this.buttonType = 'success';
      this.isSucceed = true;
    });
    clipboard.on('error', () => {
      this.buttonText = '复制失败';
      this.buttonType = 'danger';
      this.isSucceed = false;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wifi {
    padding: 100px 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .ssid-label {
    color: #475669;
    margin-top: 20px;
    text-align: center;
  }
  .ssid {
    margin-top: 20px;
    text-align: center;
    font-size: 30px;
  }
  .info {
    color: #475669;
    margin-top: 20px;
    text-align: center;
  }
  /*.bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }*/
</style>
