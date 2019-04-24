const NODE_ENV = process.env.NODE_ENV || 'development';

// 按需使用
export const ENV = NODE_ENV;
// export const DEBUG = NODE_ENV === 'development';
// export const PRO = NODE_ENV === 'production';

// 后台接口地址
// TODO: 根据清空自己删减
const END_POINTS = {
  development: 'https://xxx', // 开发环境
  test: 'https://xxx', // 测试环境
  qa: 'https://xxx', // qa 环境
  production: 'https://xxx', // 正式环境
};

export const END_POINT = END_POINTS[NODE_ENV];
