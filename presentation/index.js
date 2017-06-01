import React from "react";
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Image,
  Link,
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
  testFailed: require("../assets/test_failed.jpg"),
  jestLogo: require("../assets/jest-logo.svg"),
};

preloader(images);

const theme = createTheme({
  primary: "#333",
  secondary: "#FFF",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const borderRight = { borderRightColor: "#FFF", borderRightWidth: 1, borderRightStyle: "solid" };
const codePaneMedium = { fontSize: 16 };

const getMatchText = text =>
  <Text caps textColor="secondary" style={{ textAlign: "left", fontSize: 22, margin: "10px 0 0" }}>
    {text}
  </Text>;

const getMatchesCode = (match, i) =>
  <div key={i} style={{ width: "auto", textAlign: "left" }}>
    <Code style={{ fontSize: 20, color: "#ccc" }}>{match}</Code>
  </div>

export default class Presentation extends React.Component {
  render() {
    const features = [
      "Easy to setup",
      "Watch mode",
      "Coverage out of the box",
      "Support for promise and async/await",
      "Work with Babel",
      "Run tests in parallel",
      "Snapshot testing",
      "Works everywhere",
    ];
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
    const snapshotInfos = [
      "Make sure UI doesn't change unexpectedly",
      "Store serializable value for your React tree"
    ];

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide id="cape" transition={["zoom"]} bgColor="primary">
          <Image src={images.jestLogo} />
          <Heading size={1} caps lineHeight={1} textColor="secondary">JEST</Heading>
          <Text margin="20px 0 0 0" textColor="tertiary" size={3} bold>
            André Luís Junges <br />
            Leonardo Pacheco
          </Text>
        </Slide>

        <Slide id="features" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>Why JEST?</Heading>
          <List>
            {features.map((feature, i) =>
              <Appear key={i}>
                <ListItem>{feature}</ListItem>
              </Appear>
            )}
          </List>
        </Slide>

        <Slide id="matches" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 50px 0" caps>Matches</Heading>
          <Layout>
            <Fill>
              <Appear>
                <div>
                  {getMatchText("General")}
                  {matchesLeft.map(getMatchesCode)}
                </div>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <div>
                  {getMatchText("Numbers")}
                  {matchesNumber.map(getMatchesCode)}
                </div>
              </Appear>

              <Appear>
                <div>
                  {getMatchText("String (Regex..)")}
                  {matchesString.map(getMatchesCode)}
                </div>
              </Appear>

              <Appear>
                <div>
                  {getMatchText("Arrays")}
                  {matchesArray.map(getMatchesCode)}
                </div>
              </Appear>

              <Appear>
                <div>
                  {getMatchText("Exceptions")}
                  {matchesExceptions.map(getMatchesCode)}
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide id="setup" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>SETUP</Heading>

          <Text margin="40px 0 10px 0" textSize={26} textColor="secondary" caps>INSTALLING</Text>
          <CodePane
            source="yarn add --dev jest"
            style={{ fontSize: 20 }}
          />

          <Text margin="40px 0 10px 0" textSize={26} textColor="secondary" caps>SETTING UP PACKAGE.JSON</Text>
          <CodePane
            source={require("raw-loader!../assets/code/packagejson-scripts")}
            style={{ fontSize: 20 }}
          />
        </Slide>

        <Slide id="first-test" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 50px 0" caps>FIRST TEST</Heading>
          <Layout>
            <Fill>
              <Text textSize={26} textColor="accent">sum.js</Text>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/sum.js")}
                style={{ ...borderRight, ...codePaneMedium }}
              />
            </Fill>
            <Fill>
              <Text textSize={26} textColor="accent">sum.test.js</Text>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/sum.test.js")}
                style={codePaneMedium}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide id="async-test" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 50px 0" caps>ASYNC SUPPORT</Heading>
          <Layout>
            <Fill>
              <Text textSize={26} textColor="accent">get_city.js</Text>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/get_city.js")}
                style={{ ...borderRight, ...codePaneMedium }}
              />
            </Fill>
            <Fill>
              <Text textSize={26} textColor="accent">get_city.test.js</Text>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/get_city.test.js")}
                style={codePaneMedium}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide id="snapshot-intro" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 50px 0" caps>SNAPSHOT TESTING</Heading>
          <List>
            {snapshotInfos.map((info, i) =>
              <Appear key={i}>
                <ListItem textSize="36">{info}</ListItem>
              </Appear>
            )}
          </List>
        </Slide>

        <Slide id="snapshot-code" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 30px 0" caps>SNAPSHOT TESTS</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/link.react.js")}
            style={{ fontSize: 13 }}
          />
        </Slide>

        <Slide id="snapshot-test" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 50px 0" caps>SNAPSHOT TESTS</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/link.react.test.js")}
            style={{ fontSize: 14 }}
          />
        </Slide>

        <Slide id="snapshot" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="-60px 0 10px 0" caps>SNAPSHOT</Heading>
          <CodePane
            source={require("raw-loader!../assets/code/__snapshots__/link.react.test.js.snap")}
          />
        </Slide>

        <Slide id="snapshot-comparison" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 30px 0" caps>TESTS COMPARISON</Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/without_snapshot.js")}
                style={{ ...borderRight, fontSize: 15 }}
              />
            </Fill>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw-loader!../assets/code/with_snapshot.js")}
                style={{ fontSize: 15 }}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide id="migrating" transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" margin="0 0 50px 0" caps>MIGRATING TO JEST</Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/skovhus/jest-codemods" target="_blank">jest-codemods</Link>
            </ListItem>
            <ListItem>
              <Link href="http://facebook.github.io/jest/" target="_blank">jest website</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
