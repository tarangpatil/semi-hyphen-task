"use server";
export async function handleNewsletter(formData: FormData) {
  const email = formData.get("email") as string;
  // store the email in newsletter table in DB
  console.log(`${email} subscribed to the newsletter`);
}
