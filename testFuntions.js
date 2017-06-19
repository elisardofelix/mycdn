function prueba_x(){
var userProperties = PropertiesService.getUserProperties();
  var objx = [{j:'Holacomo'},{j:'estas'}];
  
  objx = JSON.stringify(objx);
  objx = JSON.parse(objx);
  
  
  Logger.log(objx[0].j);
  
}

function prueba_v(){
  var cursor = DocumentApp.getActiveDocument().getCursor();
    var surroundingText = cursor.getSurroundingText().getText();
    var surroundingTextOffset = cursor.getSurroundingTextOffset();
  var str = surroundingText.charAt(surroundingTextOffset - 1);
  
  Logger.log(surroundingText.charAt(surroundingTextOffset - 1).charCodeAt(0));
  
}

function pruebainsert(){
 
  insertText('Hola');
}

function ptestJson()
{
 /* var jsont = [{word : "comma", replace : ","},{word : "dot", replace : "."}];
   var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('jsontest', JSON.stringify(jsont));*/
  var userProperties = PropertiesService.getUserProperties();
  var jsonstr = userProperties.getProperty('pruxx');
  //var jsont = JSON.parse(jsonstr);
  //jsont.push({word : "colon", replace: ":"});
  //jsont.splice(0, 1);
  Logger.log(JSON.stringify(jsonstr));
}


function pruebaDelete(){
  var doc = DocumentApp.getActiveDocument().getBody();
  var textos = doc.findText('.::Converting::.').getElement();
  textos.removeFromParent();
}

function pruebaInsert(){
  var cursor = DocumentApp.getActiveDocument().getCursor();
  var element = cursor.insertText('.::Converting::.');
}