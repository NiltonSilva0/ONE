let dia = prompt("Que dia da semana é hoje: ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

switch(dia)
{
    case "sabado":
    case "domingo":
        alert("Bom fim de semana!");
        break;
    default:
        alert("Boa semana!");
}