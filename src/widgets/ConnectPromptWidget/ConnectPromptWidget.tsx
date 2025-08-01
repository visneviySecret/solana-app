import React from "react";
import * as Styled from "./ConnectPromptWidget.styles.ts";
import { useTranslation } from "react-i18next";

export const ConnectPromptWidget: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Styled.ConnectPrompt data-onboarding-id="onboarding-connect-prompt">
            <p>{t("prompt.connect")}</p>
            <p>{t("prompt.supported_wallets")}</p>
            <Styled.Features>
                <h4>{t("prompt.features_title")}:</h4>
                <ul>
                    <li>{t("prompt.feature1")}</li>
                    <li>{t("prompt.feature2")}</li>
                    <li>{t("prompt.feature3")}</li>
                    <li>{t("prompt.feature4")}</li>
                </ul>
            </Styled.Features>
        </Styled.ConnectPrompt>
    );
};
