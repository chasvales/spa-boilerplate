class Routes {
   constructor(){
      this.hashRoute = window.location.hash;
      this.currentRoute = this.hashRoute.split('/');
      this.template = this.currentRoute[1];
      this.subTemplate = this.currentRoute[2];
      this.id = this.currentRoute[3];
   }
   evaluate(){
      switch(this.template){
         case "home":
            templateHTML = new HomePage();
         break;
      }
      return templateHTML.render();
   }
}
