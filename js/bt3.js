function timeSince(date) {

    const now = new Date();
    console.log(now)
    const currentDate = new Date(date);

    // doi tu milisecond sang second
    const second = Math.floor((now.getTime() - currentDate.getTime()) / 1000);

    let timer = second / 31536000;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} nam truoc `);
        return;
    }

    timer = second / 2678400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} thang truoc `);
        return;
    }


    timer = second / 604800;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tuan truoc `);
        return;
    }

    timer = second / 86400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} ngay truoc `);
        return;
    }
    timer = second / 3600;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} gio truoc `);
        return;
    }

    timer = second / 60;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} phut truoc `);
        return;
    }


    console.log(`${Math.floor(second)} giay truoc `);
    return;

    // nam = 365 * 24 * 60 * 60 = 31536000
    //thang = 31 * 24 * 60 * 60 = 2678400
    //tuan = 7 * 24 * 60 *60 = 604800
    // ngay = 1 * 24 * 60 * 60 = 86400
    // gio = 1 * 60 * 60 =3600
    //phut = 60





    // console.log(second);


}

timeSince('Sun Oct 30 2022 19:22:02 GMT+0700 (Giờ Đông Dương)');