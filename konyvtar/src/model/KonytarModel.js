class KonyvtarModel {
  #lista = [];
  constructor() {
    this.#lista = [
      {
        konyvcim: "Joskagyerekmostpofazzal",
        szerzo: "idegbetegneni",
        ar: 99999,
      },
      {
        konyvcim: "CBA titka",
        szerzo: "Kasszás Erzsi",
        ar: 6969,
      },
      {
        konyvcim: "A világ legjobb rappere",
        szerzo: "MC ISTI",
        ar: 100000,
      },
      {
        konyvcim: "SECURITY",
        szerzo: "Adam Security",
        ar: 2000,
      },
      {
        konyvcim: "Hogyan kell forkolni?",
        szerzo: "Somogyvári Márton",
        ar: 1000000,
      },
    ];
  }
  getLista() {
    return [...this.#lista];
  }
}

export default KonyvtarModel;
