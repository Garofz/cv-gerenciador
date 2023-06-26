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
