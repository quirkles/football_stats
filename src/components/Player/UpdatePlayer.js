import React from "react";
import "./UpdatePlayer.css";
import PlayerCard from "../../containers/PlayerCard";
import StatsTable from "../../containers/StatsTable";

const updatePlayer = () => {
  return (
    <div>
      <PlayerCard />
      <StatsTable />
      {/* // <Image />
        // <Stats /> */}
    </div>
  );
};

export default updatePlayer;
