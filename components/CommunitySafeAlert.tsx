import {useTranslation} from "next-i18next";
import React from "react";

export function CommunitySafeAlert() {
    const {t} = useTranslation()
    return <>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
            className="font-mitr bg-gradient-to-r from-chinese-green underline decoration-dotted underline-offset-2 to-orange-400
            text-black p-1 text-center cursor-pointer hover:bg-chinese-green/90 transition-opacity duration-1000"
            onClick={() => {
                window.open("https://joint.exchange/invest", "_blank")
            }}
        >
            <b className="font-medium">[COMMUNITY SAFE]</b> - {t("join_com_safe")}
        </div>
    </>;
}
