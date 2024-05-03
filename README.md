A facebook mimic with React Fullstack development as a personal projecr

This is a **MERN STACK** Application

For getting suggested users


Your code looks mostly correct, but there are a couple of improvements that can be made:

Avoid unnecessary Promise usage: You are wrapping each item in user.following with a Promise in followingUser. This isn't necessary since user.following is already an array of user IDs.
Unnecessary destructuring: In usersTofFollow, you're destructuring the user object unnecessarily. Since you're only using the _doc property, you can directly map over suggestedUsers without destructuring.
