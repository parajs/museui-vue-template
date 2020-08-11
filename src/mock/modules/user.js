import Mock, { Random } from "mockjs";

// 定义数据
const listData = Mock.mock({
  "data|20": [
    {
      username: () => Random.cname(),
      time: () => Random.date("yyyy.M.d"),
      content: () => Random.csentence(5, 10)
    }
  ]
});

function list() {
  // res是一个请求对象，包含: url, type, body
  return {
    code: 200,
    data: listData.data,
    message: "请求成功"
  };
}

export default { list };
