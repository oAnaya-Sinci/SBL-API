/** 
 * javascript comment 
 * @Author: Carlos Omar Anaya Barajas 
 * @Date: 2022-07-26 08:49:09 
 * @Desc: This file use callback functions to subscribe the tags to the PLC. 
 */
import {tagsSBL} from "./dataTags.js";

let procecedData = [];

async function readDataTags(group, n = 0) {

  const tagData = tagsSBL[group];

  if (n >= tagData.length){
    console.timeEnd("sbl");
    sendDataToDB(group);
    return;
  }

  let headers = {
    method: 'GET',
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  };

  await fetch("http://localhost:1880/sbl_tags/readTagData?data="+JSON.stringify(tagData[n]), headers).then(response => response.json()).then(data => {

    data = data.data;

    procecedData.push( typeof data == 'number' ? data : typeof data == 'string' ? `'${data}'` : 0 );
  
  }).catch(error => console.error(error));

  return readDataTags(group, n + 1);
}

function sendDataToDB(group){
  
  let headers = {
    method: 'POST',
    body: JSON.stringify({procecedData: procecedData, group: group}),
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  };

  fetch("http://localhost:1880/sbl_tags/saveTagData", headers).then(response => response.json()).then(data => procecedData.push(data.data) ).catch(error => console.error(error));

  return;
}

/** 
 * javascript comment 
 * @Author: Carlos Omar Anaya Barajas 
 * @Date: 2022-07-28 11:31:31 
 * @Desc:  
 */

// setInterval(() => {
  
//   console.time("sbl");
  
//   readDataTags("oee");
//   readDataTags("events");
//   readDataTags("WC1");
//   readDataTags("WC2");
//   readDataTags("WC3");
//   readDataTags("WC4");
// }, 1000);

readDataTags("oee");
// readDataTags("events");
// readDataTags("WC4");

// console.log( tagsSBL['WC1_Presion'] );
// console.log( tagsSBL['WC1_Presion'][0] );
// console.log( JSON.stringify(tagsSBL['WC1_Presion'][0]) );