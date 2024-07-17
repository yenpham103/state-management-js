import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  getUser,
} from "../../../redux-toolkit/middlewares/userMiddleware";
import { resetUser } from "../../../redux-toolkit/slice/userSlice";
export default function UserLists() {
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.user.users);
  let { data: user, status: userStatus } = useSelector(
    (state) => state.user.user
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (userId) dispatch(getUser(userId));
    return () => {
      dispatch(resetUser());
    };
  }, [userId, dispatch]);

  const handleShowUser = (id) => {
    setUserId(id); //Cap nhat state thay doi giao dien
  };
  const handleBack = () => {
    setUserId(null);
  };
  if (status === "failed" || userStatus === "failed") {
    return <h3>Error</h3>;
  }
  return (
    <div>
      {!userId ? (
        <>
          <h2>List Users </h2>
          {status === "pending" ? (
            <h3>Loading...</h3>
          ) : (
            status === "success" &&
            users?.map((user) => (
              <div
                key={user.id}
                style={{ borderBottom: "1px solid black", padding: "10px" }}
              >
                <p>Name: {user.name} </p>
                <p>Email: {user.email}</p>
                <button onClick={() => handleShowUser(user.id)}>Xem</button>
              </div>
            ))
          )}
        </>
      ) : (
        <>
          <h2>Info User</h2>
          <button onClick={handleBack}>Back</button>
          {userStatus === "pending" ? (
            <p>Loading</p>
          ) : (
            userStatus === "success" && (
              <>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <img src={user.avatar} width="200" alt="" />
              </>
            )
          )}
        </>
      )}
    </div>
  );
}
