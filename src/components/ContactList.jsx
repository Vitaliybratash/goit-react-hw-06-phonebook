import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filterSlice';
import { Contact } from './Contact';
export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const filterNormalized = filter.toLowerCase();
  const filterContacts = contacts.filter(el => {
    return (
      el.name.toLowerCase().includes(filterNormalized) ||
      el.number.includes(filterNormalized)
    );
  });
  return (
    <>
      <ul>
        {filterContacts.map(el => {
          return <Contact key={el.id} el={el} />;
        })}
      </ul>
    </>
  );
};
