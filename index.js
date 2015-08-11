#! /usr/bin/env node
'use strict';

var request = require('request');
var cheerio = require('cheerio');
var chalk = require('chalk');

var url = 'https://www.comixology.com/comics-sale';

request(url, function(error, response, html){
  if(!error){
    var $ = cheerio.load(html);

    console.log('  ' + chalk.bold.yellow('COMICS CURRENTLY ON SALE..'));
    $('h3.list-title').each(function(index,node) {
      console.log('    ' + chalk.bold.magenta($(node).text()));
    });
  } else {
    console.log(chalk.bold.red('Failed to get comics :('));
    console.log(error);
  }
});
