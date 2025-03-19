import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./redux.css"; 

export default function AddMessage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const messages = useSelector((state) => state.messages);

  function addMessage(e) {
    e.preventDefault();
    const nextId = Math.max(...messages.map((message) => message.id)) + 1;
    dispatch({ type: "ADD", payload: { id: nextId, message, date } });
    navigate("/");
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Add Comment</h1>

      <form onSubmit={addMessage} className="form">
        
        <div className="form-group">
          <label htmlFor="message">Comment:</label>
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-field"
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
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Add</button>
      </form>
    </div>
  );
}
