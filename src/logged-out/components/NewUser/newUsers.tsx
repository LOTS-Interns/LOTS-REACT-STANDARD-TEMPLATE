import React from "react";

// Define a TypeScript interface for the props
interface NewUsersProps {
  users: Array<{ name: string; imageSrc: string; timeAgo: string }>;
}

function NewUsers(props: NewUsersProps) {
  return (
    <div className="new-users">
      <h2>New Users</h2>
      <div className="user-list">
        {props.users.map((user, index) => (
          <div className="user" key={index}>
            <img src={user.imageSrc} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.timeAgo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewUsers;
