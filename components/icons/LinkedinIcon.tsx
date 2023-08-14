import { Dimensions } from "@/config/types"

export const LinkedinIcon = ({ width, height } : Dimensions) => {
    return (
        <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" style={{color: "var(--geist-foreground)", width: width, height: height}}><path fill="var(--geist-fill)" stroke="var(--geist-fill)" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><path fill="var(--geist-fill)" stroke="var(--geist-fill)" d="M2 9h4v12H2z"/><circle stroke="var(--geist-fill)" fill="var(--geist-fill)" cx="4" cy="4" r="2"/></svg>
    )
}