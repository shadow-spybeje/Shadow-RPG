const config = require('./config.json')
const discord = require('discord.js');
const fs = require('fs');

module.exports = {
    coded : "2019-05-04",
    name : "collections",
    description : "begins the exe process fo the `./collections` parent folder.",
    usage : "[unknown Usage]",

    execute(srpg){

        function general(srpg){

            srpg.cmds = new discord.Collection();
            srpg.cmds.general = new discord.Collection();
            srpg.cmds.admin = new discord.Collection();
            srpg.cmds.unloaded = new discord.Collection();

            srpg.collections = new discord.Collection();

            srpg.config = new discord.Collection();

            srpg.events = new discord.Collection();
            srpg.functions = new discord.Collection();

            srpg.settings = new discord.Collection();
            srpg.settings.u = new discord.Collection();

            srpg.version = require('.././package.json').version;

            return srpg;
        };

        function system(srpg){
            srpg.system = new discord.Collection();

            return srpg;
        };


        sys = "S.RPG --> "

        async function collect(srpg, fs){
            let priority = [];
            let standard = [];

            function priorityCollections(srpg, fs){

                const collectionss = fs.readdirSync('.././Shadow-RPG/system/collections/priority').filter(file => file.endsWith('.js'));
                for (const file of collectionss) { 	const collection = require(`./collections/priority/${file}`);
                    srpg.collections.set(collection.name, collection);
                    priority.push(`[★]`+collection.name)
                };

                return srpg;
            }
            await priorityCollections(srpg, fs);

            function standardCollections(srpg, fs){

                const collectionss = fs.readdirSync('.././Shadow-RPG/system/collections').filter(file => file.endsWith('.js'));
                for (const file of collectionss) { 	const collection = require(`./collections/${file}`);
                    srpg.collections.set(collection.name, collection);
                    standard.push(collection.name)
                };

                return srpg;
            }

            await standardCollections(srpg, fs);

            let array = priority.concat(standard);
            console.log(sys+` Collections :: Loaded : ${array.length}\n• • ${array.join()}\n`)

        };

        async function runFile(srpg, fs){
            await general(srpg);
            await system(srpg);

            await console.log("\n---==☆ Shadow's Role Play Game ☆==---\n")
            await console.log("S.RPG --> Logging On.\n");

            await console.log(`S.RPG --> v.${srpg.version}\n`)

            await collect(srpg, fs);
            await srpg.collections.forEach(collection => {
              collection.execute(srpg, fs)
            });

            await console.log(`---==☆ Logged Into S.RPG ☆==---\n`);
            return srpg;
        };
        runFile(srpg, fs);
    },
};
