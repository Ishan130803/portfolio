"use server";

import { error } from "console";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL! as string;

type Isend_email = {
  client_email: string;
  subject: string;
  message: string;
};
export async function send_email({
  client_email,
  subject,
  message,
}: Isend_email) {
  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/ishan130803@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: "FormSubmit",
          message: "I'm from Devro LABS",
        }),
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.success === 'false') {
      throw data
    }
    return { error: undefined };
  } catch (error) {
    console.log("Error happened")
    console.log(error);
    return { error: error };
  }
}
// export async function send_email({
//   client_email,
//   subject,
//   message,
// }: Isend_email) {
//   try {
//     const data = await resend.emails.send({
//       from: myEmail,
//       to: client_email,
//       subject: "Hello",
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank You for contacting us!</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return data;
//   } catch (error) {
//     return { error, status: 500 };
//   }
// }
