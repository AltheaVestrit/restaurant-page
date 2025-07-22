/*
import _ from 'lodash';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
*/

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

import './styles.css';

const contentObj = { home, menu, about };

const contentDiv = document.querySelector("#content");

document.querySelectorAll("nav button").forEach(el => el.addEventListener("click", e => {
    contentDiv.innerHTML = "";
    document.querySelectorAll("nav button").forEach(el => el.classList = "");

    e.target.classList = "active";
    contentDiv.appendChild(contentObj[e.target.id]);
}));

contentDiv.innerHTML = "";
document.querySelectorAll("nav button").forEach(el => el.classList = "");
document.querySelector("button#home").classList = "active";
contentDiv.appendChild(contentObj["home"]);