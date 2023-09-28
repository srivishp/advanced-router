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
  const events = useLoaderData();

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
