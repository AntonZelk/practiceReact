import { useAlertToggle } from './Alert/AlertContext';

export default function Main() {
  const toggle = useAlertToggle();
  return (
    <>
      <h1> Привет в примере с контекст</h1>
      <button className="btn btn-success" onClick={toggle}>
        Показать alert
      </button>
    </>
  );
}
