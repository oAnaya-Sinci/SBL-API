/** 
 * javascript comment 
 * @Author: Carlos Omar Anaya Barajas 
 * @Date: 2022-07-26 08:49:09 
 * @Desc: This file use callback functions to subscribe the tags to the PLC. 
 */
import tag from "./dataTags.js";

console.time("sbl");
let procecedData = [];

async function readDataTags(group, n = 0) {

  const tagData = tag.processTags(group);

  // console.log( tagData );

  // let data = "";
  // for (const tag of tagData) {
  //   data += tag.tag + ",<br>";
  // }
  // document.getElementById("dataToShow").innerHTML = data;

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
  
  } ).catch(error => console.error(error));

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
}

/** 
 * javascript comment 
 * @Author: Carlos Omar Anaya Barajas 
 * @Date: 2022-07-28 11:31:31 
 * @Desc:  
 */

// setInterval(() => {
//   readDataTags("oee");
//   readDataTags("events");
//   readDataTags("WC1");
//   readDataTags("WC2");
//   readDataTags("WC3");
//   readDataTags("WC4");
// }, 1000);

  // readDataTags("oee");
  // readDataTags("events");
  readDataTags("WC4");