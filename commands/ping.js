const m = await message.channel.send("Ping?");
m.edit(`Pong! Latência de ${m.createdTimestamp - message.createdTimestamp}ms. A Latência da API é ${Math.round(client.ping)}ms.`);
