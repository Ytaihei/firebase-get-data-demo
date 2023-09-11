import { useState, useEffect } from 'react'
import './App.css'
import { db } from "../api/firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [message, setMessage] = useState(""); // 初期値を空の文字列に設定

  const getMessage = async () =>{
    try {
      const docRef = doc(db, "Hello! React", "UtQxeNjwUJ2B6D558eR2");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const data = docSnap.data();
        setMessage(data.message); // "message" フィールドの値をセット
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("データの取得中にエラーが発生しました:", error);
    }
  }

  useEffect(() => {
    getMessage(); // コンポーネントがマウントされたときにデータを取得
  }, []); // 空の依存配列を指定して一度だけ実行

  return (
    <>
      <div>{message}</div>
    </>
  )
}

export default App
