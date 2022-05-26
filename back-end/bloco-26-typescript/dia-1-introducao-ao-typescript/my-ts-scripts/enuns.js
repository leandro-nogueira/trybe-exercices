"use strict";
var _a, _b;
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Meses;
(function (Meses) {
    Meses["janeiro"] = "jan";
    Meses["fevereiro"] = "fev";
    Meses["mar\u00E7o"] = "mar";
    Meses["abril"] = "abr";
    Meses["maio"] = "mai";
    Meses["junho"] = "jun";
    Meses["julho"] = "jul";
    Meses["agosto"] = "ago";
    Meses["setembro"] = "set";
    Meses["outubro"] = "out";
    Meses["novembro"] = "nov";
    Meses["dezembro"] = "dez";
})(Meses || (Meses = {}));
;
var Seasons;
(function (Seasons) {
    Seasons["primavera"] = "primavera";
    Seasons["ver\u00E3o"] = "ver\u00E3o";
    Seasons["outono"] = "outono";
    Seasons["inverno"] = "inverno";
})(Seasons || (Seasons = {}));
var meses = Object.values(Meses);
var escolhaMes = readlineSync.keyInSelect(meses, 'Qual mes vc quer saber?');
var seasonsSouth = (_a = {},
    _a[Seasons.outono] = [Meses.março, Meses.abril, Meses.junho],
    _a[Seasons.inverno] = [Meses.junho, Meses.agosto, Meses.setembro],
    _a[Seasons.primavera] = [Meses.setembro, Meses.outubro, Meses.novembro, Meses.dezembro],
    _a[Seasons.verão] = [Meses.dezembro, Meses.janeiro, Meses.fevereiro, Meses.março],
    _a);
var seasonsNorth = (_b = {},
    _b[Seasons.primavera] = [Meses.março, Meses.abril, Meses.junho],
    _b[Seasons.verão] = [Meses.junho, Meses.agosto, Meses.setembro],
    _b[Seasons.outono] = [Meses.setembro, Meses.outubro, Meses.novembro, Meses.dezembro],
    _b[Seasons.inverno] = [Meses.dezembro, Meses.janeiro, Meses.fevereiro, Meses.março],
    _b);
var hemispheres = {
    Norte: seasonsNorth,
    Sul: seasonsSouth
};
var escolhaHemisferio = readlineSync.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério!');
var month = Object.values(Meses)[escolhaMes];
var hemisphere = Object.keys(hemispheres)[escolhaHemisferio];
console.log("M\u00EAs: \n".concat(month));
console.log("Hemisf\u00E9rio: \n".concat(hemisphere));
console.log("Esta\u00E7\u00F5es:");
var choseHemisfereSeasons = Object.values(hemispheres)[escolhaHemisferio];
Object.entries(choseHemisfereSeasons).map(function (entry) {
    var seasons = entry[0];
    var months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
