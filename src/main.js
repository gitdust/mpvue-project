import Vue from 'vue';

import { DEBUG } from '@/config';
import App from '@/App';
import mixin from '@/mixin';
import store from '@/store';
import promisify from '@/utils/promisify';
import wx from '@/modules/wx';
import storage from '@/modules/storage';
import router from '@/modules/router';

// 运行时错误和 promise 错误提示
require('core-js/library/modules/_global.js').console = console;
require('core-js/library/modules/_global.js').onunhandledrejection = console.errror

// TODO: 按需使用
Vue.prototype.$promisify = promisify;
Vue.prototype.$storage = storage;
Vue.prototype.$wx = wx;
Vue.prototype.$store = store;
Vue.prototype.$router = router;

Vue.mixin(mixin);

Vue.config.productionTip = DEBUG;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

