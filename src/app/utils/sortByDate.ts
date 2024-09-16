import { parse } from "date-fns";
import { ptBR } from "date-fns/locale";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function sortByDate(data: any[]): any[] {
    return data.sort((a, b) => {
        const dateA = parse(a.datePost, 'dd MMMM, yyyy', new Date(), { locale: ptBR });
        const dateB = parse(b.datePost, 'dd MMMM, yyyy', new Date(), { locale: ptBR });

        return dateB.getTime() - dateA.getTime();
    });
}