import React from "react";
import { Label, Icon, Button } from "semantic-ui-react";

const PaperSizeButton = () => (
  <div className="json-resume-tool">
    <Label size="big" basic>
      <Icon name="file outline" />
      Change Paper Size
    </Label>
    <Button
      content="US Letter / A4"
      size="large"
      fluid
      onClick={() => alert('This should change paper size, but it will not do so yet!')}
      style={{
        display: "block",
        backgroundColor: "white",
        color: "black"
      }}
    />
  </div>
);

export default PaperSizeButton;
