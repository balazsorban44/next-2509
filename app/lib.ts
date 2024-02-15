import { cookies } from "next/headers";

export function foo() {
  console.log(Object.fromEntries(cookies()));
}
