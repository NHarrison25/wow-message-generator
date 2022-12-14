const classes = [];
const ratings = ['the best', 'great', 'good', 'average', 'bad', 'terrible', 'the worst'];

//Class factory function
const createClass = (name, feature) => {
  return {
    _name: name,
    _feature: feature,
    set name(str) {
      if (typeof str === 'string') {
        this._name = str;
      } else {
        return 'Class name must be a string';
      }
    },
    get name() {
      return this._name;
    },
    set feature(str) {
      if (typeof str === 'string') {
        this._feature = str;
      } else {
        return 'Class feature must be a string';
      }
    },
    get feature() {
      return this._feature;
    }
  }
}

//Create base list of classes
classes.push(createClass('Warrior', 'rage'));
classes.push(createClass('Paladin', 'shield'));
classes.push(createClass('Hunter', 'bow'));
classes.push(createClass('Rogue', 'daggers'));
classes.push(createClass('Priest', 'faith in The Light (or The Void!)'));
classes.push(createClass('Shaman', 'connection to the elements'));
classes.push(createClass('Mage', 'knowledge of the arcane'));
classes.push(createClass('Warlock', 'control over demons'));
classes.push(createClass('Monk', 'skill in martial arts'));
classes.push(createClass('Druid', 'connection with nature'));
classes.push(createClass('Demon Hunter', 'sacrifice'));
classes.push(createClass('Death Knight', 'saronite armor and unending resolve'));
classes.push(createClass('Evoker', 'draconic powers'));

//Get random class and rating
const randomClass = classes[Math.floor(Math.random() * classes.length)];
const randomRating = ratings[Math.floor(Math.random() * ratings.length)];

//Format output
const formatMessage = () => {
  console.log(`Your class is '${randomClass.name}'!`);
  console.log(`As a ${randomClass.name}, you are best known for your ${randomClass.feature}!`);
  console.log(`In the upcoming raid tier, there is no doubt that ${randomClass.name}s will be ${randomRating}.`)
}

formatMessage();
