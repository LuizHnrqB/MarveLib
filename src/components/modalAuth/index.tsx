import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import * as styles from "./styles";
import closeIcon from "../../assets/img/closeIcon.png";

interface CadastroModalProps {
  isOpen: boolean;
  onClose: () => void;
  tipo: number;
}

export const CadastroModal: React.FC<CadastroModalProps> = ({
  isOpen,
  onClose,
  tipo,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const [envio, setEnvio] = useState(false);
  const [envioCadastro, setEnvioCadastro] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [email, setEmail] = useState("");
  const [senhasEqual, setSenhasEqual] = useState(true);
  const [camposOk, setCamposOk] = useState(true);

  const handleCadastroEnvioClick = () => {
    if (senha !== confirmacaoSenha) {
      setTimeout(() => {
        setSenhasEqual(false);
      }, 3000);
      return;
    }
    setSenhasEqual(true);
    if (senha == confirmacaoSenha && usuario != "" && email != "") {
      const user = {
        usuario,
        senha,
        email,
      };

      localStorage.setItem("User", JSON.stringify(user));

      setEnvioCadastro(true);
      setTimeout(() => {
        setEnvioCadastro(false);
        onClose();
      }, 3000);
    } else {
      setTimeout(() => {
        setCamposOk(false);
      }, 3000);
    }
  };

  const handleEnvioClick = () => {
    setEnvio(true);

    setTimeout(() => {
      setEnvio(false);
      onClose();
    }, 3000);
  };

  return (
    <styles.ModalWrapper isOpen={isOpen}>
      <styles.Content>
        {tipo === 1 && (
          <styles.ContentWrapper>
            <styles.InnerTitle>Cadastro de usuário:</styles.InnerTitle>
            <styles.Inputs
              placeholder="Usuário"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <styles.Inputs
              placeholder="Senha"
              required
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <styles.Inputs
              placeholder="Confirmação de senha"
              required
              type="password"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
            />
            <styles.Inputs
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <styles.Envio onClick={handleCadastroEnvioClick}>
              Enviar
            </styles.Envio>
            {envioCadastro === true && (
              <styles.Confirmation>
                Usuário cadastrado com sucesso!
              </styles.Confirmation>
            )}
            {!senhasEqual && (
              <styles.Confirmation>Senhas não coincidem</styles.Confirmation>
            )}
            {!camposOk && (
              <styles.Confirmation>
                Campos não foram preenchidos
              </styles.Confirmation>
            )}
          </styles.ContentWrapper>
        )}
        {tipo === 2 && (
          <styles.ContentWrapper>
            <styles.InnerTitle>Recuperação de Senha</styles.InnerTitle>
            <styles.Description>Digite o email cadastrado</styles.Description>
            <styles.Inputs placeholder="Email" />
            {envio === false && (
              <styles.Envio onClick={handleEnvioClick}>Enviar</styles.Envio>
            )}
            {envio === true && (
              <styles.Confirmation>
                Usuário cadastrado com Sucesso!
              </styles.Confirmation>
            )}
          </styles.ContentWrapper>
        )}
        <styles.CloseButton src={closeIcon} alt="Close" onClick={onClose} />
      </styles.Content>
    </styles.ModalWrapper>
  );
};
