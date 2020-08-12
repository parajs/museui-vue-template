import Mock, { Random } from "mockjs";

function list() {
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

  // res是一个请求对象，包含: url, type, body
  return {
    code: 200,
    data: listData.data,
    message: "请求成功"
  };
}

/**
 * @description 模拟登录数据
 * @param { Object } res
 * @param { * } res.body - 请求数据
 * @param { string } res.url - 请求地址
 * @param { string } res.type - 请求方法类型
 */
function login(res) {
  const { body } = res;
  const userInfo = Mock.mock({
    email: "546369005@qq.com",
    sex: 1
  });
  return {
    code: 200,
    data: {
      user: { ...userInfo, username: body.username },
      token: "dfdi30993llldfd988444"
    },
    message: "登录成功"
  };
}

export default { list, login };
