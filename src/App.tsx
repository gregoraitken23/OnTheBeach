import React from "react";
import SortableInfoCards from "./stories/components/organisms/SortableOfferCards/SortableOfferCards";
import Background from "../src/stories/assets/background.png";

import { offerCardListData } from "./stories/OfferCardList.Mocks";

function App() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "repeat-x",
      }}
    >
      <SortableInfoCards data={offerCardListData} />
    </div>
  );
}

export default App;
