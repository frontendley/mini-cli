import { Command } from "commander";

export function info(program: Command) {
    program
        .option('--info')
        .option('--template <char>')
        .action((str, options) => {
            console.log(123, str, 2234, options)
        })
}
