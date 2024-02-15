import { cookies } from "next/headers";

export function foo() {
  const c = cookies();
  console.log(Object.fromEntries(c));
}
