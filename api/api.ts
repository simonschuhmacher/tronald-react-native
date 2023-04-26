import { Quote, QuoteResponse } from '../model/quote'

const baseUrl = 'https://api.tronalddump.io'

export async function searchQuote(query: string): Promise<QuoteResponse> {
    const url = `${baseUrl}/search/quote?query=${encodeURIComponent(query)}`
    return await fetch(url).then(response => response.json())
}
