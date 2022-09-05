import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTE4YzVmODkzYjM3ZjcwZjkxNmFiZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjIyODcyMTgsImV4cCI6MTY2MjU0NjQxOH0.ZgxELMPrrOrvger-b48TWV1l1P9d67fXGsiGog8gP5w";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
