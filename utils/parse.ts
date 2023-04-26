export function parseDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString()
}
