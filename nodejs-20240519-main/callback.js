import fs from "fs";

fs.readFile("data/users.json", "utf8", (err1, data1) => {
  if (err1) return err1;

  const users = JSON.parse(data1);

  console.log(users);

  fs.readFile("data/posts.json", "utf8", (err2, data2) => {
    if (err2) return err2;

    const posts = JSON.parse(data2);

    const result = users.map((user) => {
      return posts.filter((post) => post.userId == user.id);
    });

    console.log(result);
  });
});
