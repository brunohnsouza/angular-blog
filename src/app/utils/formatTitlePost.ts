export function formatTitlePost(title: string): string {
    return title.replace(/[^a-zA-Z0-9\s-]/g, '')
        .replace(/\s+/g, '-').toLowerCase();
}