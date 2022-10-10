import axios from "axios";

export default async function getEvents(id) {
  try {
    const allEvents = await axios.get("/createx/events");
    const search = allEvents.data.find((el) => el._id === id);

    if (search || !id) {
      return allEvents.data;
    } else {
      throw new Error("Event not found");
    }
  } catch (error) {
    return error;
  }
}
