import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { fooString } from "../common/consts";

export const foo: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: fooString
  };
};
