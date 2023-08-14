import { Dimensions } from "@/config/types"

export const ResumeIcon = ({ width, height }: Dimensions) => {
    return (
        <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" style={{color: "var(--geist-foreground)", width: width, height: height }}><path d="M7.06883 21.6H16.219C18.7973 21.6 20.8879 19.5093 20.8879 16.9312V5.86885C20.8879 3.29074 18.7973 1.20001 16.219 1.20001H7.06883C4.49072 1.20001 2.39999 3.29074 2.39999 5.86885V16.9312C2.39999 19.5093 4.49072 21.6 7.06883 21.6Z" />
            <path d="M15.3946 15.842H7.89178M15.3946 11.245H7.89178M10.755 6.6586H7.89232" /></svg>
    )
}