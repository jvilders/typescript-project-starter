// @ts-check

import fs from "fs-extra";
import { execSync } from "child_process";

// Steps to implement
// 1. clean the build directory (./build)
// 2. compile CommonJS:
//      a. Add minimal package.json file with type: 'commonjs' in src directory*
//      b. run tsc with the cjs config (tsconfig.cjs.json)
//      c. Remove the minimal package.json file again
// 3. compile ESM:
//      a. Add minimal package.json file with type: 'module' in src directory*
//      b. run tsc with the ESM config (tsconfig.cjs.json)
//      c. Remove the minimal package.json file again
// 4. add package.json files to build directory** (TODO: Can avoid if updating cjs/esm tsconfig files to include the package.json file?)
// 5. Move both cjs and esm build folder a level deeper within a dist folder.***
// 6. Copy the source folder over to the build folder.

// *By doing this, when tsc runs to transpile with module = Node16, it'll see that type and determine what the output format should be
// **By doing this, the built files don't need explicit extensions (.cjs/.mjs) to indicate how they should be run, the package.json will indicate this
//      for files under it.
// *** This is done so that the relative paths in the sourcemap and declarationmap files will point to a src folder within the build folder instead of original src folder
//  (which won't be bundled).

function cleanBuildDirectory() {
  console.log("Cleaning build directory");
  fs.rmSync("./build", { recursive: true, force: true });
}

function compileCommonJS() {
  console.log("Compiling CommonJS output");

  console.debug("- Adding minimal package.json file to src directory for tsc");
  fs.writeFileSync("./src/package.json", JSON.stringify({ type: "commonjs" }));

  console.debug("- Transpiling using tsc with the CommonJS config");
  execSync("tsc -b ./tsconfig.cjs.json");

  console.debug(
    "- Removing minimal package.json file to src directory for tsc",
  );
  fs.rmSync("./src/package.json");

  console.debug(
    "- Adding minimal package.json file to cjs subdirectory in build directory",
  );
  fs.writeFileSync(
    "./build/cjs/package.json",
    JSON.stringify({ type: "commonjs" }),
  );
}

function compileESM() {
  console.log("Compiling ESM output");

  console.debug("- Adding minimal package.json file to src directory for tsc");
  fs.writeFileSync("./src/package.json", JSON.stringify({ type: "module" }));

  console.debug("- Transpiling using tsc with the ESM config");
  execSync("tsc -b ./tsconfig.esm.json");

  console.debug(
    "- Removing minimal package.json file to src directory for tsc",
  );
  fs.rmSync("./src/package.json");

  console.debug(
    "- Adding minimal package.json file to ESM subdirectory in build directory",
  );
  fs.writeFileSync(
    "./build/esm/package.json",
    JSON.stringify({ type: "module" }),
  );
}

function nestCommonJSBuildOutput() {
  console.debug("Nesting CJS output directory");
  fs.moveSync("./build/cjs", "./build/dist/cjs");
}

function nestESMBuildOutput() {
  console.debug("Nesting ESM output directory");
  fs.moveSync("./build/esm", "./build/dist/esm");
}

function copySourcefiles() {
  console.info("Copying source files into build directory");
  fs.copySync("./src", "./build/src");
}

function build() {
  cleanBuildDirectory();
  compileCommonJS();
  compileESM();
  nestCommonJSBuildOutput();
  nestESMBuildOutput();
  copySourcefiles();
}

build();
