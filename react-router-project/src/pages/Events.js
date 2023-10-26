// * Hook used to access closest loader data
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  //! This code is now added to the loader function

  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);

  // const response = await fetch("http://localhost:8080/events");

  // if (!response.ok) {
  //   setError("Fetching events failed.");
  // } else {
  //   const resData = await response.json();
  //   setFetchedEvents(resData.events);
  // }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  // * returns the data from the promise in loader
  //todo: Loader will only work if the components are on the same level or if the component is at a lower level than the one from where data is fetched
  //! Parent component/page cannot load data from a child component
  const data = useLoaderData();
  if (data.isError) {
    <p>{data.message}</p>;
  }
  const events = data.events;

  return <EventsList events={events} />;

  {
    /* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */
  }
}

export default EventsPage;
// We cannot use react hooks in loaders, but default browser feature can be used
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // TODO: incorrect response case
    //return { isError: true, message: "Could not fetch events." };

    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
