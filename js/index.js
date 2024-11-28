function appStart() {
  const handlekeyDown = (event) => {
    const key = event.key;
    const keyCod = event.keyCod;
    const thisBlock = document.querySelector(
      ".board-column[data-index = '00']"
    );
    thisBlock.innerText = key;
  };
  window.addEventListener("keydown", handlekeyDown);
}

appStart();
