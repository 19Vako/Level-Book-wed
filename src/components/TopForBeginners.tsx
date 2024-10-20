/* eslint-disable array-callback-return */
import React from 'react';

//styles
import './topForBeginners.css';
import { useAppSelector } from '../store/hooks';

function TopForBeginners() {
  const theme = useAppSelector((state) => state.Theme);
  const A1 = useAppSelector((state) => state.ServerData.A1);
  console.log(A1);

  const Books = () => {
    return (
      <>
        {A1.map((book: any, index) => {
          return (
            <div key={index} className="bookContainer">
              <img className="bookImg" src={book.photo} />
              <h3 className="bookName">{book.namebook}</h3>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="Container">
      <h1 style={{ color: theme.color }}>TOP FOR BEGINNERS</h1>
      <div className="ListContainer" style={{ color: theme.color }}>
        <Books />
      </div>
    </div>
  );
}

export default TopForBeginners;
