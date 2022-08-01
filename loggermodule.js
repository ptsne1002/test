
function logger(log, level){
    var d = new Date()
    var day_format = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
    console.log(`[${day_format}][${level}]: ${log}`)
}

export default logger;