import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ajaykumarn07")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  // const data = useLoaderData();

  // Ensure data is defined before rendering
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-center text-3xl bg-gray-500 text-white p-4">
      Github Follwers: {data.followers} 😕🙃
      <img src={data.avatar_url} alt="gitpic" width={300} />
    </div>
  );
};

export default GitHub;

export const GitHubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/ajaykumarn07");
  const data = await res.json();
  console.log(data); // Log the data to see what you're getting
  return data;
};
