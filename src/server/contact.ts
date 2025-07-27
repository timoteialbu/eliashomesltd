import { createServerFn } from "@tanstack/react-start";

export const contactFormAction = createServerFn({
  method: "POST",
})
  .validator((data: unknown) => {
    // Basic validation for the incoming data
    if (
      typeof data !== "object" ||
      data === null ||
      !("name" in data) ||
      typeof data.name !== "string" ||
      !("email" in data) ||
      typeof data.email !== "string" ||
      !("message" in data) ||
      typeof data.message !== "string"
    ) {
      throw new Error("Invalid form data provided.");
    }
    return data as { name: string; email: string; message: string };
  })
  .handler(async ({ data: formData }) => {
    // In a real application, you would add more robust validation here
    // For example, email format validation

    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "All fields are required." };
    }

    // This is where you would integrate with an email sending service
    // For Cloudflare Workers, you might use a service like SendGrid, Mailgun, or a custom email API.
    // Since the user mentioned Cloudflare MCP tool, I'll assume there's a way to send email via Cloudflare.
    // However, the provided Cloudflare MCP tools do not directly support sending emails.
    // I will simulate an email sending action and provide instructions for a real implementation.

    console.log(
      "Attempting to send email via Cloudflare Worker (simulated):",
      formData,
    );

    try {
      // This is a placeholder for an actual email sending mechanism.
      // In a real Cloudflare Worker, you would use a service like Mailchannels, SendGrid, etc.
      // For example, using Mailchannels:
      // const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     personalizations: [{ to: [{ email: "your-email@example.com", name: "Recipient Name" }] }],
      //     from: { email: "noreply@yourdomain.com", name: "Elias Homes Ltd Contact" },
      //     subject: `New Contact Form Submission from ${formData.name}`,
      //     content: [{ type: "text/plain", value: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}` }],
      //   }),
      // });

      // if (!response.ok) {
      //   const errorText = await response.text();
      //   console.error("Failed to send email via Mailchannels:", errorText);
      //   return { success: false, error: `Failed to send email: ${errorText}` };
      // }

      // Simulate success for now
      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error: "An unexpected error occurred while sending the message.",
      };
    }
  });
