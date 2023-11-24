import Welcome from "./components/Welcome";

import NOTFIS from './services/NOTFIS-mock.txt';

export default function App() {
  return (
    <>
      <Welcome />
      <a
        href={NOTFIS}
        download="Example-NOTFIS-Document"
        target="_blank"
        rel="noreferrer"
      >
        <button>Baixar NOTFIS</button>
      </a>
    </>
  );
}