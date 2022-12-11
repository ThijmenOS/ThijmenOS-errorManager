import { ApplicationNotFound } from "@thijmen-os/prompt";
("@thijmen-os/prompt");

function ApplicationNotFoundError() {
  new ApplicationNotFound();

  throw new Error("The application could not be found!");
}

export default ApplicationNotFoundError;
