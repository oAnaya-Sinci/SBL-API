// let subscriptionId = msg.topic == "subscriptionId" ? msg.payload : "noid";
// global.set("subscribeId", subscriptionId);

// Esta funcion obtiene el tag para ver cual guardar
let cutStringTag = (stringTag) => {
  
  let firstCut = stringTag.split(";")[1];
  let secondCut = firstCut.split("]")[1];
  
  return secondCut;
}
//END

let typeTag = cutStringTag(msg.topic);
let valueTag = msg.payload;

let query = "";

switch(typeTag){
    case "Idx_WC":
        query += "Insert Idx_WC";
        break;
    case "Idx_Event":
        query += "Insert Idx_Event";
        break;
    case "WC1_Flujo.Hightlimit":
        query += "Insert WC1_Flujo.Hightlimit";
        break;
        
    case "WC1_Flujo.Value":
        query += "Insert WC1_Flujo.Value";
        break;
}

query += " = " + valueTag;

msg.payload = query;

return msg;