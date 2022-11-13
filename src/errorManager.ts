/* <Class Documentation>

  <Class Description>
    The ErrorManager class is to correctly handle errors that occure within the operating system. When there are errors in other classes and methods they will class this class to handle it correctly with a message and worst case a blue screen

  <Error Codes>
    #00001: Settings could not be loaded
*/

//DI
import ApplicationNotFoundError from "./errors/applicationNotFound";
import FatalError from "./errors/fatalError";
import NoApplicationForFiletypeError from "./errors/noApplicationForFiletypeError";

class ErrorManager {
  static fatalError = FatalError;
  static applicationNotFoundError = ApplicationNotFoundError;
  static noApplicationForFiletypeError = NoApplicationForFiletypeError;
}

export default ErrorManager;
