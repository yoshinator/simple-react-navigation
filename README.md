This is a simple responsive react navigation component. The reason for building this is component is because as someone that teaches React I see a lot of my students going for a css library just to add a responsive nav bar to their projects. This aims to to cut back on unnecessary bloat when all you need is a nav bar.
## Available Scripts

In the project directory, you can run:

### `yarn start` || `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` || `npm test`

Launches the test runner in the interactive watch mode.<br />

## How To Use Simple Nav

`import { SimpleNav } from 'simple-nostate-responsive-navigation'`

and use it where you need it. 
## You MUST pass it an array of link objects even if they don't go anywhere
### If you don't an error will be thrown in your application.
```
<SimpleNav links={[
            { href: "#", content: "Home" }, 
            { href: "#", content: "About" }, 
            { href: "#", content: "Blog" }, 
            { href: "#", content: "Contact" }
          ]}
/>
```
You can also pass it optional colors or logo props. 

logo props is an object keys must be text and img
img is another object with keys src and alt. img object is optional. alt key is optional
```
logo={{ text: "Logo" , img: {src: "//placehold.it/100x50"}}} 
```

colors props 
you can set up to four colors 
background sets the background of the nav bar
foreground sets the hover states
links sets the link colors 
hamburger sets the hamburger icon color
```
colors={{
        background: "green",
        foreground: "yellow",
        links: "blue",
        hamburger: "pink"
      }}
```

## and example with all options 

```jsx
<SimpleNav links={[
            { href: "#", content: "Home" }, 
            { href: "#", content: "About" }, 
            { href: "#", content: "Blog" }, 
            { href: "#", content: "Contact" }
          ]}
          
          logo={{ 
            text: "Logo" ,
             img: 
                  {
                    src: "//placehold.it/100x50" 
                    alt: "Some alt text"
                  }
          }} 
          colors={{
                  background: "green",
                  foreground: "yellow",
                  links: "blue",
                  hamburger: "pink"
          }}
/>
```

