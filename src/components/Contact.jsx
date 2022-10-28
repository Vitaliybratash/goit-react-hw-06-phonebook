import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        {el.name} {el.number}
      </li>
      <button onClick={() => dispatch(deleteContact(el.id))}>Delete</button>
    </>
  );
};
