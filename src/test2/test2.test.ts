import { foo2 } from "./test2";
import { APIGatewayProxyResult } from "aws-lambda";
import { foo2String } from "../common/consts";

it("should output the fooString2 constant", async () => {
  const result: APIGatewayProxyResult = (await foo2(
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any // eslint-disable-line @typescript-eslint/no-explicit-any
  )) as APIGatewayProxyResult;
  expect(result.body).toBe(foo2String);
});
