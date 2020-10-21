module.exports = {
  getScreenByN,
  getScreenIdByN,
};

function getScreenByN(screens, n) {
  if (screens && screens.length >= n) {
    return screens[n - 1];
  }

  return null;
}

function getScreenIdByN(screens, n) {
  const screen = getScreenByN(screens, n);
  if (screen) {
    return screen.id;
  }

  return null;
}
