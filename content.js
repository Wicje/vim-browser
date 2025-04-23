document.addEventListener("keydown", (e) => {
  if (
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "TEXTAREA"
  )
    return;

  const amount = 100;

  switch (e.key) {
    case "j":
      window.scrollBy(0, amount);
      break;
    case "k":
      window.scrollBy(0, -amount);
      break;
    case "h":
      window.scrollBy(-amount, 0);
      break;
    case "l":
      window.scrollBy(amount, 0);
      break;
    case "g":
      if (lastKey === "g") window.scrollTo(0, 0);
      break;
    case "G":
      window.scrollTo(0, document.body.scrollHeight);
      break;
    case "d":
      window.scrollBy(0, window.innerHeight / 2);
      break;
    case "u":
      window.scrollBy(0, -window.innerHeight / 2);
      break;
  }

  lastKey = e.key;
});

let lastKey = "";
