module.exports = {
  coded : "2019-03-16",

  name : "cmds",
  description : "Logs all of the S.RPG Cmds.",


  execute(srpg, fs){
    const generalCmds = fs.readdirSync('.././Shadow-RPG/cmds/general').filter(file => file.endsWith('.js'));
    const adminCmds = fs.readdirSync('.././Shadow-RPG/cmds/admin').filter(file => file.endsWith('.js'));
    const unloadedCmds = fs.readdirSync('.././Shadow-RPG/cmds/unloaded').filter(file => file.endsWith('.js'));

    let general = [];
    let admin = [];
    let unloaded = [];

    for (const file of generalCmds) { 	const cmd = require(`../.././cmds/general/${file}`);
      srpg.cmds.general.set(cmd.name, cmd);
      general.push(cmd.name);
    };
    for (const file of adminCmds) { 	const cmd = require(`../.././cmds/admin/${file}`);
    srpg.cmds.admin.set(cmd.name, cmd);
    admin.push(`[☆]`+cmd.name);
    };
    for (const file of unloadedCmds) { 	const cmd = require(`../.././cmds/unloaded/${file}`);
    srpg.cmds.unloaded.set(cmd.name, cmd);
    unloaded.push(`[✪]`+cmd.name);
    };

    array = general.concat(admin)
    coma = ""; if(unloaded) coma = ", ";

    console.log(`S.RPG -->  Commands   :: Loaded : ${array.length} UnLoaded : ${unloaded.length}\n• • ${array.join(', ')}${coma}${unloaded.join(', ')}\n`)
  }
};
