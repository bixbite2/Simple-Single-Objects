export class Player {
    constructor(name, gclass = 'classless', gift) {
        this._name = name;
        if (gclass.toLowerCase() !== 'mage' && gclass.toLowerCase() !== 'warrior' && gclass.toLowerCase() !== 'archer') {
            this._gclass = gclass;
        }
    }
}