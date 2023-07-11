export function formatarData(
    date: Date | null | undefined,
    short: boolean = false,
    mask: "normal" | "input" = "normal",
    exibeNI: boolean = false
): string | null {
    if (date) {
        const data = new Date(date);
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = String(data.getFullYear());

        const hora = String(data.getHours()).padStart(2, "0");
        const minuto = String(data.getMinutes()).padStart(2, "0");
        const segundo = String(data.getSeconds()).padStart(2, "0");

        if (short) {
            if (mask === "input") return `${ano}-${mes}-${dia}`;

            return `${dia}/${mes}/${ano}`;
        }

        return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    }

    if (exibeNI) return "N/I";
    if (date === null) return date;

    return "N/I";
}

export function convertStringToDate(
    dateString: string | null
): Date | undefined {
    if (dateString === null || dateString === "") {
        return undefined; // Retorna null para data nula
    }

    const parts = dateString.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Os meses em JavaScript são baseados em zero (0 - 11)
    const day = parseInt(parts[2]);

    const date = new Date(year, month, day);

    return date;
}
