class checkserp{
    constructor(){
        this.api = "https://checkserp.com/seo-extension"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Connection": "Keep-Alive","Content-Type":"application/json; charset=UTF-8","x-requested-with": "XMLHttpRequest"}
    }
    async site_ip(host){
        let req=await fetch(`${this.api}/iplookup?host=${host}&b=e&l=ru&sig=0a70c9607d985962a01d760cee80b452&v=2.3.0`,{method:"POST",headers: this.headers});
        return req.json();
    }
}
module.exports = {checkserp};
