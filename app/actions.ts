"use server";

import { cookies } from "next/headers";

console.log("cookies", Object.fromEntries(cookies()));

export async function runForm() {}
