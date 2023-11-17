// * Hook used to access closest loader data
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
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
  //? Loader will only work if the components are on the same level or if the component is at a lower level than the one from where data is fetched
  //-> Parent component/page cannot load data from a child component
  const { events } = useLoaderData();

  return (
    // Suspense helps us show a fallback while we are waiting for the events/data to be fetched
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      {/* Await is used for rendering lazily loaded data from returning defer()
      in a loader function */}
      <Await resolve={events}>
        {/* This function is executed once the data is resolved */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  {
    /* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */
  }
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // # incorrect response case
    //return { isError: true, message: "Could not fetch events." };

    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// We cannot use react hooks in loaders, but default browser features can be used
//! This code has been changed in the defer() chapter of the course
export function loader() {
  // defer() helps you render a page/component even if the data is not generated yet
  return defer({
    events: loadEvents(),
  });
}
