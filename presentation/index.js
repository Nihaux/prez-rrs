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
  Fit,
  Layout,
  Fill,
  ComponentPlayground,
  CodePane,
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

const AppearListItem = (props) => (
  <Appear><ListItem textSize={25}>{props.children}</ListItem></Appear>
);

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
            Les fonctions fléchées
          </Heading>
          <Text margin="10px 0 0" size={6} bold>
            (Arrow function)
          </Text>
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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={1}>
            Les classes
          </Heading>
        </Slide>
        <CodeSlide
          fill
          lang="js"
          code={require("raw-loader!../assets/code/class.js")}
          ranges={[
            {
              loc: [0,0],
              title: 'Sugar sugar',
            },
            {
              loc: [0,5],
              note: 'mot clef "constructor"',
            },
            {
              loc: [6,7],
              note: 'extends pour l\'héritage',
            },
            {
              loc: [8,9],
              note: 'super pour appeler la classe parente',
            },
            {
              loc: [6, 16],
            },
          ]}
        />
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} lineHeight={1} textColor="tertiary">
            Affectation par décomposition
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <BlockQuote>
            <Quote textSize={20}>
              L'affectation par décomposition (destructuring en anglais)<br/>
              est une expression JavaScript<br/>
              qui permet d'extraire des données d'un tableau ou d'un objet grâce à une syntaxe<br/>
              dont la forme ressemble à la structure du tableau ou de l'objet.<br/>
            </Quote>
            <Cite>MDN</Cite>
          </BlockQuote>
        </Slide>
        <CodeSlide
          fill
          lang="js"
          code={require("raw-loader!../assets/code/destruct.js")}
          ranges={[
            {
              loc: [0,10],
            },
            {
              loc: [11, 12],
            },
            {
              loc: [13,14],
              note: '=> 1',
            },
            {
              loc: [15,16],
              note: ' => Vous ne devinerez jamais ce que[...]',
            },
            {
              loc: [17,18],
              note: '=> 4',
            },
            {
              loc: [19, 20],
              note: '=> undefined',
            },
          ]}
        />
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            REDUX
          </Heading>
          <BlockQuote textColor="secondary">
            <Quote textSize={20} textColor="secondary">
              Redux is a predictable state container for JavaScript apps.
            </Quote>
            <Cite>redux.js.org</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <List>
            <ListItem>State</ListItem>
            <ListItem>Actions</ListItem>
            <ListItem>Reducers</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>Store: objet unique qui contient le State</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/redux-store.js")}
            margin="20"
          >
          </CodePane>
        </Slide>
        <Slide>
          <Heading size={4}>State: l'Etat de l'application</Heading>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/redux-state.js")}
              margin="20"
            >
            </CodePane>
          </Appear>
          <AppearListItem>Stocké dans le store</AppearListItem>
          <AppearListItem>Détient la vérité</AppearListItem>
          <AppearListItem>Le seul à détenir la vérité</AppearListItem>
          <AppearListItem>On ne peut pas le modifier directement!</AppearListItem>
        </Slide>
        <Slide>
          <Heading size={4}>Action: description d'un évènement</Heading>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/redux-action.js")}
              margin="20"
            >
            </CodePane>
          </Appear>
          <AppearListItem>Un objet javascript</AppearListItem>
          <AppearListItem>Décrit un évènement survenu dans l'application (click, clavier, ...)</AppearListItem>
          <AppearListItem>Est dispatché dans le store</AppearListItem>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/redux-dispatch.js")}
              margin="20"
            >
            </CodePane>
          </Appear>
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
