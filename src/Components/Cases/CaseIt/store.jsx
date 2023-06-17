class Store {
    #data = "";
    constructor() {
      this.#data = localStorage.getItem("key") || "";
    }
    /** @param {string} data */
    setData(data) {
      this.#data = data;
      localStorage.setItem("key", data);
    }
  
    get data() {
      return this.#data;
    }
  }
  
  const payKey = new Store();
  
  export { payKey };