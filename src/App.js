import React from "react";
import styled from "styled-components/macro";
import { Card } from "lib/Card";

const ThinnerCard = styled(Card)`
  width: 400px;
`;

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage="https://www.unsplash.it/500/300"
        thumbnailUrl="https://www.unsplash.it/100/100"
        title="This is the title"
        secondaryText="Secondary title"
      />

      <Card title="Only a title" secondaryText="Secondary text" />
    </div>
  );
};
