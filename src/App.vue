<script>
export default {
  onError(err) {
    console.log('App error:', err);
  },
  onShow() {
    const updateManager = wx.getUpdateManager();

    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        },
      });
    });

    updateManager.onUpdateFailed(() => {
      // 新版本下载失败
      wx.showToast({ title: '更新失败,请重试!', icon: 'none' });
    });
  },
};
</script>

<style lang="less">
@import '~styles/app.less';
</style>

