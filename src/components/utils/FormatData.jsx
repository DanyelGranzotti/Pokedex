const pad = (id, length) => {
  let str = "" + id;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};

export function formatIdNumber(id) {
  return pad(id, 3);
}
