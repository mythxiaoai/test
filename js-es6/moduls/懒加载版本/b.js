let api;
  api =  {
    async makeupInit(){
      return (await import("./a.js")).makeup;
    }
  }

export {api};