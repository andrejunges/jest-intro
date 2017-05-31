import React from "react";
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Image,
  Layout,
  List,
  ListItem,
  Heading,
  Slide,
  Text
} from "spectacle";

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
  jestLogo: require("../assets/jest-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    const matchesLeft = [
      ".toBe",
      ".toEqual",
      ".not.toBe",
      ".toBeNull",
      ".toBeUndefined",
      ".toBeDefined",
      ".toBeTruthy",
      ".toBeFalsy"
    ];
    const matchesNumber = [".toBeGreaterThan", ".toBeLessThan"];
    const matchesString = [".not.toMatch", ".toMatch"];
    const matchesArray = [".toContain"];
    const matchesExceptions = [".toThrow"];

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.jestLogo} />
          <Heading size={1} caps lineHeight={1} textColor="#000">JEST</Heading>
          <Text margin="20px 0 0 0" textColor="tertiary" size={3} bold>
            André Luís Junges <br />
            Leonardo pacheco
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Why JEST?</Heading>
          <List>
            <Appear><ListItem>Easy to setup</ListItem></Appear>
            <Appear><ListItem>Watch mode</ListItem></Appear>
            <Appear><ListItem>Coverage out of the box</ListItem></Appear>
            <Appear><ListItem>Support for promise and async/await</ListItem></Appear>
            <Appear><ListItem>Work with Babel</ListItem></Appear>
            <Appear><ListItem>Run tests in parallel</ListItem></Appear>
            <Appear><ListItem>Snapshot testing</ListItem></Appear>
            <Appear><ListItem>Works everywhere (backend, frontend, react-native)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} margin="0 0 50px 0" textColor="primary" caps>Matches</Heading>
          <Layout>
            <Fill>
              {matchesLeft.map((match, i) =>
                <div key={i} style={{ width: "auto", textAlign: "left" }}>
                  <Code style={{ fontSize: 20 }}>{match}</Code>
                </div>
              )}
            </Fill>
            <Fill>
              <Text margin="10px 0 0" style={{ textAlign: "left" }} textSize={22} textColor="primary" caps>NUMBERS</Text>
              {matchesNumber.map((match, i) =>
                <div key={i} style={{ width: "auto", textAlign: "left" }}>
                  <Code style={{ fontSize: 20 }}>{match}</Code>
                </div>
              )}

              <Text margin="10px 0 0" style={{ textAlign: "left" }} textSize={22} textColor="primary" caps>STRINGS</Text>
              {matchesString.map((match, i) =>
                <div key={i} style={{ width: "auto", textAlign: "left" }}>
                  <Code style={{ fontSize: 20 }}>{match}</Code>
                </div>
              )}

              <Text margin="10px 0 0" style={{ textAlign: "left" }} textSize={22} textColor="primary" caps>ARRAYS</Text>
              {matchesArray.map((match, i) =>
                <div key={i} style={{ width: "auto", textAlign: "left" }}>
                  <Code style={{ fontSize: 20 }}>{match}</Code>
                </div>
              )}

              <Text margin="10px 0 0" style={{ textAlign: "left" }} textSize={22} textColor="primary" caps>EXCEPTIONS</Text>
              {matchesExceptions.map((match, i) =>
                <div key={i} style={{ width: "auto", textAlign: "left" }}>
                  <Code style={{ fontSize: 20 }}>{match}</Code>
                </div>
              )}
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>SETUP</Heading>

          <Text margin="40px 0 10px 0" textSize={22} textColor="primary" caps>INSTALLING</Text>
          <CodePane>yarn add --dev jest</CodePane>

          <Text margin="40px 0 10px 0" textSize={22} textColor="primary" caps>SETTING UP PACKAGE.JSON</Text>
          <CodePane>{`{ "test": "jest --coverage", "test:watch": "jest --watch" }`}</CodePane>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="40px 0 10px 0" textSize={22} textColor="primary" caps>FIRST TEST</Text>
          <Layout>
            <Fill>
              <Text textSize={22} textColor="accent">sum.js</Text>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/sum.js")}
                style={{ borderRightColor: "#03A9FC", borderRightWidth: 1, borderRightStyle: "solid" }}
              />
            </Fill>
            <Fill>
              <Text textSize={22} textColor="accent">sum.test.js</Text>
              <CodePane lang="javascript" source={require("raw-loader!../assets/code/sum.test.js")} />
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="40px 0 10px 0" textSize={22} textColor="primary" caps>ASYNC SUPPORT</Text>
          <Layout>
            <Fill>
              <Text textSize={22} textColor="accent">get_city.js</Text>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/get_city.js")}
                style={{ borderRightColor: "#03A9FC", borderRightWidth: 1, borderRightStyle: "solid" }}
              />
            </Fill>
            <Fill>
              <Text textSize={22} textColor="accent">get_city.test.js</Text>
              <CodePane lang="javascript" source={require("raw-loader!../assets/code/get_city.test.js")} />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="-50px 0 10px 0" textSize={32} textColor="primary" caps>SNAPSHOT TESTING -> CODE</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/link.react.js")}
            style={{ fontSize: 10 }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="-50px 0 10px 0" textSize={32} textColor="primary" caps>SNAPSHOT TESTING -> TEST</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/link.react.test.js")}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="-50px 0 10px 0" textSize={32} textColor="primary" caps>SNAPSHOT TESTING -> SNAPSHOT</Text>
          <CodePane
            source={require("raw-loader!../assets/code/__snapshots__/link.react.test.js.snap")}
          />
        </Slide>
        {/* <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
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
        </Slide> */}
      </Deck>
    );
  }
}
