export class NovoUsuario {
    constructor() {}
  
    LOCAL_STORAGE_KEY = 'usuarios';
  
    saveLocal(usuario) {

      let usuarios = localStorage.getItem(this.LOCAL_STORAGE_KEY);
     
      usuarios = usuarios ? JSON.parse(usuarios) : [];
  
      usuarios.push(usuario);
  
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(usuarios));
  
      return usuarios;
    }
}