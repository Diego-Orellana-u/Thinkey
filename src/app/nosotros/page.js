import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import OnlyTextCenter from "@/components/OnlyTextCenter";

import { teamInfo } from "data/team";
import { onlyTextCenterAbout } from "data/onlyText";

export default function Nosotros() {
  return (
    <>
      <Team teamInfo={teamInfo} />;
      <OnlyTextCenter info={onlyTextCenterAbout} />
      <Timeline />
    </>
  );
}
