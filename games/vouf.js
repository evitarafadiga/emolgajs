const Discord = require ("discord.js")

function createfact(phrase, result) {
    return {phrase, result}
}

const TABLE = [
    createfact("O anime de Pokémon possui mais de 1131 episódios, 52 temporadas e 10 sagas.", "Falso"),
    createfact("De todos os episódios do anime, Ash e Pikachu só não aparecem em UM deles.","Verdadeiro"),
    createfact("A franquia possui mais de 120 jogos.","Verdadeiro"),
    createfact("Bulbasaur foi o primeiro Pokémon a ter dois tipos.", "Verdadeiro"),
    createfact("Já existem mais de 891 espécies de Pokémon.", "Verdadeiro"),
    createfact("Ash já perdeu 9 ligas e ganhou a de Alola, sendo sua única.","Falso"),
    createfact("Ash já teve 3 dubladores no Brasil.","Verdadeiro"),
    createfact("Mr. Mime é o verdadeiro pai de Ash.", "Falso"),
    createfact("Misty trabalhava como revendedora AVON antes de seguir jornada com Ash.", "Falso"),
    createfact("Em 2020 a Pokémon Company se uniu ao Google para eleger o Pokémon favorito dos fãs.","Verdadeiro"),
    createfact("Ficando em terceiro lugar nesse ranking dos favoritos; Mimikyu, em segundo; Lucario e em primeiro; Greninja.","Verdadeiro"),
    createfact("Pokémon não come outros Pokémon na natureza.", "Falso"),
    createfact("São necessários 2 Mew para breedar um Mewtwo.", "Falso"),
    createfact("Gold e Silver eram para ser os últimos jogos da franquia.", "Verdadeiro"),
    createfact("Stantler evolui para Slaydeer em Hisui.", "Falso"),
    createfact("Pokémon é o único videogame a aparecer na capa da revista TIME.", "Verdadeiro"),
    createfact("Na categoria Best Selling de todos os tempos (mais vendido), Pokémon só perde para Mario.","Verdadeiro"),
    createfact("Pikachu pode voar e surfar.","Verdadeiro"),
    createfact("May foi a primeira poké-girl a usar shorts.", "Falso"),
    createfact("Pokémon já se ambientou em Acapulco.", "Verdadeiro"),
    createfact("A carta mais cara já vendida não é o Charizard.", "Verdadeiro"),
    createfact("Lugia foi criado pelo autor do anime de Pokémon.","Verdadeiro"),
    createfact("Pokémon ganhará um parque temático em 2023 localizado em Orlando.", "Verdadeiro"),
    createfact("Weavile é o único Pokémon de Hoenn que recebeu uma Hisuian-Form", "Falso"),
    createfact("Weavile é o único Pokémon de Sinnoh que recebeu uma Hisuian-Form", "Falso"),
    createfact("O Cry do Regigigas é baseado na música Robot Rock da ex-dupla Daft Punk.", "Falso"),
    createfact("Uma Blitzle shiny é da cor azul-escuro ou naval.", "Verdadeiro")
];

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function init(client, message, question) {

    let i = question;

    const attachment = new Discord.MessageEmbed();

    attachment.setTitle(`Verdadeiro ou Falso? Questão "${question}"`);
    attachment.setDescription(`${TABLE[i].phrase}`);
    attachment.setFooter(`Responda com V ou F dentro de 10 segundos.`);
    attachment.setColor("#EFC579");
    
    message.channel.send(attachment);
    
    setTimeout(showResult,11000, message, question, i);
}

function showResult(message, question, i) {

    const answer = new Discord.MessageEmbed();
    answer.setTitle(`A resposta da questão ${question} é: "${TABLE[i].result}"`);
    answer.setColor("#EFC579");
    message.channel.send(answer);
}

module.exports = { init }