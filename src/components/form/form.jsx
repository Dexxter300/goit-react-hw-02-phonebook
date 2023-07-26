import React from 'react';
import css from './form.module.css';

export const Form = ({ handleSubmit, handleNameChange, handlePhoneChange }) => {
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleNameChange}
            required
          />
        </label>
        <label className={css.formLabel}>
          Phone number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handlePhoneChange}
            required
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
