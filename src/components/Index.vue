<template>
  <div>
    <el-row type="flex" class="bg-purple" justify="center">
      <el-col :span="24">
        <div class="top bg-purple-dark">
          <span>WIFI TO QR-CODE</span>
        </div>
      </el-col>
    </el-row>
    <el-row  type="flex" class="bg-purple" justify="center">
      <el-col :xs="20" :sm="18" :md="16" :lg="14">
        <div class="bg-purple-light">
          <el-input class="input" v-model="wifiSsid" placeholder="请输入wifi名称"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row  type="flex" class="bg-purple" justify="center">
      <el-col :xs="20" :sm="18" :md="16" :lg="14">
        <div class="bg-purple-light">
          <el-input class="input" v-model="wifiPassword" placeholder="请输入连接密码"></el-input>
        </div>
      </el-col>
    </el-row>

    <el-row  type="flex" class="bg-purple" justify="center">
      <el-col :xs="10" :sm="8" :md="6" :lg="4">
        <div class="bg-purple-light">
          <el-button v-on:click="genQrcode" class="generate-btn" type="primary">生成二维码</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row  type="flex" class="bg-purple" justify="center">
      <el-col :xs="10" :sm="8" :md="6" :lg="4">
        <div class="bg-purple-light qrcode">
          <Qrcode v-if="!!url" :page-url="url"></Qrcode>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Qrcode from '@/components/Qrcode';

export default {
  name: 'index',
  data() {
    return {
      wifiSsid: '',
      wifiPassword: '',
      url: '',
    };
  },
  methods: {
    genQrcode: function genQrcode() {
      if (this.wifiSsid && this.wifiPassword) {
        this.url = `http://wifi.sjfkai.com/#/${this.wifiSsid}/${this.wifiPassword}`;
      }
    },
  },
  components: {
    Qrcode,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
    color: #2c3e50;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .input {
    margin-top: 50px;
  }
  .generate-btn {
    width: 100%;
    margin-top: 70px;
  }

  .qrcode {
    margin-top: 70px;
    
    text-align:center;
  }

</style>
