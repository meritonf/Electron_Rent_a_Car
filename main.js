const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const http = require('http');

let window;

function createWindow(){
    window = new BrowserWindow({
        width:1000,
        height: 1000,
        icon:__dirname+'/img/sys.png'
    });
    
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file:',
        slashes:true
    }));
    
    //open devtools
    window.webContents.openDevTools([{detached: true}]);
    
    window.on('closed', ()=>{
        window=null;
    })
}
//Run create window function
app.on('ready',createWindow);

//Quit when all windows are closed
app.on('window-all-closed', ()=>{
   if(process.platform !=='darwin'){
       app.quit();
   } 
});