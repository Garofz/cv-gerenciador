export function formatarData(date: Date | undefined): string {
    if (date) {
        const data = new Date(date);
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = String(data.getFullYear());

        const hora = String(data.getHours()).padStart(2, "0");
        const minuto = String(data.getMinutes()).padStart(2, "0");
        const segundo = String(data.getSeconds()).padStart(2, "0");

        return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    }

    return "N/I";
}
