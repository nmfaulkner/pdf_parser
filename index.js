var http = require('http');
var express = require('express')
var app = express();

let fs = require('fs'),
PDFParser = require("pdf2json");
let pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
      console.log(pdfData['formImage']['Pages'][0])
        // fs.writeFile("/Users/nicholasfaulkner/Documents/Code/Git-Hub/pdf_parser.json", JSON.stringify(pdfData));
    });

    pdfParser.loadPDF("/Users/nicholasfaulkner/Dropbox/Jobs/NickFaulknerResumeVF3.pdf");

app.listen(8080, function(){
  console.log("Listening on 8080");
});
