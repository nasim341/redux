import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { EditTodo } from "../../redux/state/todo/TodoSlice";

export function TodoEditAlert(i, item) {

    Swal.fire({
        title: "Update Task Name",
        input: 'text',
        inputValue: item,
        inputPlaceholder: (value) => {

            if (value) {
                store.dispatch(EditTodo({ index: i, task: "Todo Name" }))

            }
        }

    })

}