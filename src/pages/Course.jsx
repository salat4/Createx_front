import { HeroHeader } from "../components/Course/heroHeader";
import { AboutCourse } from "../components/Course/about";
import { Curator } from "../components/Course/curator";
import { CourseInfo
 } from "../components/Course/info";
 import { ReviewSider } from "../components/Courses/reviewSlider";
import { DiscountForm } from "../components/Course/discounfForm";
import { CourseSlider } from "../components/Course/otherCourses";
export default function Course() {
  return (
    <>
      <HeroHeader />
      <AboutCourse />
      <Curator />
      <CourseInfo/>
      <ReviewSider/>
      <DiscountForm/>
      <CourseSlider/>
    </>
  );
}
