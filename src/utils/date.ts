export function convertDateToFormat(date: Date | undefined): string {
    // return date? `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` : '';
    return new Intl.DateTimeFormat('fr-CA').format(date); // -> (opção dos malucos)
    // return date.toISOString().substring(0, 10); -> (opção do João, menos maluco)
}