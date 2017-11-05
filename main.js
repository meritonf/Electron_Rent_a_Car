const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window;

function createWindow(){
    window = new BrowserWindow({width:800, height: 600,icon:__dirname+'/img/sys.png'});
    
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes:true
    }));
    
    //open devtools
    window.webContents.openDevTools();
    
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

