/* Moralis init code */
const serverUrl = "https://ns8gvq4jzzf7.usemoralis.com:2053/server";
const appId = "m5r1v3zWMjlfOv0utVivfyGncnMVAmF7s6gdjY6m";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */

async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Welcome to OBIOS(V2). If you know what you are doing, then go ahead and sign in. Thx!",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  