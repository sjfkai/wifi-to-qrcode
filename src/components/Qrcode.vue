<template>
  <div class="qrcode">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import * as QRCode from 'qrcode';
import { MessageBox } from 'element-ui';

function drawQrcode(url) {
  const canvas = document.getElementById('canvas');
  QRCode.toCanvas(canvas, url, (error) => {
    if (error) {
      MessageBox.alert(error.message, '生成失败!');
    }
  });
}
export default {
  name: 'Qrcode',
  props: ['pageUrl'],
  data() {
    return {};
  },
  watch: {
    pageUrl(val) {
      drawQrcode(val);
    },
  },
  mounted() {
    drawQrcode(this.pageUrl);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
