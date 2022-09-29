import { useEffect, useState } from "react";
import getCourses from "../../API/getCourses";
import TeamSlider from "./teamSlider";
import ReviewSlider from "./reviewSlider";

export const Team = () => {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    async function FetchAbout() {
      const about = await getCourses();
      setTeams(about);
    }
    FetchAbout();
  }, []);

  return (
    <div className="team-section">
      <div className=" container team-container">
        <h2 className="text team-title">
          Best tutors are all here <br />
          <span className="title">Meet our team</span>
        </h2>
        <TeamSlider props={teams} count={4} />

        <h2 className="text review-title">
          TESTIMONIALS <br />
          <span className="title">What our students say</span>
        </h2>
        <ReviewSlider />
      </div>
    </div>
  );
};
