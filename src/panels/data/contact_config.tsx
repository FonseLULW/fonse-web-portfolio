export var ContactConfig: { 
    strategy: string,
    display: string,
    ref: string;
    imagepath: string;
}[] = [
    {
        strategy: "Email",
        display: "jalfonsclarito@gmail.com",
        ref: "mailto:jalfonsclarito@gmail.com",
        imagepath: "gmail.png"
    },
    {
        strategy: "LinkedIn",
        display: "jaclarito",
        ref: "https://www.linkedin.com/in/jaclarito/",
        imagepath: "linkedin.png"
    },
    {
        strategy: "GitHub",
        display: "FonseLULW",
        ref: "https://github.com/FonseLULW",
        imagepath: "github-mark.svg"
    },
    {
        strategy: "Location",
        display: "Vancouver, Canada",
        ref: "https://www.google.com/maps/place/Vancouver,+BC/@49.2576508,-123.2639868,11z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu",
        imagepath: "location.png"
    }
]