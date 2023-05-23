import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, addUser, removeUser, getListUser } from './userSlice';

function User({ user, onDelete }) {
  const onClick = (event) => {
    event.preventDefault();
    onDelete(user.id);
  };

  return (
    <li>
      <span className='user-name'>{user.name}</span>
      <a href="#" onClick={onClick}>Delete</a>
    </li>
  );
}

export default function UserManagement() {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const [curUser, setCurUser] = useState({ id: 1, name: '' });

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  const onChange = (event) => {
    const { value } = event.target;
    setCurUser({ ...curUser, name: value });
  };

  const onClick = () => {
    dispatch(addUser(curUser));
    setCurUser({ id: curUser.id + 1, name: '' });
  };

  const onDelete = (id) => {
    dispatch(removeUser({ id }));
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