import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectUser, addUserAsync, getUserAsync, } from './userSlice';

function User({ user, onDelete }) {
  const onClick = (event) => {
    event.preventDefault();
    onDelete(user.id);
  };

  return (
    <li>
      <span className='user-name'>{user?.name}</span>
      <a href="#" onClick={onClick}>Delete</a>
    </li>
  );
}

export default function UserManagement() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [curUser, setCurUser] = useState({ id: 1, name: '' });


  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  const onChange = (event) => {
    const { value } = event.target;
    setCurUser({ id: nanoid(), name: value });
  };

  const onClick = () => {
    dispatch(addUserAsync(curUser));
    setCurUser({ id: curUser.id + 1, name: '' });
  };

  const onDelete = (id) => {
    // dispatch(deleteUserById({ id }));
  };


  return (
    <div className='container'>
      <input type="text" onChange={onChange} value={curUser.name} />
      <button onClick={onClick}>Add user</button>
      <ul>
        {users?.map((user) => (
          <User key={user?.id} user={user} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}