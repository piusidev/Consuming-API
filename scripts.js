async function getContent() {

  const gitUser = document.getElementById('gitUser');

  if(gitUser.value == '') {
    window.alert("Insira um usuário válido")
    return false
  }

  try {
    const response = await fetch('https://api.github.com/users/' + gitUser.value);
    const data = await response.json();

    console.log(response);
    console.log(data);

    showData(data)
  } catch (error) {
      console.error(error);
  }

}

function showData(users) {

  let userImg = `
    <img src="${users.avatar_url}">
    <h2>${users.name}</h2>
  `

  let userInfo = `
    <span><strong>Login:</strong> ${users.login}</span>
    <span><strong>ID:</strong> ${users.id}</span>
    <span><strong>Perfil:</strong> <a href="${users.html_url}">Acessar</a></span>
  `

  document.getElementById('contentHeader').innerHTML = userImg;
  document.getElementById('contentInfos').innerHTML = userInfo;
  document.querySelector('.githubInfo').style.display = "flex";
  document.querySelector('.formHeader').style.display = "none";
}