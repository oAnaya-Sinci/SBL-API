/** 
 * javascript comment 
 * @Author: Carlos Omar Anaya Barajas 
 * @Date: 2022-07-26 08:49:09 
 * @Desc: This file use callback functions to subscribe the tags to the PLC. 
 */

const tagsSBL = [
  {analogicas: [
    //WC1_DATA
    {tag: "ns=3;s=[PLC_W10]WC1_Presion.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Presion.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Presion.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Presion.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC1_Presion.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Presion.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Humedad.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Humedad.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Humedad.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Humedad.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC1_Humedad.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Humedad.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Flujo.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Flujo.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Flujo.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Flujo.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC1_Flujo.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC1_Flujo.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Temperatura.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Temperatura.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Temperatura.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Temperatura.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC2_Temperatura.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Temperatura.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Presion.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Presion.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Presion.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Presion.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC2_Presion.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC2_Presion.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Temperatura.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Temperatura.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Temperatura.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Temperatura.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC3_Temperatura.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Temperatura.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Presion.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Presion.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Presion.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Presion.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC3_Presion.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Presion.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Humedad.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Humedad.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Humedad.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Humedad.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC3_Humedad.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Humedad.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Flujo.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Flujo.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Flujo.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Flujo.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC3_Flujo.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Flujo.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Ritmo.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Ritmo.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Ritmo.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Ritmo.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC3_Ritmo.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC3_Ritmo.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Flujo.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Flujo.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Flujo.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Flujo.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC4_Flujo.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Flujo.EU", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Humedad.Hightlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Humedad.Idvariable", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Humedad.Lowlimit", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Humedad.Value", type: "int32"},
    // {tag: "ns=3;s=[PLC_W10]WC4_Humedad.Dtcaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]WC4_Humedad.EU", type: "int32"},
  ]},

  {events: [
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Duration", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Idmachine", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Read", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Return", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Type", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Description", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Endtime", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Idevento", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_Event[0].Starttime", type: "int32"},
  ]},

  {OEE: [ 
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Availability", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Available", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].GoodParts", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].ICT", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Idmachine", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].OEE", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Performance", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Quality", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Read", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Return", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Running", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].ShiftId", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].TotalParts", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].Dttimecaptura", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].ParteId", type: "int32"},
    {tag: "ns=3;s=[PLC_W10]FIFO_WC_OEE[0].LoteId", type: "int32"},
  ]}
];

// const tagData = [
//   {tag: "ns=3;s=[PLC_W10]Idx_Event", type: "int32"},
//   {tag: "ns=3;s=[PLC_W10]Idx_WC", type: "int32"},
//   {tag: "ns=3;s=[PLC_W10]WC1_Flujo.Hightlimit", type: "int32"},
//   {tag: "ns=3;s=[PLC_W10]WC1_Flujo.Value", type: "int32"},
// ];

function subscribeTags(group, n=0) {

  const tagData = processTags(group);
console.log( tagData[n] );
  if(n >= tagData.length)
    return {};

  let headers = {
    method: 'POST',
    body: JSON.stringify(tagData[n]),
    headers: {
      "content-type": "application/json; charset=utf-8"
    },
  };

  setTimeout(() => {
    
    fetch("http://localhost:1880/sbl_tags/subscribe", headers).then(response => response.json()).then(data => data).catch(error => console.error(error));  
    
    return subscribeTags(group, n+1);
  }, 100);
}

function unsubscribeTags(group, n=0) {

  const tagData = processTags(group);

  if(n >= tagData.length)
    return {};

  let headers = {
    method: 'POST',
    body: JSON.stringify(tagData[n]),
    headers: {
      "content-type": "application/json; charset=utf-8"
    },
  };

  setTimeout(() => {
    
    fetch("http://localhost:1880/sbl_tags/unsubscribe", headers).then(response => response.json()).then(data => data).catch(error => console.error(error));

    return unsubscribeTags(group, n+1);
  }, 200);
}

/** 
 * javascript comment 
 * @Author: Carlos Omar Anaya Barajas 
 * @Date: 2022-07-26 15:36:52 
 * @Desc:  
 */

let processTags = (group) => {

  for (const tag of tagsSBL) {
 
    if(tag[group])
      return tag[group];
  }
}

// console.log( processTags("OEE") );
// console.log( processTags("events") );
// console.log( processTags("analogicas") );