import {Userinfo} from './userinfo.js';

let info = new Userinfo();

async function t1(){
    console.log(info.browserInfo());
    console.log(info.dataCookies());
    console.log(info.dataStorage());
    console.log(info.sizeScreen());
    console.log(await info.position());
    console.log(await info.battery());
    console.log(await info.ip());
}

t1();
