import React from 'react';
import { useAlert } from '../Alert/AlertContext';

export default function Alert() {
  const alert = useAlert();

  if (!alert) return null;

  return (
    <>
      <div className={'aler alert-danger'}>
        Это очень и очень важное сообщение
      </div>
    </>
  );
}
