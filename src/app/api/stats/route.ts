interface stats {
    members: number;
    servers: number;
}

const Stats: stats = {
    members: 442069,
    servers: 423
}

export async function GET(request: Request) {
    return new Response(
        JSON.stringify(Stats),
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}