"use strict";

global.log = require("../log.js");

var program = require("commander");
var colors = require("colors/safe");
var fs = require("fs");
var fsextra = require("fs-extra");
var path = require("path");
var Helper = require("../helper");

program.option("");
program.option("    --home <path>" , "home path");

var argv = program.parseOptions(process.argv);

Helper.setHome(program.home || process.env.LOUNGE_HOME);

if (!fs.existsSync(Helper.CONFIG_PATH)) {
    fsextra.ensureDirSync(Helper.HOME);
    fs.chmodSync(Helper.HOME, "0700");
    /*fsextra.copySync(path.resolve(path.join(
        __dirname,
        "..",
        "..",
        "defaults",
        "config.js"
    )), Helper.CONFIG_PATH);
    */
    log.info(`Configuration file created at ${colors.green(Helper.CONFIG_PATH)}.`);
}

require("./start");
require("./config");

program.parse(argv.args);

if (!program.args.length) {
    program.parse(process.argv.concat("start"));
}
