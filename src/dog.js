// @flow
// the above tells Flow that we want this file to be type-checked
class Dog {
  name: string
  // why do I have to annotate both?
  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wah wah, I am ${this.name}`
  }
}

export default Dog
