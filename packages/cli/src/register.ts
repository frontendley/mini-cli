import { program } from "commander"
import { info } from "./commands"

export function register() {
    info(program)


    program.parse()
}
