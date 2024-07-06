import fs from "fs/promises";

async function getPostsByUserId(userId) {
  try {
    const data1 = await fs.readFile("data/users.json", "utf8");

    const users = JSON.parse(data1);

    const existingUser = users.find((user) => user.id == userId);

    if (!existingUser) throw new Error("User not found");

    const data2 = await fs.readFile("data/posts.json", "utf8");

    const posts = JSON.parse(data2);

    const result = posts.filter((post) => post.userId == existingUser.id);

    if (result.length == 0)
      throw new Error(`No posts available for user ${existingUser.id}`);

    return result;
  } catch (error) {
    return error;
  }
}

const data = await getPostsByUserId(3);

console.log(data);

// js higher order function
// map, sort, filter, reduce, find, every