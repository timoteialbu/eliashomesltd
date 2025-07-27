addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handleRequest(_request) {
  return new Response("Hello from Cloudflare Worker eliashomesltd!", {
    headers: { "content-type": "text/plain" },
  });
}
