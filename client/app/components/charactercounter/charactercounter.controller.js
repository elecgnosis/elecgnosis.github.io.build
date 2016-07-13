class CharacterCounterController {

  constructor() {
    this.name = 'charactercounter';
    this.characterInput = '';
    this.characterCount = 0
  }

  updateCharacterCount() {
    console.log('Character Count: ' + this.characterCount);
  };

  get internalCharacterCount() {
    return this.characterInput.length;
  }

}

export default CharacterCounterController;
