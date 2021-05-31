import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GihubContext } from '../context/github/githubCobtext';

export const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GihubContext);
  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    github.clearUsers();
    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('Введите данные пользователя');
    }
  };
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Введите ник пользователя..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
