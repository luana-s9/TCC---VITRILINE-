const SUPABASE_URL = "https://belnlemxzuvvpxduudsz.supabase.co"; 
const SUPABASE_KEY = "sb_publishable_B_SXhBDXsYrZBD3QpDiNuA_-JI5EArC"; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const formLogin = document.getElementById('form-login');
const formCadastro = document.getElementById('form-cadastro');

const loginEmailInput = document.getElementById('login-email');
const loginSenhaInput = document.getElementById('login-senha');

const cadEmailInput = document.getElementById('cad-email');
const cadSenhaInput = document.getElementById('cad-senha');


formCadastro.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const email = cadEmailInput.value;
  const senha = cadSenhaInput.value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: senha,
  });

  if (error) {
    alert("Erro ao cadastrar: " + error.message);
  } else {
    alert("Cadastro realizado! Enviamos um e-mail de confirmação para você.");
    formCadastro.reset(); 
  }
});



formLogin.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const email = loginEmailInput.value;
  const senha = loginSenhaInput.value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: senha,
  });

  if (error) {
    alert("E-mail ou senha incorretos!");
  } else {
    alert("Login feito com sucesso!");

    window.location.href = "sobre.html"; 
  }
});