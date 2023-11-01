import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  // useRouteLoaderData works just like useLoaderData,
  // but it takes a route ID as an argument
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    return json({ message: "Could not fetch details" }, { status: 500 });
  } else {
    return response;
  }
}
