import React from 'react';
import css from './SectionContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../Redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter);

  const filterForContacts = event => {
    const inputData = event.currentTarget.value;
    dispatch(filterContact(inputData));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.labelInput}
        type="text"
        value={inputValue}
        onChange={filterForContacts}
      ></input>
    </label>
  );
};

export default Filter;
