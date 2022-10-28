import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice';
import { filterHandler } from 'redux/filterSlice';
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={e => dispatch(filterHandler(e.target.value))}
        value={filter}
        name="filter"
      />
    </>
  );
};
