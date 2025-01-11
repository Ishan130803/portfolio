"use server";

export async function getFile(href: string) {
  let text = "";
  const res = await fetch(href);
  if (!res.ok) {
    return null;
  }
  text = await res.text();
  return text;
}
