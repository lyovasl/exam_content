"use client";

import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = axios({
  url: `${API_URL}/users`,
  method: "GET",
  params: { offset: 0, limit: 10 },
});

