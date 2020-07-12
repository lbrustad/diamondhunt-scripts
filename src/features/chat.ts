/// <reference path="../_all.d.ts" />

// <dev-only>
//reference data

/*
chat(username~level~tag~sigil~message~type)
username = lassebrus
level = 0-900
tag = none | Donor | Superdonor | Ultradonor | Contributor | Financier | Investor | Moderator | Dev | yell
sigil = none | (all sigil names as .png)
message = a plain text message
type = none | pm_to | pm_from | error

*/

// </dev-only>

type Username = string;
type Level = number;
type Tag = 'none' | 'Donor' | 'Superdonor' | 'Ultradonor' | 'Contributor' | 'Financier' | 'Investor' | 'Moderator' | 'Dev' | 'yell'
type Sigil = string;
type Message = string;
type Type = 'none' | 'pm_to' | 'pm_from' | 'error'

module chat {
  export const NAME = 'chat';


  function insertLinks(str: string) {}
  insertLinks('message with https://dh3.diamondhunt.co/ link in it');

  // Chat Script
  function dh3chat(data: string): void {
    const [_username, _level, _tag, _sigil, ...rests] = data.split('~');
    const username = _username as Username,
      level = parseInt(_level) as Level,
      tag = _tag as Tag,
      sigil = _sigil as Sigil,
      type = rests.pop() as Type;
    let message = rests.join('~').split(' ') as Message[];

    console.log(username, level, tag, sigil, message, type);
  }

  export function init() {
    //
  }

  // <dev-only>
  dh3chat('lassebrus~900~Dev~Investor~This message contains ~ without issues~none')
  // </dev-only>
}



// <reference-only>

let tagTitle: string = '',
  global_autoscrollChat: boolean = true;
function isValidURL(s: string): boolean { return s === '' }
function convertStringToURL(s: string): string { return s }
function sanitize(s: string): string { return s }
function removeChars(s: string): string {return s}
function getTimeFetch(): string { return ''}
function $(x: any): any {}

// DH3 Original Chat - barely modified for readability
function _chat(data: string): void {
  var arr = data.split("~");

  var username = arr[0];
  var level = arr[1];
  var tag = arr[2];
  var sigil = arr[3];
  var message = arr[4];
  var msgType = arr[5];

  var theSigil: string = "";
  if (sigil != "none") {
    theSigil = " <img src='images/" + sigil + ".png' style='vertical-align:middle' width='30px' height='30px' /> ";
  }

  var theTag: string = "";
  var style: string = "";

  if (tag != "none") {
    theTag = " <span class='chat-tag-" + tag + "'>" + tagTitle + "</span> ";
    switch (tag) {
      case "Superdonor":
        theTag = " <span class='chat-tag-" + tag + "'>Super donor</span> ";
        break;
      case "Ultradonor":
        theTag = " <span class='chat-tag-" + tag + "'>Ultra donor</span> ";
        break;
      case "Financier":
        style = "style='color:#007a99'";
        break;
      case "Investor":
        style = "style='color:#cc66ff'";
        break;
      case "Dev":
        style = "style='color:#808000'";
        break;
      case "Moderator":
        style = "style='color:grey;'";
        break;
      case "yell":
        theTag = " <span class='chat-tag-" + tag + "'>Server Message</span> ";
        style = "style='color:blue;'";
        break;
    }
  }

  var lines: string[] = message.split(" ");
  var msg: string = "";
  var i: number = 0;

  for (; i < lines.length; i++) {
    if (isValidURL(lines[i])) {
      /** @type {string} */
      msg = msg + (convertStringToURL(lines[i]) + " ");
    } else {
      /** @type {string} */
      msg = msg + (sanitize(lines[i]) + " ");
    }
  }

  message = removeChars(msg);
  var htmlOutput: string = "";

  if (msgType == "error") {
    htmlOutput = "<span style='color:grey'>" + message + "</span>";
  }
  else if (msgType == "pm_from") {
    style = "style='color:purple'";
    htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + theSigil + theTag + "<span " + style + "> [PM from " + username + "] " + message + "</span>";
  }
  else if (msgType == "pm_to") {
    style = "style='color:purple'";
    htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + theSigil + theTag + "<span " + style + "> [Sent to " + username + "] " + message + "</span>";
  }
  else if (tag == "yell") {
    htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + theSigil + theTag + "<span " + style + "><b>" + message + "</b></span>";
  }
  else if (tag == "Investor") {
    htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + theSigil + "<img src='images/investor.gif' style='vertical-align:middle;'  /> " + "<span " + style + "><b>" + username + " (" + level + "): </b>" + message + "</span>";
  }
  else {
    htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + theSigil + theTag + "<span " + style + "><b>" + username + " (" + level + "): </b>" + message + "</span>";
  }

  var container = document.getElementById("chat-area-view") as HTMLElement;
  if (container.innerHTML.length >= 60000) {
    /** @type {string} */
    container.innerHTML = container.innerHTML.substr(30000, container.innerHTML.length);
  }
  $(container).append("<div>" + htmlOutput + "</div>");
  if (global_autoscrollChat) {
    $(container).scrollTop($(container)[0].scrollHeight);
  }
}

// </reference-only>