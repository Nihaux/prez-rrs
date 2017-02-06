// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Layout,
  Fill,
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);


// https://www.materialpalette.com/blue/pink
const background = {
  dark: "#303F9F",
  default: "#3F51B5",
  light: "#C5CAE9",
  accent: "#FF5252",
};
const text = {
  primary: "#FFFFFF",
  secondary: "#757575",
  primaryBis: "#212121",
};
const border = "#BDBDBD";

const theme = createTheme({
  primary: background.default,
  secondary: background.light,
  tertiary: text.primary,
  quartenary: background.accent,
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <CodeSlide
          fill
          lang="js"
          code={require("raw-loader!../assets/code/es5function.js.example")}
          ranges={[
            { loc: [0,1] },
            { loc: [1,2] },
            { loc: [2,3] },
          ]}
        />
        <Slide transition={["zoom"]}>
          <Heading size={1} fit caps lineHeight={1}>
            Développer une SPA
          </Heading>
          <Heading size={2} fit caps>
            Avec l'écosystème javascript: Redux ⇔ React ⇔ Redux-saga
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={1}>
            ECMAScript 6
          </Heading>
          <Appear>
            <Text margin="10px 0 0" size={6} bold>
              EcmaQuoi ?
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <List>
            <ListItem>Spécification</ListItem>
            <Appear><ListItem>Javascript, Jscript, ActionScript</ListItem></Appear>
            <Appear><ListItem>Interprété par un moteur</ListItem></Appear>
            <Appear><ListItem>(Spidermonkey, V8, Tamarin, ...)</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4}>Les arrow functions</Heading>
          <Layout>
            <Fill>
              <Heading>ES5</Heading>
            </Fill>
            <Fill>
              <Heading>ES6</Heading>
              <CodeSlide
                transition={[]}
                lang="js"
                code={require("raw-loader!../assets/code/es6function.js.example")}
                ranges={[
                  { loc: [0,1] },
                  { loc: [1,2] },
                  { loc: [2,3] },
                ]}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
