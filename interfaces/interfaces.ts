interface Reportable {
  summary(): string
}

const oldCivic = {
  name:'civic',
  year:2000,
  broken:true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const drink = {
  color : 'brown',
  carbanoted : true,
  sugar : 40,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar` 
  }
}

const printSummary = (vehicule: Reportable) : void => {
console.log(vehicule.summary())

};

printSummary(oldCivic)
printSummary(drink)