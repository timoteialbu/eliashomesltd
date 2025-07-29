import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request, env) {
  try {
    const { searchParams } = new URL(request.url);
    const recipient = searchParams.get("recipient") || "contact@timotei.dev";
    const subject = searchParams.get("subject") || "No subject provided";
    const body = searchParams.get("body") || "No body provided.";

    const msg = createMimeMessage();
    msg.setSender({ name: "Cloudflare Worker", addr: "noreply@timotei.dev" }); // Sender must be from your domain
    msg.setRecipient(recipient);
    msg.setSubject(subject);
    msg.addMessage({
      contentType: "text/plain",
      data: body,
    });

    const message = new EmailMessage(
      "noreply@eliashomesltd.com", // From address
      recipient, // To address
      msg.asRaw(),
    );

    // @ts-expect-error Cloudflare Worker bindings are not directly typed
    await env.contact_email_sender.send(message);

    return new Response("Email sent successfully!", {
      headers: { "content-type": "text/plain" },
    });
  } catch (e) {
    return new Response(`Error sending email: ${e.message}`, {
      headers: { "content-type": "text/plain" },
      status: 500,
    });
  }
}
