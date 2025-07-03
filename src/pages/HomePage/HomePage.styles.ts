import styled from "styled-components";

export const HomePage = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeHeader = styled.header`
    text-align: center;
    color: white;
    margin-bottom: 40px;

    h1 {
        font-size: 3rem;
        margin-bottom: 10px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    p {
        font-size: 1.2rem;
        opacity: 0.9;
    }
`;

export const WalletSection = styled.div`
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
`;

export const WalletButtons = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
`;

export const WalletInfo = styled.div`
    margin-top: 20px;
`;

export const WalletDetails = styled.div`
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;

    h3 {
        margin: 0 0 15px 0;
        color: #333;
        font-size: 1.3rem;
    }
`;

export const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #e9ecef;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
`;

export const Label = styled.span`
    font-weight: 600;
    color: #6c757d;
`;

export const Value = styled.span`
    font-family: "Courier New", monospace;
    color: #495057;
    word-break: break-all;
    text-align: right;
    max-width: 60%;
`;

export const Actions = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

export const TransactionInfo = styled.div`
    background: #e3f2fd;
    border-radius: 8px;
    padding: 15px;
    text-align: center;

    h4 {
        margin: 0 0 10px 0;
        color: #1976d2;
    }
`;

export const TxLink = styled.a`
    color: #1976d2;
    text-decoration: none;
    font-family: "Courier New", monospace;
    font-weight: 600;

    &:hover {
        text-decoration: underline;
    }
`;

export const TxNote = styled.p`
    margin: 8px 0 0 0;
    font-size: 0.85rem;
    color: #666;
    font-style: italic;
`;

export const ConnectPrompt = styled.div`
    text-align: center;
    color: #6c757d;
    margin-top: 20px;

    p {
        margin: 10px 0;
    }
`;

export const Features = styled.div`
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    text-align: left;

    h4 {
        margin: 0 0 15px 0;
        color: #495057;
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 8px 0;
        position: relative;
        padding-left: 25px;

        &:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #28a745;
            font-weight: bold;
        }
    }
`;

export const ResponsiveContainer = styled.div`
    @media (max-width: 768px) {
        ${HomeHeader} h1 {
            font-size: 2rem;
        }

        ${WalletSection} {
            margin: 0 10px;
            padding: 20px;
        }

        ${DetailItem} {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }

        ${Value} {
            max-width: 100%;
            text-align: left;
        }

        ${Actions} {
            flex-direction: column;
        }
    }
`;
