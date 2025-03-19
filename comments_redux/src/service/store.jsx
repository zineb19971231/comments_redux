const init_state = {
  messages: [{ id: 1, message: "Hello Abderrahim", date: "2025-12-02" },
               { id: 3, message: "Hello Abderrahim", date: "2025-12-02" },
  ],
};

const message_reducer = (state = init_state, action) => {
  switch (action.type) {
    case "ADD":
      return { messages: [...state.messages, action.payload] };
    case "MODIFY":
      return { messages: state.messages.map((message)=> message.id === action.payload.id ? action.payload : message)}
    case "DELETE":
      return {
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default message_reducer;
