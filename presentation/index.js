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
  family: require("../assets/family.jpg"),
  happyclap: require("../assets/happyclap.gif"),
  tsunami: require("../assets/tsunami.gif"),
  beardslap: require("../assets/beardslap.gif"),
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
            <ListItem>From Ruby to Node + React</ListItem>
            <ListItem>What we learned</ListItem>
            <ListItem>Why TypeScript</ListItem>
            <ListItem>Where we're going</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes={`
          Talk about moving from ruby to node, how long it took
          We settled on Express + React
          Universal rendering
        `}>
          <Heading size={6} textColor="primary" caps>From Ruby to Node + React</Heading>
          <Image src={images.happyclap} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Realizing your app is unmaintainable</Heading>
          <Image src={images.tsunami} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>When I realized typescript is just JavaScript</Heading>
          <Image src={images.beardslap} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Travel Agent 
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            <a
              style={{ color: "white" }}
              href="https://github.com/lonelyplanet/travel-agent"
            >
              https://github.com/lonelyplanet/travel-agent
            </a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}

/*
 1. Introduction
 2. You should learn about...
 1. TypeScript intro
 
  We wanted to build node and react apps. Been through several iterations. 

 1. @lonelyplanet/travel-agent

Express has long been a tool for building high performance node.js applications.
caffTypes will ensure you have a stable, and maintainable app with less unit tests, and React rendering makes it easy to share components between the front end and the back end.

Building a node.js app with express is easy.
However, once you get ready to ship a larger scale express app to production, it can get a bit more tedious.
By adding in TypeScript, you can build in some safety measures to protect against runtime bugs.
Plus, because of the type safety, you can write less tests and more application code.
Throwing React into the mix gives you the ability to build server side and client side "templates" with the same component model.
In this talk, we'll cover building a production ready express app with TypesScript and React, working with middleware, and making sure you're ready for launching your app into production.



*/