import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom"; //for typescript I had to add this line

// clean up after every test - unmount my components
afterEach(() => {
  cleanup();
});
