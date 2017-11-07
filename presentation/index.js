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
  Image,
  CodePane,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  lp: require("../assets/lonelyplanet_bw.png"),
  family: require("../assets/family.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#267AC2",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Express Yourself with TypeScript and React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            ...aka building scalable, less-buggy web apps
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>whoami</Heading>
          <Image
            width={400}
            src={images.family}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>whoami</Heading>

          <CodePane
            source={require("raw-loader!../assets/mejson.example")}
            lang="javascript"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>#talkgoals</Heading>
          <List>
            <ListItem>Talk about installing all the npm things</ListItem>
            <ListItem>Make some stuff work</ListItem>
            <ListItem>Talk about it some more</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Install all the things</Heading>
          <CodePane
            lang="bash"
          >
          npm i -S typescript express @types/express
          </CodePane>
        </Slide>
      </Deck>
    );
  }
}

/*
 1. Introduction
 2. You should learn about...

Express has long been a tool for building high performance node.js applications.
caffTypes will ensure you have a stable, and maintainable app with less unit tests, and React rendering makes it easy to share components between the front end and the back end.

Building a node.js app with express is easy.
However, once you get ready to ship a larger scale express app to production, it can get a bit more tedious.
By adding in TypeScript, you can build in some safety measures to protect against runtime bugs.
Plus, because of the type safety, you can write less tests and more application code.
Throwing React into the mix gives you the ability to build server side and client side "templates" with the same component model.
In this talk, we'll cover building a production ready express app with TypesScript and React, working with middleware, and making sure you're ready for launching your app into production.
*/
