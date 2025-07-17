import React from "react";

export const Loader: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = "#14f195" }) => (
    <span style={{ width: size, height: size, display: 'inline-block' }}>
        <svg viewBox="0 0 50 50" style={{ width: '100%', height: '100%' }}>
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke={color}
                strokeWidth="5"
                strokeDasharray="90,150"
                strokeLinecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    </span>
); 