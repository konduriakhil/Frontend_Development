import React from "react";
import withDataFetching from "./withDataFetching";

const UsersList = ({ data, loading, error }) => {
      if (loading) return <p>Loading users...</p>;
      if (error) return <p>Error: {error}</p>;

      return (
            <>
            <ul>
                  {data.map(user => (
                        <li key={user.id}>{user.name}</li>
                  ))}
            </ul>
            </>
      );
};

export default withDataFetching(UsersList, "https://jsonplaceholder.typicode.com/users");
