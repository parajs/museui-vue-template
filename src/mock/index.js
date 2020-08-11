// 引入mockjs
import Mock from "mockjs";
import user from "./modules/user";
// Mock函数
const { mock } = Mock;

// 设置延时
Mock.setup({
  timeout: 400
});

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
export default function() {
  mock(/\/api\/user\/findUserList/, "get", user.list);
}
