import React, { useEffect, useState, Fragment } from "react";

import UserList from "../components/User-List/user-list.components";
import ErrorModal from "../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Adetayo Chukwudi",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      createdEvents: 3,
    },
  ];
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         process.env.REACT_APP_BACKEND_URL + "/users"
  //       );

  //       setLoadedUsers(responseData.users);
  //     } catch (error) {}
  //   };
  //   fetchUsers();
  // }, [sendRequest]);

  return (
    // <Fragment>
    //   <ErrorModal error={error} onClear={clearError} />
    //   {isLoading && (
    //     <div className="center">
    //       <LoadingSpinner />
    //     </div>
    //   )}
    //   {!isLoading && loadedUsers && <UserList items={USERS} />}
    // </Fragment>
    <UserList items={USERS} />
  );
};

export default Users;
