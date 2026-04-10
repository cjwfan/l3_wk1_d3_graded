"use strict";

import chalk from "chalk";


export function getBirthMonth(month) {

  if (month === "january") {
    return chalk.red("You're right! It's January");
  } else {
    return chalk.green("Try again");
  }
}




