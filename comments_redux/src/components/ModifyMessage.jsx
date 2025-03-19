import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./redux.css"; // Import du fichier CSS

export default function ModifyMessage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const messages = useSelector((state) => state.messages);
  const targetMessage = messages.find((message) => message.id === parseInt(id));

  const [message, setMessage] = useState(targetMessage.message);
  const [date, setDate] = useState(targetMessage.date);

  function modifyMessage(e) {
    e.preventDefault();
    dispatch({ type: "MODIFY", payload: { id: parseInt(id), message, date } });
    navigate("/");
  }

  return (
    <div className="modify-container">
      <h1 className="modify-title">Modify Message</h1>
      
      <form className="modify-form" onSubmit={(e) => modifyMessage(e)}>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button className="modify-button" type="submit">Modify</button>
      </form>
    </div>
  );
}
