"use server";

import { redirect } from "next/navigation";
import { foo } from "./lib";

const bar = foo();

export async function runForm() {
  console.log(bar);

  redirect("/");
}
