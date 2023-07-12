import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div className="center">
      <button
        type="button"
        onClick={() => dispatch(fetchGreetings())}
        className="greeting-btn"
      >
        Press Me
      </button>
      {greetingsData && <h1>{greetingsData.greeting}</h1>}
    </div>
  );
}

export default Greetings;
