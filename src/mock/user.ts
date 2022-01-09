export default [
  {
    url: "/mock-server/auth/login",
    method: "post",
    timeout: 200,
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          accessToken: "adsadswee313sddq",
        },
      };
    },
  },
  {
    url: "/mock-server/auth/logout",
    method: "post",
    timeout: 200,
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          accessToken: "",
        },
      };
    },
  },
  {
    url: "/mock-server/users/info",
    method: "get",
    timeout: 200,
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          user: {
            id: 0,
            username: "admin",
            password: "any",
            name: "Admin",
            avatar:
              "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            introduction: "I am a super administrator",
            email: "admin@test.com",
            phone: "1234567890",
            roles: ["admin"],
          },
        },
      };
    },
  },
];
