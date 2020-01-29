简介：

在原作者的eosjs-startup修改了若干内容，使得其可以用于sensorschain的开发。

--------------------------------------------
安装说明：（win10）

1.首先安装nodejs和npm，在命令行下输入node -v 和npm -v ，可以显示正常版本号（我用的是nodejs，12版本，和npm，6版本）

2.安装serialport，git

3.git clone https://github.com/duoduosys/eosjs-startup.git

4.在目录下安装eosjs，

npm i eosjs

5.测试。运行

node microbitgetactions.js

有正确显示即可。


--------------------------------------------
第一种使用方法：配合microbit使用。

基本原理与流程：

1.microbit输出串口信息到电脑，

2.microbitcom.js用于将microbit发出的信息传输到区块链上面

ps：需要将COM7修改为你自己的串口名称。在设备管理器里面的端口（com和lpt里面可以看到）

3.上传成功后，，通过microbitgetactions.js用于显示刚才发送的信息是否成功（上面显示的小时加8为北京时间）

---------------------------------------------
特别说明：

1.原始版本版权归原作者所有，其中cleos部分、环境配置部分和eos钱包部分的问题请向原作者询问，合约方面的问题可以问我。其他问题一概不回复。

3.sensorschain仅提供给朵朵社区成员及物联网开发者使用。少量的直接申请即可，量大的，可以用朵朵资产1：1的单向兑换。

（资产位于bts，资产名称为DUODUO，谨防假冒）

4.申请sensorschain的账户说明：

发需求给59974015@qq.com即可，我会发送一个有资源的账户，并连同公钥和私钥一并发给你。
或者自建一对公钥私钥，然后发公钥给我，我会发一个基于该公钥的账户给你。

5.运行自己的账户需要将自己的私钥覆盖keys.json的第二个私钥.然后将microbitcom.js里面的sschaintest2修改为自己的账户名

---------------------------------------------

1.0版 2020年1月29日，修改基本参数，修改说明文档，增加microbitcom.js，microbitgetactions.js

