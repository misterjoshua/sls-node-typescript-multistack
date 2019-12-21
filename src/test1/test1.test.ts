import { foo } from "./test1";
import { APIGatewayProxyResult } from "aws-lambda";
import { fooString } from "../common/consts";

it("should output the fooString constant", async () => {
  const result: APIGatewayProxyResult = (await foo(
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    undefined as any // eslint-disable-line @typescript-eslint/no-explicit-any
  )) as APIGatewayProxyResult;
  expect(result.body).toBe(fooString);
});
