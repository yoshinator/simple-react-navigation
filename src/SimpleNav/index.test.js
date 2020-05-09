import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleNav } from './'

describe('SimpleNav', () => {

  it("Throws an error if no links are passed", () => {
    expect(() => shallow(<SimpleNav />)).toThrowError();
  });
  
  it.skip("Does not throw an error when links are passed in", () => {
    expect(() => shallow(<SimpleNav links={[""]}/>)).not.toThrowError();
  });

  it('renders the logo text if logo text' , ()=> {
    const logo = {text: "LOGO"};
    const links = [""]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav logo={logo} links={links}/>, container)
    expect(container.textContent).toMatch('LOGO')
  });

  it('renders the word LogoHere if no logo is passed', () => {
    const links = [""]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav links={links} />, container)
    expect(container.textContent).toMatch('LogoHere')
  });

  it('renders a logo image if logo image exists', () =>{
    const logo = { img: {src: "http://www.example.com"} };
    const links = [""]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav logo={logo} links={links}/>, container);
    expect(container.getElementsByTagName('img')[0].src).toMatch('http://www.example.com');
  });

  it('adds alt tag if img.alt exist', ()=> {
    const logo = { img: { src: "http://www.example.com", alt: "example" } };
    const links = [""]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav logo={logo} links={links}/>, container);
    expect(container.getElementsByTagName('img')[0].alt).toMatch('example');
  });

  it("Has the right amount of links", ()=> {
    const links = ["","",""]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav links={links} />, container);
    expect(container.getElementsByTagName('a').length).toBe(3);
  });

  it("Has the right amount of link", () => {
    const links = [""]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav links={links} />, container);
    expect(container.getElementsByTagName('a').length).toBe(1);
  });

  it("Has an array of link objects with an href key",  () => {
    const links = [{href: "/home"}]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav links={links} />, container);
    expect(container.getElementsByTagName('a')[0].href).toBe("http://localhost/home");
  });

  it('Has an array of link objects with a content key', () => {
    const links = [{content: "Home"}]
    const container = document.createElement('div');
    ReactDOM.render(<SimpleNav links={links} />, container);
    expect(container.getElementsByTagName('a')[0].textContent).toMatch("Home");
  })
})