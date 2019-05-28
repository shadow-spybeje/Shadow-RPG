/**
 * Shadow RPG
 * Created by: {HSF}ScionSpy#1904
 * Backed by: {HSF}Bejebajay#1904
 * May 25'th, 2019
 */

module.exports = {
    coded : "2019-05-27",
    name : "srpg",
    description : "",
    usage : "srpg",

    execute(){
        console.log("\n\n\n---==☆ Shadow's Role Play Game ☆==---\n")
        console.log("\nS.RPG --> Logging On.\n");


        const discord = require('discord.js');
        const srpg = new discord.Client();
        const collect = require('./system/collections.js').execute(srpg);
        collect;

        return srpg;
    }
}
