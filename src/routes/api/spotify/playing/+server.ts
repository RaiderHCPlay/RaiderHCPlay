import { getCache } from '$lib/server/spotifyCache';

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const send = () => {
        const cache = getCache();
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(cache)}\n\n`));
      };

      send();

      const interval = setInterval(send, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'X-Accel-Buffering': 'no',
      Connection: 'keep-alive'
    }
  });
}
