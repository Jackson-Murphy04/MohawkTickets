import executeQuery from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request to fetch tickets
        try {
            // Fetch tickets from the database (replace with actual DB call)
            const tickets = await executeQuery({ query: 'SELECT * FROM tickets' });
            return res.status(200).json(tickets);
        } catch (error) {
            console.error('Error fetching tickets:', error);
            return res.status(500).json({ error: 'Failed to fetch tickets' });
        }
    }
}

export async function GET(req) {
    console.log('Received GET request for tickets');
    try {
        // Fetch tickets from the database (replace with actual DB call)
        const tickets = await executeQuery({ query: 'SELECT * FROM tickets' });
        return res.status(200).json(tickets);
    } catch (error) {
        console.error('Error fetching tickets:', error);
        return res.status(500).json({ error: 'Failed to fetch tickets' });
    }
}
