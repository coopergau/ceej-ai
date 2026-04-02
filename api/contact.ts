export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  console.log('Webhook URL:', process.env.N8N_WEBHOOK_URL);
  
  try {
    const body = await req.json();
    console.log('Body parsed:', body);

    const makeResponse = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    console.log('n8n status:', makeResponse.status);
    const responseText = await makeResponse.text();
    console.log('n8n response:', responseText);

    if (!makeResponse.ok) {
      return new Response(`Webhook failed: ${responseText}`, { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Caught error:', err);
    return new Response(`Error: ${err}`, { status: 500 });
  }
}