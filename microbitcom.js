var portName = 'COM7'; //定义串口名
var serialPort;
var SerialPort = require('serialport');
var EOS = require('./eosClient.js');
var eos = EOS();

function report_scan(devid, uid, time) {

  (async () => {
    const result = await eos.transaction({
      actions : [{
        account :  'sschaintest1',
        name : 'status',
        authorization: [{
          actor: 'sschaintest2',
          permission : 'active',
        }],
        data: {
          account :  'sschaintest2',
          content: uid,
        },
     }]
   }, {
     blocksBehind : 3,
     expireSeconds : 30,
   });
   console.dir(result);
  })();

}


if(serialPort){
serialPort.close();
}

serialPort = new SerialPort( //设置串口属性
"COM7", {
  baudRate: 115200,  //波特率
  dataBits: 8,    //数据位
  parity: 'none',  //奇偶校验
  stopBits: 1,  //停止位
  flowControl: false ,
  autoOpen:false //不自动打开
}, false);

serialPort.open(function(error){
  if(error){
    console.log("打开端口"+portName+"错误："+error);
  }else{ 
  console.log("打开端口成功，正在监听数据中");
    serialPort.on('data',function(data){
	if (data.toString)
	report_scan("sschaintest1", data.toString('ascii'), "1234");
    })
  }
});
