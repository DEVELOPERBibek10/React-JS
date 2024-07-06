import fs from "fs/promises";

async function getPostsByUserId(userId) {
  return new Promise((resolve, reject) => {
    fs.readFile("data/users.json", "utf8")
      .then((data1) => {
        const users = JSON.parse(data1);

        const existingUser = users.find((user) => user.id == userId);

        if (!existingUser) return reject("User not found");

        fs.readFile("data/posts.json", "utf8")
          .then((data2) => {
            const posts = JSON.parse(data2);

            const result = posts.filter(
              (post) => post.userId == existingUser.id
            );

            if (result.length == 0)
              return reject(`No posts available for user ${existingUser.id}`);

            resolve(result);
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
}

getPostsByUserId(3)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
