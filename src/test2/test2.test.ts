import { foo2, fooProxy } from "./test2";
import { APIGatewayProxyResult } from "aws-lambda";
import { foo2String } from "../common/consts";

const fetchResult = {
  status: 200,
  statusText: "Success",
  text: "foo mock value"
};

jest.mock("node-fetch", () => {
  return jest.fn(
    async (): Promise<object> => {
      return {
        status: fetchResult.status,
        statusText: fetchResult.statusText,
        text: async (): Promise<string> => fetchResult.text
      };
    }
  );
});

it("should output the fooString2 constant", async () => {
  const result: APIGatewayProxyResult = (await foo2(
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any // eslint-disable-line @typescript-eslint/no-explicit-any
  )) as APIGatewayProxyResult;
  expect(result.body).toBe(foo2String);
});

it("should proxy foo from another service", async () => {
  const result: APIGatewayProxyResult = (await fooProxy(
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any // eslint-disable-line @typescript-eslint/no-explicit-any
  )) as APIGatewayProxyResult;

  const parsedBody = JSON.parse(result.body);
  expect(parsedBody).toBeDefined();
  expect(parsedBody.status).toBe(fetchResult.status);
  expect(parsedBody.statusText).toBe(fetchResult.statusText);
  expect(parsedBody.text).toBe(fetchResult.text);
});
