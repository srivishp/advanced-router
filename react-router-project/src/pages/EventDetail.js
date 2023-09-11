import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
