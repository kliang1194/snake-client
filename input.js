let connection;

const w = "Move: up";
const s = "Move: down";
const a = "Move: left";
const d = "Move: right";

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (input) => {
    if (input === '\u0003') {
      process.exit();
    } if (input === 'w') {
      conn.write(w);
    } if (input === 's') {
      conn.write(s);
    } if (input === 'a') {
      conn.write(a);
    } if (input === 'd') {
      conn.write(d);
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {setupInput}; 