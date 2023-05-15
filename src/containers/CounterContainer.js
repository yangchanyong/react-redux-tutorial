// import React from 'react';
// import { connect } from 'react-redux';
// import Counter from '../components/Counter';
// import { decrease, increase } from '../modules/counter';


// const CounterContainer = ({number, increase, decrease}) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = (state) => ({ number: state.counter.number });
// // 1번방법
// const mapDispatchToProps = {increase, decrease};

// // 2번방법
//   // bindActionCreators({increase, decrease}, dispatch);
  
// // 3번방법
//   // {
//   // increase: () => {
//   //   // console.log("increase");
//   //   dispatch(increase());
//   // },
//   // decrease: () => {
//   //   // console.log("decrease");
//   //   dispatch(decrease());
//   // },
// // }


// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter, {} from '../components/Counter'
import { decrease, increase } from '../modules/counter'

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback (() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback (() => dispatch(decrease()), [dispatch]);
  return (
    <Counter 
      number={number} 
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;