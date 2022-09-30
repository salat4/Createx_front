import { HeroHeader } from "../components/Course/heroHeader";
import { AboutCourse } from "../components/Course/about";
import { Curator } from "../components/Course/curator";
import { CourseInfo
 } from "../components/Course/info";
export default function Course() {
  return (
    <>
      <HeroHeader />
      <AboutCourse />
      <Curator />
      <CourseInfo/>
    </>
  );
}
