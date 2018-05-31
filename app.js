const express = require('express');
const getPdfs = require('./getPdfs');
const ejs = require('ejs');
const app = express();

getPdfs.getUrls();

