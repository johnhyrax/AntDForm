import React from "react";
import { Typography } from "antd";

import ModalInfos from "@/components/ModalInfos";

const { Title } = Typography;

export default function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(102, 104, 106, 0.15)",
        }}
      >
        <Title style={{ margin: "1em", textAlign: "center" }} level={4}>
          PROPOSTA PARA APOIO EM FEIRAS E EXPOSIÇÕES
        </Title>
      </div>
      <header
        style={{
          display: "flex",
          width: "100vw",
          textAlign: "center",
          alignItems: "center",
          background: "rgba(0, 94, 184, 0.15)",
        }}
      >
        <Title
          type="danger"
          level={5}
          style={{ margin: "1em", padding: "1em" }}
        >
          IMPORTANTE: para submissão e análise da proposta, a empresa
          organizadora deve estar regular junto ao SEBRAE/ES. Caso já tenha
          cadastro, acesse o{" "}
          <a href="https://sistemas.sebraees.com.br/SRS" target="_blank">
            SISTEMA SRS/ES
          </a>{" "}
          a sua situação. Caso contrário envie e-mail para{" "}
          <a href="mailto:srs@es.sebrae.com.br">srs@es.sebrae.com.br</a> e
          solicite seu cadastro no tipo de negócio: &quot;CONTRATO E OF - PJ
          [DISPENSA(exceto valor), INEXIGIBILIDADE] - acima de R$
          395.000,00&quot; <ModalInfos />
        </Title>
      </header>
    </>
  );
}
