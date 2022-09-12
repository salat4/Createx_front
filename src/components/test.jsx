import { useEffect } from "react";
import { getEvents } from "../API";

export default function TestBack() {
  //   const [first, setfirst] = useState([]);
  useEffect(() => {
    try {
      Blogs();
      async function Blogs() {
        const blogs = await getEvents();
        console.log(blogs);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>TEST Fetch</div>;
}
