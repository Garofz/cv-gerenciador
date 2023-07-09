export function mascararEmail(email: string): string {
    const partesEmail = email.split("@");
    const nomeUsuario = partesEmail[0];
    const dominio = partesEmail[1];

    const letrasIniciais = nomeUsuario.substr(0, 3);
    const letrasRestantes = nomeUsuario.substr(3);

    const emailMascarado =
        letrasIniciais +
        letrasRestantes.replace(/[a-zA-Z@#$%!-.]/g, "*") +
        "@" +
        dominio;

    return emailMascarado;
}

export function mascararCelular(celular: string): string {
    const digitosIniciais = celular.substr(0, 3);
    const digitosRestantes = celular.substr(3);

    const celularMascarado =
        digitosIniciais + digitosRestantes.replace(/\d/g, "*");

    return celularMascarado;
}

export function mascararDocumento(
    tipoPessoa: number,
    documento: string
): string {
    let mascara: string = "";

    if (tipoPessoa === 1) {
        // Máscara para pessoa física (CPF)
        mascara = documento.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        );
    } else if (tipoPessoa === 2) {
        // Máscara para pessoa jurídica (CNPJ)
        mascara = documento.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
            "$1.$2.$3/$4-$5"
        );
    } else {
        throw new Error(
            "Tipo de pessoa inválido. Use 1 para pessoa física ou 2 para pessoa jurídica."
        );
    }

    return mascara;
}
