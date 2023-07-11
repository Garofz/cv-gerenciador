export function generateGuid(): string {
    return Math.random().toString(36).substr(2, 12);
}
