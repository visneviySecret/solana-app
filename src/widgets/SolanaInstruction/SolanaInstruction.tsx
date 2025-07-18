import React, { useState } from "react";
import * as Styled from "./SolanaInstruction.styles";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    gap: 8px;
    z-index: 21;
`;

export const SolanaInstruction: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <Styled.Header>
            <ButtonsWrapper>
                <Styled.InfoButton onClick={() => setModalOpen(true)} title={t("buttons.info")}>
                    i
                </Styled.InfoButton>
                <LanguageSwitcher />
            </ButtonsWrapper>

            <h1>{t("header.title")}</h1>
            <p>{t("header.subtitle")}</p>

            {modalOpen && (
                <Styled.ModalOverlay onClick={() => setModalOpen(false)}>
                    <Styled.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <Styled.ModalClose onClick={() => setModalOpen(false)}>&times;</Styled.ModalClose>
                        <h2>{t("instruction.title")}</h2>
                        <ol>
                            <li>
                                <b>{t("instruction.step1_title")}</b> — {t("instruction.step1_desc")} <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer">{t("instruction.official_site")}</a> {t("instruction.step1_create")}.
                            </li>
                            <li>
                                <b>{t("instruction.step2_title")}</b> — {t("instruction.step2_desc")}:
                                <ul>
                                    <li><b>{t("instruction.login")}:</b> AmpleGrove2196</li>
                                    <li><b>{t("instruction.password")}:</b> testMySolanaApp</li>
                                </ul>
                                <b>{t("instruction.or_create_new")}.</b>
                            </li>
                            <li>
                                <b>{t("instruction.step3_title")}</b> — {t("instruction.step3_desc")}.</li>
                            <li>
                                <b>{t("instruction.step4_title")}</b> — {t("instruction.step4_desc")}.</li>
                            <li>
                                <b>{t("instruction.step5_title")}</b> — {t("instruction.step5_desc")}.</li>
                            <li>
                                <b>{t("instruction.step6_title")}</b> — {t("instruction.step6_desc")} <a href="https://faucet.solana.com/" target="_blank" rel="noopener noreferrer">https://faucet.solana.com/</a> {t("instruction.step6_copy")}.</li>
                        </ol>
                        <p style={{ marginTop: '1rem', color: '#555' }}>{t("instruction.disclaimer")}</p>
                    </Styled.ModalContent>
                </Styled.ModalOverlay>
            )}
        </Styled.Header>
    );
};
