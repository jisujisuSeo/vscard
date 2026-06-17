document.addEventListener("DOMContentLoaded", () => {

    const emailBtn =
        document.getElementById("email-copy");

    if(emailBtn){

        emailBtn.addEventListener(
            "click",
            copyEmail
        );
    }

});


function copyEmail(){

    navigator.clipboard.writeText(
        "seogs1004@naver.com"
    )
    .then(() => {

        alert(
            "이메일이 클립보드에 복사되었습니다."
        );

    })
    .catch(() => {

        alert(
            "복사에 실패했습니다."
        );

    });

}


function sendEmail(){

    const email =
    "seogs1004@naver.com";

    const subject =
    encodeURIComponent(
        "SEO JISU | Contact"
    );

    window.location.href =
    `mailto:${email}?subject=${subject}`;

}


function downloadVCard(){

const vcard =
`BEGIN:VCARD
VERSION:3.0
FN:서지수
TITLE:Development PM
TEL:01067784077
EMAIL:seogs1004@naver.com
END:VCARD`;

const blob = new Blob(
    [vcard],
    {
        type:'text/vcard'
    }
);

const url =
URL.createObjectURL(blob);

const a =
document.createElement('a');

a.href = url;

a.download =
'SEO_JISU.vcf';

a.click();

URL.revokeObjectURL(url);

}