export function* getWalls() {
  yield take(USER_CLICK_LOAD_BUTTON);
  yield put(setBoardIsLoading(true));
  const requestPageAction = request(RESOURCES.GET.WALLS, {});
  yield put(requestPageAction);
  const responsePageAction = yield take(getResponseFunction(requestPageAction));
  if (responsePageAction.error === false) {
    const walls = wallsFromJson(responsePageAction.payload);
    yield put(setWallList(walls));
  } else {
    yield put(errorLoadWall());
  }
  yield put(setBoardIsLoading(false));
}