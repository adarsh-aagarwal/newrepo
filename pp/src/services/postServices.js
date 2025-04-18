

export const createPost = async (payload, token) => {
  console.log("pp",payload);
  
  const response = await fetch("http://localhost:8080/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  console.log(response);
  

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
};

  
