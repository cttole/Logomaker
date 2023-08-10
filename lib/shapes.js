class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('This method should be implemented by a specific shape class');
    }
  }
  
  class Triangle {
    constructor(color) {
      this.shape = new Shape(color);
    }
  
    setColor(color) {
      this.shape.setColor(color);
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shape.color}" />`;
    }
  }
  
  class Square {
    constructor(color) {
      this.shape = new Shape(color);
    }
  
    setColor(color) {
      this.shape.setColor(color);
    }
  
    render() {
      return `<rect x="10" y="10" width="30" height="30" fill="${this.shape.color}" />`;
    }
  }
  
  class Circle {
    constructor(color) {
      this.shape = new Shape(color);
    }
  
    setColor(color) {
      this.shape.setColor(color);
    }
  
    render() {
      return `<circle cx="25" cy="75" r="20" fill="${this.shape.color}" />`;
    }
  }
  
  module.exports = { Triangle, Square, Circle };
  