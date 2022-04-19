const Discord = require ("discord.js")

function createi(phrase, name, number, image) {
    return {phrase, name, number, image}
}

const TABLE = [
    createi("Escolha, no primeiro estágio, qualquer pokémon que aprenda Wish com mais de um estágio evolutivo.","A Esperança", 1 , 'https://i.pinimg.com/236x/33/83/24/338324776194182f1c5330baefdfe04e.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon do tipo Terra com mais de um estágio evolutivo.","O Barroso", 2  , 'https://i.pinimg.com/236x/1d/a3/38/1da3380b45b2ac912c1a715838a6435c.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Plus ou Minus de ability.","Os Gêmeos", 3 , 'https://i.pinimg.com/236x/a2/cf/50/a2cf50396f796aa2adff7bf47bc0febd.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Prankster de ability.","O Obscuro", 4 , 'https://i.pinimg.com/236x/6f/23/a8/6f23a872380cc6786826762f555a871d.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Magnet Pull de ability.","O Cadeado", 5 , 'https://i.pinimg.com/236x/f3/f1/4d/f3f14dd014d0f6cf4c06229bbe5a9ece.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Drought de ability.","A Luz", 6, 'https://i.pinimg.com/236x/df/6f/39/df6f39d8d69749c7f3272eeb2410f343.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Sand Stream de ability.","A Areia", 7, 'https://i.pinimg.com/236x/88/f8/44/88f844f19e1bb76064b3eca9954123ff.jpg'),
    createi("Escolha qualquer pokémon que aprenda Spore.","O Sonho", 8, 'https://i.pinimg.com/236x/95/3d/48/953d484d57f9928d983ed5b9b698c9a4.jpg'),
    createi("Você acaba de receber um Swablu e um Swablu presente!","A Nuvem", 9, 'https://i.pinimg.com/236x/78/62/00/78620097bf32951df5337aaa3b7bd337.jpg'),
    createi("Você acaba de receber um Litwick e um Litwick presente!","A Balança", 10, 'https://i.pinimg.com/236x/61/31/11/61311155f51dc07b9586a9a63421c32b.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que aprenda Boomburst.","A Voz", 11, 'https://i.pinimg.com/236x/f9/9e/cf/f99ecf3c5b0d56a2b0839712d1075416.jpg'),
    createi("Você acaba de receber uma Vulpix-Alola!","A Neve", 12, 'https://i.pinimg.com/236x/ae/d6/1e/aed61e36d240a3e611142079f5ed8477.jpg'),
    createi("Você acaba de receber uma Dewpider!","A Tempestade", 13, 'https://i.pinimg.com/236x/02/fb/d5/02fbd51d43ff61c3db256f0a1ccc2aec.jpg' ),
    createi("Mate o pokémon de alguém!","O Além", 14, 'https://i.pinimg.com/236x/bb/60/ab/bb60ab84c60556f812c6af6533120258.jpg'),
    createi("Congele a evolução do pokémon de alguém para sempre!","O Congelar", 15, 'https://i.pinimg.com/236x/f4/67/ca/f467caa7826a067a6e9f1b7880669881.jpg'),
    createi("Roube o pokémon de alguém para si mesmo!","A Onda", 16, 'https://i.pinimg.com/236x/da/c3/fb/dac3fb5c2d23e224648377c8ed28287a.jpg' ),
    createi("Proíba alguém de usar itens, dar lances ou gastar Poké-Dollars por um dia.","As bolhas", 17, 'https://i.pinimg.com/236x/3b/36/9e/3b369edcae41fd0200fee87d220823fc.jpg' ),
    createi("Roube 100 Poké-Dollars de alguém.","A Flecha", 18, 'https://i.pinimg.com/236x/96/a1/08/96a108fe0579dfebf4ab749a9c4b24ca.jpg' ),
    createi("Queime 200 Poké-Dollars de alguém.","O Foguento", 19, 'https://i.pinimg.com/236x/82/ae/88/82ae88f863e3fd880348109020740940.jpg' ),
    createi("Dê um Ovo Fada e um Ovo Inseto a dois treinadores diferentes.","A Doce", 20, 'https://i.pinimg.com/236x/0e/5e/51/0e5e5120be1c67d2430a115ce43cea63.jpg' ),
    createi("Troque um pokémon seu por outro pokémon do mesmo tipo sem exceçã.","A Mudança", 21, 'https://i.pinimg.com/236x/7e/14/cd/7e14cd886b41d5e9b16f932a7c514ca1.jpg'),
    createi("Faça um breed com dois pokémon de alguém.","A Criação", 22, 'https://i.pinimg.com/236x/06/43/c1/0643c16d6178f3e603283ee90a6ed4a2.jpg' ),
    createi("Dê um slot a alguém ","A Grande", 23, 'https://i.pinimg.com/236x/a1/e6/41/a1e641dd9004dbadf9ab2cd0d5fe2b34.jpg' ),
    createi("Você acaba de receber uma Rapidash!","O Traço", 24, 'https://i.pinimg.com/236x/fb/0e/3a/fb0e3a059573e560e12523dfaea0087d.jpg'),
    createi("Você acaba de receber uma Joltik!","O Pequeno", 25, 'https://i.pinimg.com/236x/e5/73/aa/e573aa9aeaa27fc60cb8020f5f90849e.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Sniper de ability","O Tiro", 26, 'https://i.pinimg.com/236x/bb/77/d3/bb77d33199c9a07784b18bce67195f4a.jpg'),
    createi("Você acaba de receber um Celebi!","O Retornado", 27, 'https://i.pinimg.com/236x/c8/5c/76/c85c762470c4b51d81f83469177fa603.jpg'),
    createi("Você acaba de receber um Mew!","O Labirinto", 28, 'https://i.pinimg.com/236x/d7/e6/c8/d7e6c844edf04ec665ffb023d9ff9410.jpg'),
    createi("Escolha alguém para receber os mesmos prêmios que você e vice versa até o fim do dia","O Espelho", 29, 'https://i.pinimg.com/236x/e8/7f/a1/e87fa167015770d75edb16233b2425dd.jpg'),
    createi("Você acaba de receber um Zeraora!","O Movimento", 30, 'https://i.pinimg.com/236x/fc/b3/a3/fcb3a3a38dbc9118c174749ae7a6ed66.jpg'),
    createi("Você acaba de receber um Sylveon!","O Ciclo", 31, 'https://i.pinimg.com/236x/a3/9a/f6/a39af67418e7bebd744854459d6ea52a.jpg'),
    createi("Você acaba de receber um Arceus! O kingo permanecerá no Lvl 50 e impedido de usar plates ou cristais-z até o dia 17.","O Poder", 32, 'https://i.pinimg.com/236x/89/9f/16/899f16c32442b05cdad247816f9f017e.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Cloud Nine de ability","O Sobrevoo", 33, 'https://i.pinimg.com/236x/47/10/a5/4710a518f1b12e6dbd4b3b8d8e44e2f3.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha Levitate de ability e com mais de um estágio evolutivo","A Neblina", 34, 'https://i.pinimg.com/236x/a2/5c/b6/a25cb669ed80f903ff359ecac9f04d81.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que aprenda Sweet Scent e com mais de um estágio evolutivo","A Flor", 35, 'https://i.pinimg.com/236x/52/7f/7a/527f7a68a9e57c2d94b2f67a1d0b22c6.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que aprenda High Jump Kick","O Pulo", 36, 'https://i.pinimg.com/236x/83/4b/0d/834b0ded280cd2a02d369e456d06c1b6.jpg'),
    createi("Você acaba de receber um Zoroark!","A Ilusão", 37, 'https://i.pinimg.com/236x/c6/35/44/c63544a94da3d102d11f74c03f8cd1a6.jpg'),
    createi("Apague da memória de dois treinadores um pokémon e um ovo","O Apagar", 38, 'https://i.pinimg.com/236x/e2/b7/40/e2b740a98ec11db45e82d51208c0fbfc.jpg'),
    createi("Desafie um treinador para uma batalha National Dex AG com Gmax. O vencedor recebe 1000 Poké-Dollars!","A Luta", 39, 'https://i.pinimg.com/236x/d2/84/19/d284198d063a451d43177229ede49794.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que aprenda Slack Off","O Sono", 40, 'https://i.pinimg.com/236x/17/8f/18/178f18745d7459a35487939fa8fce787.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que aprenda Perish Song","A Canção", 41, 'https://i.pinimg.com/236x/6d/d8/49/6dd8492b3d995663fc33176197143ee8.jpg'),
    createi("Você acaba de receber uma Diancie! Sem mega pedra para sempre.","O Brilho", 42, 'https://i.pinimg.com/236x/00/0e/e3/000ee3af5fdbb16806015c00d48857df.jpg'),
    createi("Você acaba de receber um Raikou!","O Trovão", 43, 'https://i.pinimg.com/236x/b0/72/ab/b072ab8023d60b37f5fcc7727cedd286.jpg'),
    createi("Evolua um pokémon seu e de um amigo!","O Tempo", 44, 'https://i.pinimg.com/236x/d6/dd/8b/d6dd8b3e6058943a4076c8daebaaf2d8.jpg'),
    createi("Proteja um pokémon seu e de um amigo de qualquer efeito de cartas, até o fim do RPG.","O Escudo", 45, 'https://i.pinimg.com/236x/d6/e9/76/d6e9766bc73d1c430992f3462b7afc9a.jpg'),
    createi("Mate um pokémon seu e de dois inimigos.","A Espada", 46, 'https://i.pinimg.com/236x/68/8a/c1/688ac1cea08ad6c010dde7a5b20ef545.jpg'),
    createi("Escolha qualquer pokémon do tipo Grama para você e um amigo.","A Madeira", 47, 'https://i.pinimg.com/236x/83/e9/fd/83e9fdd5680316a9ff681439a922f31e.jpg'),
    createi("Você acaba de receber um Gyarados! Sem mega pedra.","O Suculento", 48, 'https://i.pinimg.com/236x/8b/c0/d2/8bc0d280349731582719f9c01f0ff6be.jpg'),
    createi("Você acaba de receber um Gengar! Sem mega pedra.","A Sombra", 49, 'https://i.pinimg.com/236x/82/a0/66/82a0667a520994aeb9b49600205b1cd5.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que tenha No Guard de ability","O Vôo", 50, 'https://i.pinimg.com/236x/cf/51/59/cf51596cbf3ad9553248c7a246372f79.jpg'),
    createi("Clame por um lendário que te visitará no torneio","A Evocação", 51, 'https://i.pinimg.com/236x/1a/e5/7d/1ae57d1b3bc9c4f56255fcb832f82c87.jpg'),
    createi("Anule os efeitos de carta usados em você ou em um amigo.","A Chave", 52, 'https://i.pinimg.com/236x/46/72/e7/4672e7e0f22bdf2bb3bf0ea67720d96a.jpg'),
    createi("Congele a evolução do pokémon de dois inimigos para sempre!","A Destruição", 53, 'https://i.pinimg.com/236x/a5/20/8a/a5208a572bd900275e4b7e577af3473e.jpg'),
    createi("Desafie um treinador para uma batalha National Dex com Gmax. O vencedor recebe um pokémon do perdedor forçadamente.","O Fio", 54, 'https://i.pinimg.com/236x/73/60/ff/7360fffff55f4001f55f600276fb7f51.jpg'),
    createi("Corte 100 pontos de um inimigo de maneira secreta. Use o confess.","A Tesoura", 55, 'https://i.pinimg.com/236x/a2/ab/76/a2ab7651fe88fdcd646407929f94dffe.jpg'),
    createi("Distribua 100 pontos para dois amigos, e receba 100 pontos.","A Lua", 56, 'https://i.pinimg.com/236x/e8/e2/dd/e8e2dd082d42d23af5479cda06035ffb.jpg'),
    createi("Escolha, no primeiro estágio, qualquer pokémon que existiu em Hisui.","O Old", 57, 'https://i.pinimg.com/236x/d7/2c/53/d72c53a5d728b44048a666f7a8a2d8d0.jpg'),
    createi("Faça a, e somente, a ação que quiser.","O Deus", 58, 'https://i.pinimg.com/236x/58/c4/b6/58c4b624e3378b0013f7b427896cea3b.jpg')
];

const rollDice = () => {
    return Math.floor (Math.random() * 58);
}

function init(client, message, channel, user, owner) {

    let i = rollDice();

    const attachment = new Discord.MessageEmbed();
    //console.log(message.author);
    attachment.setTitle(`${message.author.username} tirou a carta: "${TABLE[i].name}"!`);
    attachment.setDescription(`${TABLE[i].phrase}`);
    attachment.setFooter(`Carta de número ${TABLE[i].number}.`);
    attachment.setColor("#EFC579");
    attachment.setImage(TABLE[i].image);
        
    message.channel.send(attachment);        

}

module.exports = { init }