import cookie from "cookie";

const cookieParserMiddleware = () => {
  const cookieParserMiddlewareBefore = async (request) => {
    const { event } = request;

    let cookieObject = {};

    if (event.headers?.cookie) {
      cookieObject = cookie.parse(event.headers.cookie);
    }

    event.cookies = cookieObject;
  };

  return {
    before: cookieParserMiddlewareBefore,
  };
};

export default cookieParserMiddleware;
