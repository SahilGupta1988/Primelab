import React from "react"
export const PersonIcon = ({ className }: { className?: string }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
            <circle cx="10.9809" cy="11" r="10.8333" fill="#C4C4C4" />
            <mask id="mask0_12465_431" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                <circle cx="10.9809" cy="11" r="10.8333" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_12465_431)">
                <rect x="-26.0964" y="10.5174" width="33.1429" height="32" rx="6" transform="rotate(-34 -26.0964 10.5174)" fill="#39C0BA" />
                <rect x="5.34119" y="20.3379" width="33.1429" height="32" rx="6" transform="rotate(-79 5.34119 20.3379)" fill="#FFCE20" />
                <rect x="26.0107" y="48.938" width="33.1429" height="32" rx="6" transform="rotate(-112 26.0107 48.938)" fill="#BB85FF" />
                <rect x="16.8698" y="54.1181" width="33.1429" height="32" rx="6" transform="rotate(-154 16.8698 54.1181)" fill="#FF8B20" />
            </g>
        </svg>
    )
}
