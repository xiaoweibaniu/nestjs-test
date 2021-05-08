// config/db.ts
const productConfig = {
  postgresql: {
    port: '数据库端口',
    host: '数据库地址',
    user: '用户名',
    password: '',
    database: 'nest_test',
    connectionLimit: 10, // 连接限制
  },
};

const devConfig = {
  postgresql: {
    port: '数据库端口',
    host: '数据库地址',
    user: '用户名',
    password: '',
    database: 'nest_test',
    connectionLimit: 10, // 连接限制
  },
};

const config = process.env.NODE_ENV ? productConfig : devConfig;

export default config;
