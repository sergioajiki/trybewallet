export async function getCoin() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
}

export const tagList = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
