// ================= LOGIN / SIGNUP / LOGOUT =================
function showSignup(){
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}
function showLogin(){
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
function login(){
  const user=document.getElementById("loginUser").value;
  const pass=document.getElementById("loginPass").value;
  if(user && pass){
    document.getElementById("authPage").style.display="none";
    document.getElementById("homePage").style.display="block";
    showSection('home');
  } else alert("Enter username and password");
}
function signup(){
  const pass=document.getElementById("pass").value;
  const confirm=document.getElementById("confirm").value;
  if(pass===confirm){
    alert("Account created successfully!");
    showLogin();
  }
  else alert("Passwords do not match!");
}
function logout(){
  document.getElementById("homePage").style.display="none";
  document.getElementById("authPage").style.display="flex";
}
function showSection(id){
  const sections=document.querySelectorAll('section');
  sections.forEach(sec=>sec.style.display='none');
  const target=document.getElementById(id);
  if(target) target.style.display='block';
}
