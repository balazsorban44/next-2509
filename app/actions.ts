"use server";

import { foo } from "./lib";

const bar = foo();

export async function runForm() {
  console.log(bar);
}
