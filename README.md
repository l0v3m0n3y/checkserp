# checkserp
JavaScript library for checkserp.com
# main
```js
async function main(){
    const {checkserp} = require('./checkserp');
    const whois= new checkserp();
    let req=await whois.site_ip("host")
    console.log(req)
}
main()
```
