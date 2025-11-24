const store = {};

export function setPaste(id, content) {
  store[id] = content;
}

export function getPaste(id) {
  return store[id];
}
