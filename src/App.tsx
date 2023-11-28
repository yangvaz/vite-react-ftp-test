import Welcome from "./components/Welcome";

import NOTFIS from './services/NOTFIS-mock.txt';

import abc from '../../3000/3000/sta/notfis/enviadas/303064/teste.jpg'

const testImage = '../../3000/3000/sta/notfis/enviadas/303064/teste.jpg'

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
      <br /> <br />
      {/* <a
        href="../../../3000/3000/sta/notfis/enviadas/303064/438241-3000NOTFIS"
        download="NOTFIS from 3000/sent"
        target="_blank"
        rel="noreferrer"
      >
        <button>teste</button>
      </a> */}

      <img
        src={testImage}
        alt="testing path"
        width={50}
        height={50}
      />
      <img
        src={abc}
        alt="testing path"
        width={50}
        height={50}
      />
    </>
  );
}