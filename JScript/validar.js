function validarRut(rut) {

    const verificador = rut.slice(-1).toUpperCase();
    const rutBase = rut.slice(0, -1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = rutBase.length - 1; i >= 0; i--) {
        suma += parseInt(rutBase[i]) * multiplicador;
        multiplicador = multiplicador == 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const verificadorReal = 11 - resto == 11 ? "0" : 11 - resto == 10 ? "K" : (11 - resto).toString();

    return verificadorReal == verificador;
}

const rut = prompt("Ingrese un Rut: ");

const rut2 = rut.replace(/\./g, "").replace(/-/g, "");

if (validarRut(rut2)) {
    alert("El RUT ingresado fue validado.")
    console.log("Bienvenido");
} else {
    alert("El RUT ingresado no es valido.")
    console.log("Acceso denegado");
}