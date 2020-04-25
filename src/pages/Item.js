import React from 'react'

const Item = ({ memo,deleteMemo }) => {

  return (
    <>
      <h1>Memo List</h1>
      <h2>タイトル：{memo.title}</h2>
      <h3>ユーザー：{memo.user}</h3>
      <p>日付：{memo.day}</p>
      <p>内容：{memo.memo}</p>
      <button
      onClick={deleteMemo}
      >削除</button>
    </>
  )
}

export default Item