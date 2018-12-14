export default class Song{
    constructor({id,mid,singer,name,album,duration,img,url}){
        this.id=id
        this.mid=mid
        this.singer=singer
        this.name=name
        this.album=album
        this.duration=duration
        this.img=img
        this.url=url
    }
}
export function createSong(musicData){
    return new Song({
        id:musicData.songid,
        mid:musicData.songmid,
        singer:filterSinger(musicData.singer),
        name:musicData.songname,
        album:musicData.albumname,
        duration:musicData.interval,
        img:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        // url:`http://121.51.1.251/amobile.music.tc.qq.com/C400${musicData.songmid}.m4a?sha=271CEABBA6C10BBA9A3DAE4F6F392D45E3346AC0&guid=2143119300&vkey=E73C5355E4E082B219F0FFAD96338F437C3ECABD59F485786CF1DCC2BDC9828A30E05FD1220EE40F934FCF39A7C5B806F30B0E768E0EFAAB&uin=0&fromtag=38&ocid=2945611108`,
        url:`http://36.104.129.14/amobile.music.tc.qq.com/C400${musicData.songmid}.m4a?guid=2143119300&vkey=EAA9DC544C82D8CF8A14BE51941E8EDF9A3CA17CE20473DC66B986535D1BB57E08E7E2774B09D943DA783D822327AB8AF8D2AF24D1A146BC&uin=0&fromtag=38`
       
    })
}
function filterSinger(singer){
     let ret=[];
     if(!singer){
         return ''
     }
     singer.forEach(item=>{
         ret.push(item.name)
     })
     return ret.join('/')
}