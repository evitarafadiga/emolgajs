const Discord = require ("discord.js")

function createfact(phrase, result) {
    return {phrase, result}
}

const TABLE = [
    createfact("O conceito original de Pokémon era chamado de Capsule Monsters", "Verdadeiro"),
    createfact("Evoluções por troca são causadas pelo medo do abandono, para que seus donos originais os-amem novamente.","Verdadeiro"),
    createfact("A linguagem humana com seus nomes, que os Pokémon dizem são seus gritos de guerra evoluídos.","Verdadeiro"),
    createfact("Post Malone já gravou um clipe ao lado de um Pikachu.", "Verdadeiro"),
    createfact("A líder de ginásio Misty e companheira de Ash foi baseada em um Yokai com pernas enormes.","Falso"),
    createfact("Ditto foi criado a partir de uma versão beta da Cleffa.","Falso"),
    createfact("O verdadeiro corpo do Wobbuffet é a cauda preta com dois olhos.","Verdadeiro"),
    createfact("Wailord pode cruzar com Diglett.","Verdadeiro"),
    createfact("A cantora famosa Mabel já gravou uma homenagem a pokémon.", "Verdadeiro"),
    createfact("Um Pikachu tem formato de coração na cauda se for do sexo feminino.", "Verdadeiro"),
    createfact("Spinarak foi criado por uma criança que jogava Trading Card Game. Verdadeiro ou falso","Verdadeiro"),
    createfact("MissingNo, o pokémon que era um bug/glitch aparece nos games X e Y.","Verdadeiro"),
    createfact("Mr. Mime do sexo feminino, a partir da quinta geração, passou a se chamar Mrs. Mime.", "Falso"),
    createfact("Uma gota do corpo de Muk é capaz de envenenar um lago inteiro.", "Verdadeiro"),
    createfact("O Mew nos jogos FireRed/LeafGreen possui uma proteção anti-hack.", "Verdadeiro"),
    createfact("Apesar da Pokédex dizer que o Magneton é composto de três Magnemites, seu peso está acima de três vezes maior.","Verdadeiro"),
    createfact("A pronúncia do nome do Machamp em francês lembra a palavra Maconha.", "Verdadeiro"),
    createfact("Mew é a pré-evolução de Mewtwo", "Falso"),
    createfact("O Pikachu de J Balvin eletrocuta um carro e uma mulher em um de seus clipes.", "Verdadeiro"),
    createfact("Victini foi o primeiro pokémon a debutar nas mídias antes de sua geração.", "Falso"),
    createfact("Gothitelle é capaz de prever a morte de seu treinador.","Verdadeiro"),
    createfact("Sandy e Junior gravaram um dos temas em português do anime.", "Falso"),
    createfact("Mandibuzz alimenta seus filhotes Vullaby com restos humanos.", "Falso"),
    createfact("Katy Perry é a embaixadora oficial da franquia.", "Falso"),
    createfact("Onix é inspirado nos rochedos do Grand Canyon.", "Falso"),
    createfact("Cyndaquil é o único inicial de fogo que permanece puro até o último estágio evolutivo.","Verdadeiro"),
    createfact("Azurill tem chances consideráveis de mudança de sexo quando evolui.", "Verdadeiro"),
    createfact("Bisharp é capaz de cortar um edifício inteiro com suas lâminas.","Falso"),
    createfact("Christina Aguilera ama a franquia pokémon e jogava entre suas turnês.", "Verdadeiro"),
    createfact("O PokéRap de Hoenn pegou #1 nos charts asiáticos por semanas.","Falso"),
    createfact("Em um dos jogos, Doduo voa com os pés.","Verdadeiro"),
    createfact("Ken Seulgimori é o nome do criador da franquia.", "Falso"),
    createfact("Por causa de um Poké-Dollar, você não pode comprar uma bicicleta na primeira geração dos jogos.","Verdadeiro")
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