// src/register.ts
import { program } from "commander";

// src/commands/info.ts
function info(program2) {
  program2.option("--info").option("--template <char>").action((str, options) => {
    console.log(123, str, 2234, options);
  });
}

// src/register.ts
function register() {
  info(program);
  program.parse();
}

// index.ts
register();
