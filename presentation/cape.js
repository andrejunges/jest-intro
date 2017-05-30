import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="#000">
          JEST
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          open the presentation/index.js file to get started
        </Text>
      </Slide>
    );
  }
}

// export default () => (
//   <Slide transition={["zoom"]} bgColor="primary">
//     <Heading size={1} fit caps lineHeight={1} textColor="#000">
//       JEST
//     </Heading>
//     <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
//       open the presentation/index.js file to get started
//     </Text>
//   </Slide>
// );
