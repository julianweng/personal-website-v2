import { Dimensions } from "@/config/types"

export const EmailIcon = ({ width, height } : Dimensions) => {
    return (
        <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" style={{color: "var(--geist-foreground)", width: width, height: height }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
    )
}