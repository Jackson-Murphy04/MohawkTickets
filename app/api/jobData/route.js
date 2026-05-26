export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const jobNumber = searchParams.get("jobNumber");

    if (!jobNumber) {
      return new Response(JSON.stringify({ error: "Missing jobNumber" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const response = await fetch(
      `http://10.18.4.83:8080/api/products/job_number/${encodeURIComponent(jobNumber)}`
    );
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}