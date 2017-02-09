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
  ComponentPlayground,
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
      <Deck transition={[]} transitionDuration={500} theme={theme}>
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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={1}>
            Les fonctions fléchées (arrow function)
          </Heading>
        </Slide>
        <CodeSlide
          fill
          lang="js"
          code={require("raw-loader!../assets/code/arrow.js")}
          ranges={[
            {
              loc: [0,0],
              title: 'Du sucre syntaxique',
            },
            {
              loc: [0,3],
              note: 'une function ES5',
            },
            {
              loc: [4,7],
              note: 'une arrow function ES6',
            },
            {
              loc: [8,11],
            },
            {
              loc: [12,13],
            },
            {
              loc: [14,19],
            },
            {
              loc: [20,21],
            },
          ]}
        />
        <CodeSlide
          fill
          lang="js"
          code={require("raw-loader!../assets/code/arrow-bind.js")}
          ranges={[
            {
              loc: [0,0],
              title: 'Le passage de this',
            },
            {
              loc: [0,9],
              note: 'un problème de scope',
            },
            {
              loc: [9,10],
              note: '"my name is"',
            },
            {
              loc: [11,20],
              note: 'contournement 1: bind a la mano',
            },
            {
              loc: [20,21],
              note: '"my name is fifi"',
            },
            {
              loc: [22,31],
              note: 'contournement 2: that = this',
            },
            {
              loc: [32,33],
              note: '"my name is fifi"',
            },
            {
              loc: [34,42],
              note: 'les arrow function à la rescousse !',
            },
            {
              loc: [43,44],
              note: '"my name is loulou" \\0/',
            },
          ]}
        />
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
