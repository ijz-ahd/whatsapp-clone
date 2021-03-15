import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "../firebase";
import "./sidebarChat.css";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  const [message, setMessage] = useState("");

  const createNewChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar_chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar_chatInfo">
          <h2>{name}</h2>
          <p>{message[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebar_chat" onClick={createNewChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
