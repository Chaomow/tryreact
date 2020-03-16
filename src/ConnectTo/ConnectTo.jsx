import find from "./app/find";
import add from "./app/add";
import update from "./app/update";
import remove from "./app/delete";

const ConnectTo = {
  ...find,
  ...add,
  ...update,
  ...remove
};

export default ConnectTo;
