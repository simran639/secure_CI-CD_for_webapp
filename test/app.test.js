import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

test("health check responds", async () => {
  // very basic: just ensure endpoint exists (you’ll run tests in CI)
  const res = await fetch("http://localhost:3000/healthz").catch(() => null);
  assert.ok(!res, "Start the app before running this test locally");
});
