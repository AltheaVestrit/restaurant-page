/*
import _ from 'lodash';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
*/

import homeContent from "./home.js";
import './styles.css';

const contentObj = { homeContent };

const contentDiv = document.querySelector("#content");

document.querySelectorAll("button").forEach(el => el.addEventListener("click", e => {
    contentDiv.innerHTML = "";
    document.querySelectorAll("button").forEach(el => el.classList = "");

    e.target.classList = "active";
    contentDiv.appendChild(contentObj[e.target.id + "Content"]);
}));

document.querySelector("#home").classList = "active";
contentDiv.appendChild(homeContent);