import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { foo2String } from "../common/consts";
import fetch from "node-fetch";
import { test1Api } from "./config";

export const foo2: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: foo2String
  };
};

export const fooProxy: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  const endpoint = `${test1Api}/foo`;
  const res = await fetch(endpoint);
  return {
    statusCode: 200,
    body: JSON.stringify({
      endpoint: endpoint,
      status: res.status,
      statusText: res.statusText,
      text: await res.text()
    })
  };
};
