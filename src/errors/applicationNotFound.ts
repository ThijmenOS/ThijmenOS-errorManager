import Prompt from "@thijmen-os/prompt";

function ApplicationNotFoundError() {
  new Prompt.applicationNotFound();

  throw new Error("The application could not be found!");
}

export default ApplicationNotFoundError;
