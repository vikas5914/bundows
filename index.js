#!/usr/bin/env node

import { execa } from "execa";
import { platform } from "node:os";

if (platform() === "win32") {
  await execa("powershell", ["-c", "irm bun.sh/install.ps1|iex"], {
    stdio: "inherit",
  });
  console.log("Enjoy Bun! 🐰");
} else {
  console.error("This script can only be run on Windows.");
  process.exit(1);
}
