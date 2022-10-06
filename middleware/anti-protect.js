export default function (context) {
  // context.userAgent = process.server
  //   ? context.req.headers["user-agent"]
  //   : navigator.userAgent;

  const { redirect } = context;
  if (process.client) {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");
    if (login === false || login == null || token == null) {
      console.log("hi");
      return redirect("/auth/login");
    }
  }
}
