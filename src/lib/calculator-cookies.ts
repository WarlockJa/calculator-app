"use server";
import { cookies } from "next/headers";
import { z } from "zod";

const cookieKey = "calculatorApp";
const themeSchema = z.enum(["theme1", "theme2", "theme3"]);

export async function readCookie(): Promise<CalculatorTheme> {
  const cookieStore = await cookies();
  const savedCookie = cookieStore.get(cookieKey);
  const parsedTheme = themeSchema.safeParse(savedCookie?.value);
  return parsedTheme.success ? parsedTheme.data : "theme1";
}

export async function writeCookie(theme: CalculatorTheme) {
  const cookieStore = await cookies();
  cookieStore.set(cookieKey, theme);
}
