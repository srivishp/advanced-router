import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong...";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Page not found!";
    message = "Check if the path is valid.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p> {message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
