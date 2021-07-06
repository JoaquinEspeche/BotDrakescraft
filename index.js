const Discord = require("discord.js");
const { DESTRUCTION } = require("dns");
const client = new Discord.Client();
client.memesURL = JSON.parse(require('fs').readFileSync('./memes.json', 'utf8'))
const config = require("./config.json");
new Discord.Client({ ws: { intents: Discord.Intents.ALL } });


client.on("ready", () => {
    console.log("Encendido");
 });
 //Comandos Bot
 client.on("message", (message) => {



    if(message.content === ("!ip")) {
    if(message.channel.id !== "715613947159511111") return;
    const embed = new Discord.MessageEmbed()
    .setTitle(`**Sobre Nuestra Network**`)
    .setDescription(`En **DrakesCraft** Tenemos:\n **1.17** Survival Clásico\n**1.16.X** Survival SlimeFun\n **1.16.X** PracticePvP\n**1.12.2** DrakesLand (Survival Mods)\n**1.12.2** Pixelmon\n**1.16.X** SF-Prison  \n\n**IP Java**\n mc.drakescraft.net\n**IP Bedrock**\nmc.drakescraft.net \nPuerto: 25565`)
    .setColor("BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/732309672215707780/750077716698497024/logotipo-dragon-esport_91719-96.jpg");
     message.channel.send(embed);}
     
 
     
   if(message.content === ("!tienda")) {
    if(message.channel.id !== "715613947159511111") return;
      const embed = new Discord.MessageEmbed()
     .setTitle(`**Esta es nuestra Tienda**`)
     .setDescription(`Acá puedes comprar todo tipo de rangos y mejoras! **Pronto SF-Prison**\n\n[Tienda](https://drakescraft.craftingstore.net/)`)
     .setColor("RED")
     .setThumbnail("https://cdn.craftingstore.net/file/craftingstore-cdn/rPPmDHlLQ1/251153e64ad2285086823c82d267ef12/xco8t9zoxikrz3tanhzk.jpg")
      message.channel.send(embed);}

    if(message.content === ("!mods")) {
    if(message.channel.id !== "715613947159511111") return;
    const embed = new Discord.MessageEmbed()
    .setTitle(`**Estos Son Nuestros ModPacks**`)
    .setDescription(`[Pronto Pixelmon 2]()\n[ModPack DrakesLand 1.12.2](https://www.mediafire.com/file/g0ft3q9c0fiafby/Modpack+DrakesLand+1.12.2.rar/file)`)
    .setColor("RED")
    .setThumbnail("http://minefieldmods.com/favImage.png")
     message.channel.send(embed);}

     if(message.content === ("!meme")) {
     if(message.channel.id !== "701651927682777118") return;
     let randomImage = client.memesURL[Math.floor(Math.random() * client.memesURL.length)]
     return message.channel.send('', {files: [randomImage]}).catch(error => console.log(`${error}, URL: ${randomImage}`));
    }

    if(message.content.startsWith("!server")){
      var server = message.guild;
      const embed = new Discord.MessageEmbed()
      .setThumbnail(server.iconURL())
      .setAuthor("Network DrakesCraft")
      .addField('Nombre' , "DrakesCraft")
      .addField('Region', "Chile")
      .addField('Creado el', server.joinedAt)
      .addField('Miembros', server.memberCount, true)
      .setColor(0x66b3ff)
      message.channel.send(embed);


}
if(message.content === ("-?")) {
   const embed = new Discord.MessageEmbed()
    .setTitle(`**Guia de resolucion de problemas**`)
    .addField("Para gestionar el Ticket con mayor facilidad necesitamos que complete los siguientes campos:","\n\n-Nombre de Usuario (en survival slimefun)\n\n-Nombre de Usuario de persona reportada (si la situación lo requiere)\n\n-Cantidad y nombre especifico del ítem (perdido, bugeado o robado)\n\n-Coordenadas (En caso que sea bug o perdida en terreno)\n\n-Respaldo fotográfico o evidencia clara (siempre que se requiera validar autenticidad)")
     .setFooter("Bot creado por JoacoCraft","https://cdn.discordapp.com/attachments/597953726145363979/755660888480153660/OIP_9.jpg")
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/732309672215707780/750077716698497024/logotipo-dragon-esport_91719-96.jpg");
     message.channel.send(embed);}
    
  });


  
  

  ///////////////////////////////////////////Bienvenida-Despedida//////////////////////////////////////////////////////////////////
  client.on("guildMemberAdd", async member => {
    const embed = new Discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL({format: "png", dynamic: true}))
    .setTitle(`Bienvenido a **DrakesCraft** Espero que la pases bien **:D** \n\nMega Importante: Procura respetar a los demás e invitar a tus amigos :D`)
    .setDescription(`Recuerda Pasarte por <#763617580929384468> y <#699426934030991463> \n\n <@${member.id}> Eres el Usuario Numero: ` + member.guild.members.cache.size)
    .setThumbnail(member.user.displayAvatarURL({format: "png", dynamic: true}))
    .setColor("GREEN")
    .setTimestamp()
    .setImage(`https://cdn.discordapp.com/attachments/597953726145363979/788184616993030175/tenor_1.gif`)
    .setFooter(member.guild.name)
    client.channels.resolve('699426883992944761').send(embed);
});
  
client.on("guildMemberRemove", async member => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL({format: "png", dynamic: true}))
  .setDescription(`<@${member.id}> Chao Espero que vuelvas `)
  .setThumbnail(member.user.displayAvatarURL({format: "png", dynamic: true}))
  .setColor("RED")
  .setTimestamp()
  .setImage(`https://cdn.discordapp.com/attachments/597953726145363979/788184516215701504/tenor.gif`)
  .setFooter(member.guild.name)
  client.channels.resolve('699426883992944761').send(embed);
});
 
///////////////////////////Tiempo///////////////////////////////////
function T_convertor(ms) {      
  let años = Math.floor((ms) / (1000 * 60 * 60 * 24 * 365));
  let meses = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  let dias = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  let horas = Math.floor(((ms) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor(((ms) % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor(((ms) % (1000 * 60)) / 1000);


  let final = ""
  if(años > 0) final += años > 1 ? `${años} años, ` : `${años} año, `
  if(meses > 0) final += meses > 1 ? `${meses} meses, ` : `${meses} mes, `
  if(dias > 0) final += dias > 1 ? `${dias} dias, ` : `${dias} dia, `
  if(horas > 0) final += horas > 1 ? `${horas} horas, ` : `${horas} hora, `
  if(minutos > 0) final += minutos > 1 ? `${minutos} minutos y ` : `${minutos} minuto y `
  if(segundos > 0) final += segundos > 1 ? `${segundos} segundos.` : `${segundos} segundo.`
  return final
}
///////////////////////////////////////////Seguridad//////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", member => {
  let embed = new Discord.MessageEmbed()
  embed.setColor("RED")
  embed.setThumbnail(member.user.displayAvatarURL)
  embed.setDescription(`${member.user.tag} <@${member.id}>`)
  embed.addField("Creo su cuenta hace", T_convertor(Math.floor(Date.now()) - member.user.createdTimestamp))
  client.channels.resolve('731522806281404570').send(embed);
});


client.on("messageDelete", (message) => {
  let canal = client.channels.cache.get('731522806281404570'); 
  const embed = new Discord.MessageEmbed()
  .setTitle(`**Mensaje Borrado**`)
  .setDescription(`**Por: ${message.author.username}**\n\n**Contenido**\n${message}`)
  .setColor("RED")
  client.channels.resolve('731522806281404570').send(embed);
  
 });









      

  

























client.login(config.token);