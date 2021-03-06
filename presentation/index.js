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
  Link,
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
  applause: require("../assets/applause.gif"),
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
            <ListItem>Background</ListItem>
            <ListItem>TypeScript Benefits</ListItem>
            <ListItem>What we did!</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes={`<ul>
          <li>Talk about moving from ruby to node</li>
          <li>Love JS</li>
        </ul>`}
        >
          <Heading size={6} textColor="primary" caps>From Ruby to Node + React</Heading>
          <Image src={images.happyclap} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <Heading size={6} textColor="primary" caps>Moving to node</Heading>
            <ListItem>Lots of page views, SEO, etc</ListItem>
            <ListItem>V-Dom, RenderToString</ListItem>
            <ListItem>Universal rendering</ListItem>
            <ListItem>We settled on Express + React</ListItem>
            <ListItem>Built many micro web apps</ListItem>
            <ListItem>Started to see some issues...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Realizing your app is unmaintainable</Heading>
          <Image src={images.tsunami} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <Heading size={6} textColor="primary" caps>Some issues we ran in to</Heading>
            <ListItem>Dependencies across applications</ListItem>
            <ListItem>Big react components</ListItem>
            <ListItem>Dealing with API issues</ListItem>
            <ListItem>Wasn't in to TS at first</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes={`
        <li>Can use TypeScript instead of Babel</li>
        <li>// @tscheck</li>
        `}
        >
          <Heading size={6} textColor="primary" caps>When I realized typescript is just JavaScript</Heading>
          <Image src={images.beardslap} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>
            <Link
              textColor="primary"
              href="https://blog.acolyer.org/2017/09/19/to-type-or-not-to-type-quantifying-detectable-bugs-in-javascript/">
              15% of bugs *could* be caught...
            </Link>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>TypeChecks FTW</Heading>
          <CodePane
            source={`
            function showPrice(price) {
              return price.toFixed();
            }

            //...

            showPrice("4.44");
            `}
            lang="javascript"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>#fail</Heading>
          <Image
            src="http://d.pr/i/APfHY4+"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>TypeChecks FTW</Heading>
          <CodePane
            source={`
            function showPrice(price: number) {
              return price.toFixed();
            }

            //...

            showPrice("4.44"); // Argument of type '"4.44"' is not assignable to parameter of type 'number'.
            `}
            lang="javascript"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>#blessed</Heading>
          <Image
            src="http://d.pr/i/J6PTyP+"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Spot the mistake...</Heading>
          <CodePane
            source={require("raw-loader!../assets/jsclass.example")}
            lang="javascript"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Types to the rescue!</Heading>
          <CodePane
            source={require("raw-loader!../assets/tsclass.example")}
            lang="javascript"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>😎</Heading>
          <Image
            src="http://d.pr/i/9StLeE+"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>ts-check to the rescue!</Heading>
          <CodePane
            source={require("raw-loader!../assets/tscheck.example")}
            lang="javascript"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Travel Agent
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={3} fit bold>
            <a
              style={{ color: "white" }}
              href="https://github.com/lonelyplanet/travel-agent"
            >
              https://github.com/lonelyplanet/travel-agent
            </a>
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Backpack UI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            <a
              style={{ color: "white" }}
              href="https://github.com/lonelyplanet/backpack-ui"
            >
              https://github.com/lonelyplanet/backpack-ui
            </a>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <Heading size={6} textColor="primary" caps>Other things</Heading>
            <ListItem><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/">DefinitelyTyped</a></ListItem>
            <ListItem><a href="https://palantir.github.io/tslint/">tslint</a></ListItem>
            <ListItem><a href="https://github.com/basarat/typescript-book">basarat/typescript-book</a></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Thanks!</Heading>
          <Image src={images.applause} />
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Follow me on the tweets <a href="https://twitter.com/jcreamer898">@jcreamer898</a>
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Build cool stuff too... <a href="https://www.lonelyplanet.com/jobs">https://www.lonelyplanet.com/jobs</a>
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
Types will ensure you have a stable, and maintainable app with less unit tests, and React rendering makes it easy to share components between the front end and the back end.

Building a node.js app with express is easy.
However, once you get ready to ship a larger scale express app to production, it can get a bit more tedious.
By adding in TypeScript, you can build in some safety measures to protect against runtime bugs.
Plus, because of the type safety, you can write less tests and more application code.
Throwing React into the mix gives you the ability to build server side and client side "templates" with the same component model.
In this talk, we'll cover building a production ready express app with TypesScript and React, working with middleware, and making sure you're ready for launching your app into production.



*/
