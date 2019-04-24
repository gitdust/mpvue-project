<template>
  <div>test</div>
</template>

<script>

import mixin from './mixin.js';

export default {
  name: 'Purchase',
  components: {
  },
  mixins: [mixin],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
  onPullDownRefresh() {
    this.refresh();
  },
  onReachBottom() {
    this.loadMore();
  },
  onPageScroll() {
    // const query = wx.createSelectorQuery();
    // query.select('.spu--list').boundingClientRect();
    // query.exec((rect) => { this.isNavFixed = (rect[0].top <= 85); });
  },
  onShow() {
  },
};
</script>


<style lang="less" scoped>
@import '~styles/vars.less';

</style>
