function copyEmail() {

    navigator.clipboard.writeText(
        "seogs1004@naver.com"
    );

    alert("이메일이 복사되었습니다.");
}

function downloadVCard() {

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
        { type: 'text/vcard' }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;
    a.download = 'SEO_JISU.vcf';

    a.click();

    URL.revokeObjectURL(url);
}