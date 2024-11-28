import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'take-hit':
        return { health : state.health + +15 };
    
  }
}

function battleReducer() {
  const [state, dispatch] = useReducer(reducer, { health :100 });
 }