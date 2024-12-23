// キーが押されたときの処理
document.addEventListener('keydown', (event) => {
  // 押されたキーを取得し、大文字に変換
  const key = event.key.toUpperCase();
  // 対応するキーの要素を取得
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  // キーが存在する場合、'active'クラスを追加
  if (keyElement) {
    keyElement.classList.add('active');
  }
});

// キーが離されたときの処理
document.addEventListener('keyup', (event) => {
  // 離されたキーを取得し、大文字に変換
  const key = event.key.toUpperCase();
  // 対応するキーの要素を取得
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  // キーが存在する場合、'active'クラスを削除
  if (keyElement) {
    keyElement.classList.remove('active');
  }
});
