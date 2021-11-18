import { LayoutContainer, ActionButton } from "decd-design-system";
import React from "react";

function App() {
  return (
    <div className="App">
      <LayoutContainer>
        <h1>Application Components</h1>
        <br />
        <h2>Layout Container with a Paragraph Tag</h2>
        <LayoutContainer>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </LayoutContainer>
        <br />
        <br />
        <h2>Action Button Primary</h2>
        <ActionButton id="button-primary">Default Button</ActionButton>
        <br />
        <h2>Action Button Secondary</h2>
        <ActionButton id="button-secondary" secondary>
          Secondary Button
        </ActionButton>
        <br />
        <h2>Action Button Tertiary</h2>
        <ActionButton id="button-tertiary" tertiary>
          Tertiary Button
        </ActionButton>
      </LayoutContainer>
    </div>
  );
}

export default App;
