"use strict";

import prompt from "prompt-sync";
import { getBirthMonth } from "./app.js";

const askUser = prompt();

const guess = askUser("Guess my birth month: ").toLowerCase();

const result = getBirthMonth(guess);

console.log(result);