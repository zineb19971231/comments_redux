import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./redux.css"; // Import du fichier CSS

export default function Messages() {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  return (
    <div className="messages-container">
      <h1 className="messages-title">Messages</h1>
      <table className="messages-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.id}</td>
              <td>{message.message}</td>
              <td>{message.date}</td>
              <td>

                <button
                  className="delete-button"
                  onClick={
                    () => dispatch(
                    { type: "DELETE",
                     payload: message.id })}>
                      Delete</button>


                <Link to={`/modify/${message.id}`} className="modify-link">
                  Modify
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
