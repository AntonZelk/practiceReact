import React, { useState } from 'react';

const computeInitialCounte = () => {
  console.log('hi');
  return Math.trunc(Math.random() * 20);
};

const Fu = () => {
  const [counter, setCounter] = useState(computeInitialCounte());

  const [state, setState] = useState({ title: 'Counter', date: Date.now() });

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: 'new titile',
      };
    });
  };

  return (
    <div className="usstate">
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Изменить название
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Fu;
