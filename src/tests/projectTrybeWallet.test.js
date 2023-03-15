import React from 'react';
import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import WalletForm from '../components/WalletForm';

// test('', () => {});

describe('testa o componente Login', () => {
  test('verifica se existe um campo para colocar o email ', () => {
    renderWithRouterAndRedux(<App />);

    const fieldEmail = screen.getByPlaceholderText(/E-mail/i);
    expect(fieldEmail).toBeInTheDocument();
  });
  test('verifica se existe um campo para colocar o passaword ', () => {
    renderWithRouterAndRedux(<App />);

    const fieldPassword = screen.getByPlaceholderText(/Senha/i);
    expect(fieldPassword).toBeInTheDocument();
  });
  test('verifica se ao clicar o botão entrar e direcionado para página carteira ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    // const { pathname } = history.location;

    const fieldEmail = screen.getByPlaceholderText(/E-mail/i);
    const fieldPassword = screen.getByPlaceholderText(/Senha/i);

    const buttonLogin = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonLogin).toBeVisible();
    expect(buttonLogin).toBeDisabled();

    userEvent.type(fieldEmail, 'teste@teste.com');
    userEvent.type(fieldPassword, '123456');
    expect(buttonLogin).toBeEnabled();

    userEvent.click(buttonLogin);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });

  describe('testa o componete walletForm', () => {
    test('testa se os campos do formulario são renderizados', () => {
      renderWithRouterAndRedux(<WalletForm />);

      const fieldDescription = screen.getByTestId('description-input');
      const fieldTag = screen.getByTestId('tag-input');
      const fieldValue = screen.getByTestId('value-input');
      const fieldMethod = screen.getByTestId('method-input');
      expect(fieldDescription).toBeInTheDocument();
      expect(fieldTag).toBeInTheDocument();
      expect(fieldValue).toBeInTheDocument();
      expect(fieldMethod).toBeInTheDocument();
    });

    test('testa se os codigos das moedas são carregados corretamente', async () => {
      renderWithRouterAndRedux(<WalletForm />);
      const fieldCurrency = await screen.findByTestId('currency-input');
      expect(fieldCurrency).toBeInTheDocument();
    });

    test('testa se é renderizado um botão para adicionar as informações', () => {
      renderWithRouterAndRedux(<WalletForm />);

      const buttonAdicionar = screen.getByRole('button', { name: /Adicionar despesa/i });
      expect(buttonAdicionar).toBeVisible();
    });
  });
  
  // test('testa se os campos do formulario são renderizados', () => {
  //     renderWithRouterAndRedux(<WalletForm />);
  //   });
});
