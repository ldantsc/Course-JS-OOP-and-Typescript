function Obj(id, name) {
    this.id = id;
    this.name = name;
  }
  
  function Config(id, ip) {
    this.id = id;
    this.ip = ip;
  }
  
  function isInstance(obj1, obj2) {
    let instance = obj1 instanceof obj2;
    if (instance) {
        console.log("É uma instância")
    } else {
        console.log("Não é uma instância")
    }
  }
  
  let user = new Obj(1, "user")
  let ipuser = new Config(1, 12345578) 
  
  isInstance(user, Obj)
  isInstance(ipuser, Obj)