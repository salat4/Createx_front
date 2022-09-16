import { useState, useEffect } from "react";
import { getCourses } from "../../../API";

export const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    try {
      getTeamAbout();
      async function getTeamAbout() {
        const aboutTeamCourses = await getCourses();
        setTeam(aboutTeamCourses);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <div className="container">
        <div className="team-sections_container about_team-title">
          <p className="title">Best tutors are all here</p>
          <p className="sub-title">Meet our team</p>
          <div>
            <ul className="team-list">
              {team &&
                team.map(
                  ({ aboutName, profilePicture, aboutJobTitle }, indx) => {
                    console.log(aboutName);
                    if (indx === 7) {
                      return null;
                    }
                    return (
                      <li className="team-list_item" key={aboutName}>
                        <img src={profilePicture} alt="Our team" />
                        <p className="team-list_item-name">{aboutName}</p>
                        <p className="team-list_item-position">
                          {aboutJobTitle}
                        </p>
                      </li>
                    );
                  }
                )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
