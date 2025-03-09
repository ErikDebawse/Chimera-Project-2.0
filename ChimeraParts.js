//constructor defaults to basic human
class BodyPart {
    constructor(part) {
        this.name  = part.name;
        this.type = part.type;
        this.url = part.url;
        this.mask = part.mask;
    }
}
export { BodyPart };