import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core"; //fontawesomeのコアファイル
import { fab } from "@fortawesome/free-brands-svg-icons"; //fontawesomeのbrandアイコンのインポート
import { fas } from "@fortawesome/free-solid-svg-icons"; //fontawesomeのsolidアイコンのインポート
import { far } from "@fortawesome/free-regular-svg-icons"; //fontawesomeのregularアイコンのインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理？
  return (
    <>
      <FontAwesomeIcon icon={["fas", "minus-circle"]} />
      <FontAwesomeIcon icon={["fab", "github"]} />
    </>
  );
};

export default App;
